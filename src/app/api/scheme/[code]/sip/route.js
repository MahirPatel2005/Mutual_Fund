// src/app/api/scheme/[code]/sip/route.js
import { NextResponse } from "next/server";
import { fetchScheme } from "../../../../../lib/mfapi";
import { parseISO, addMonths, addWeeks, addDays, differenceInDays } from "date-fns";

/**
 * convert dd-mm-yyyy to yyyy-mm-dd
 */
function toISO(ddmmyyyy) {
  const [d, m, y] = ddmmyyyy.split("-");
  return `${y}-${m}-${d}`;
}

/**
 * legacy helper: find NAV on or before isoDate (navData: latest-first, date: DD-MM-YYYY)
 */
function findNavForDateOrNext(navData, isoDate) {
  for (let i = 0; i < navData.length; i++) {
    if (toISO(navData[i].date) <= isoDate) return parseFloat(navData[i].nav);
  }
  return null;
}

/**
 * The SIP formula you provided:
 *  M = P * ( ((1+i)^n - 1) / i ) * (1 + i)
 *
 * where:
 *  P = monthly contribution
 *  i = periodic rate (monthly) => i = (1 + annualRate)^(1/12) - 1
 *  n = total payments (months) = years * 12
 *
 * Returns { totalInvested, estimatedReturns, totalValue }
 */
function sipFutureValueUsingExactConversion(P, annualRatePercent, years) {
  const n = Math.round(years * 12);
  if (n <= 0) return { totalInvested: 0, estimatedReturns: 0, totalValue: 0 };

  const annualRate = Number(annualRatePercent) / 100;
  // monthly periodic i using the compound-root conversion
  const i = Math.pow(1 + annualRate, 1 / 12) - 1;

  const invested = P * n;
  if (i === 0) {
    // no return scenario
    return { totalInvested: invested, estimatedReturns: 0, totalValue: invested };
  }

  const factor = (Math.pow(1 + i, n) - 1) / i;
  const M = P * factor * (1 + i); // maturity amount
  const estReturns = M - invested;

  return { totalInvested: invested, estimatedReturns: estReturns, totalValue: M };
}

export async function POST(req, context) {
  // await params per Next.js rule
  const { code } = await context.params;

  // parse body
  let body = {};
  try {
    body = await req.json();
  } catch (e) {
    body = {};
  }

  // If UI-style input present: use exact SIP formula with periodic conversion
  if (
    Object.prototype.hasOwnProperty.call(body, "monthlyInvestment") &&
    Object.prototype.hasOwnProperty.call(body, "expectedRate") &&
    Object.prototype.hasOwnProperty.call(body, "years")
  ) {
    const P = Number(body.monthlyInvestment) || 0;
    const annualRate = Number(body.expectedRate) || 0; // percent, e.g. 12
    const years = Number(body.years) || 0;

    const result = sipFutureValueUsingExactConversion(P, annualRate, years);

    // round numbers to cents/paise (2 decimals)
    const out = {
      totalInvested: Math.round(result.totalInvested * 100) / 100,
      estimatedReturns: Math.round(result.estimatedReturns * 100) / 100,
      totalValue: Math.round(result.totalValue * 100) / 100,
      formula: "M = P * ( ((1+i)^n - 1) / i ) * (1 + i); i = (1+annual)^(1/12)-1",
      inputs: { monthlyInvestment: P, expectedRate: annualRate, years },
    };

    return NextResponse.json(out);
  }

  // --- fallback: legacy NAV-based SIP simulation (unchanged) ---
  const amount = Number(body.amount);
  const frequency = body.frequency || "monthly";
  const from = body.from;
  const to = body.to;

  if (!amount || !from) {
    return NextResponse.json(
      {
        error:
          "Invalid request. Provide either { monthlyInvestment, expectedRate, years } OR legacy { amount, frequency, from, to }.",
      },
      { status: 400 }
    );
  }

  try {
    const scheme = await fetchScheme(code);
    const navData = scheme.data;
    if (!navData || navData.length === 0) {
      return NextResponse.json({ error: "No NAV data" }, { status: 404 });
    }

    const start = parseISO(from);
    const end = parseISO(to || toISO(navData[0].date));
    let nextDate = start;
    let totalInvested = 0,
      totalUnits = 0;

    while (nextDate <= end) {
      const iso = nextDate.toISOString().slice(0, 10);
      const nav = findNavForDateOrNext(navData, iso);
      if (nav) {
        totalUnits += amount / nav;
        totalInvested += amount;
      }
      if (frequency === "monthly") nextDate = addMonths(nextDate, 1);
      else if (frequency === "quarterly") nextDate = addMonths(nextDate, 3);
      else if (frequency === "weekly") nextDate = addWeeks(nextDate, 1);
      else if (frequency === "daily") nextDate = addDays(nextDate, 1);
      else nextDate = addMonths(nextDate, 1);
    }

    const latestNav = parseFloat(navData[0].nav);
    const currentValue = totalUnits * latestNav;
    const absoluteReturn = ((currentValue - totalInvested) / totalInvested) * 100;
    const days = differenceInDays(end, start);
    let annualized = null;
    if (days >= 30) {
      const yearsSpan = days / 365.0;
      annualized = (Math.pow(currentValue / totalInvested, 1 / yearsSpan) - 1) * 100;
    }

    return NextResponse.json({
      totalInvested,
      currentValue,
      totalUnits,
      absoluteReturn,
      annualized,
      mode: "nav_simulation",
      inputs: { amount, frequency, from, to: to || toISO(navData[0].date) },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
