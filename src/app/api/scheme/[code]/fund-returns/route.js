// src/app/api/scheme/[code]/fund-returns/route.js
import { NextResponse } from "next/server";
import { fetchScheme } from "../../../../../lib/mfapi";
import { parseISO, addMonths, differenceInDays } from "date-fns";

// DD-MM-YYYY -> YYYY-MM-DD
function toISO(ddmmyyyy) {
  const [d, m, y] = ddmmyyyy.split("-");
  return `${y}-${m}-${d}`;
}

// Find NAV on or before isoDate (navData latest-first)
function findNav(navData, isoDate) {
  for (let i = 0; i < navData.length; i++) {
    if (toISO(navData[i].date) <= isoDate) return parseFloat(navData[i].nav);
  }
  return null;
}

// Map preset -> months
const presetMonths = { "1m": 1, "6m": 6, "1y": 12, "5y": 60, "10y": 120 };

// Count months between start and end (inclusive rule: count full month intervals)
// If end.day >= start.day we treat that as an additional month (so 2024-09-26 -> 2025-09-26 => 12)
function monthsBetweenInclusive(startISO, endISO) {
  const s = parseISO(startISO);
  const e = parseISO(endISO);
  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  // add one if day-of-month of end >= day-of-month of start (count inclusive)
  if (e.getDate() >= s.getDate()) months += 1;
  return Math.max(0, months);
}

export async function POST(req, context) {
  const { code } = await context.params;
  let body = {};
  try { body = await req.json(); } catch (e) { body = {}; }

  const mode = (body.mode || "sip").toLowerCase(); // 'sip' or 'lumpsum'
  const amount = Number(body.amount || 0);
  const period = body.period; // preset like '1y'
  const from = body.from;
  const to = body.to;

  if (!mode || !amount) {
    return NextResponse.json({ error: "mode (lumpsum|sip) and amount are required" }, { status: 400 });
  }

  try {
    const scheme = await fetchScheme(code);
    const navData = scheme.data;
    if (!navData || navData.length === 0) return NextResponse.json({ error: "No NAV data" }, { status: 404 });

    const latestISO = toISO(navData[0].date);
    const endISO = to || latestISO;

    // Determine startISO and months count
    let startISO;
    let monthsCount;

    if (from && to) {
      startISO = from;
      monthsCount = monthsBetweenInclusive(startISO, endISO);
    } else if (period && presetMonths[period]) {
      monthsCount = presetMonths[period];
      // compute start by subtracting months from end to preserve same day-of-month
      const startDateObj = addMonths(parseISO(endISO), -monthsCount);
      startISO = startDateObj.toISOString().slice(0, 10);
    } else {
      // default 1 year
      monthsCount = 12;
      const startDateObj = addMonths(parseISO(endISO), -monthsCount);
      startISO = startDateObj.toISOString().slice(0, 10);
    }

    const startNAV = findNav(navData, startISO);
    const endNAV = findNav(navData, endISO);
    if (!endNAV) return NextResponse.json({ error: "No NAV for end date" }, { status: 400 });

    let totalInvested = 0, currentValue = 0, totalUnits = 0;

    if (mode === "lumpsum") {
  const startNAV = findNav(navData, startISO);
  if (!startNAV) return NextResponse.json({ error: "No NAV for start date" }, { status: 400 });
  
  // AMC-style: round units to 3 decimals
  totalUnits = Math.floor((amount / startNAV) * 1000) / 1000;
  
  totalInvested = amount;
  currentValue = totalUnits * endNAV;
} else if (mode === "sip") {
      // iterate exactly monthsCount times, buying once each month on the same day-of-month as 'startISO'
      const sDate = parseISO(startISO);
      for (let i = 0; i < monthsCount; i++) {
        const buyDate = addMonths(sDate, i);
        const iso = buyDate.toISOString().slice(0, 10);
        const nav = findNav(navData, iso);
        if (nav) {
          totalUnits += amount / nav;
          totalInvested += amount;
        } else {
          // if nav missing even after searching earlier dates, skip (unlikely)
        }
      }
      currentValue = totalUnits * endNAV;
    } else {
      return NextResponse.json({ error: "Unknown mode, use 'lumpsum' or 'sip'" }, { status: 400 });
    }

    const absReturn = totalInvested === 0 ? null : ((currentValue - totalInvested) / totalInvested) * 100;
    const days = differenceInDays(parseISO(endISO), parseISO(startISO));
    let annualized = null;
    if (totalInvested > 0 && days >= 30) {
      const years = days / 365.0;
      annualized = (Math.pow(currentValue / totalInvested, 1 / years) - 1) * 100;
    }

    return NextResponse.json({
      schemeCode: code,
      mode,
      period: period || `${startISO} to ${endISO}`,
      startDate: startISO,
      endDate: endISO,
      monthsCount,
      totalInvested,
      currentValue,
      absoluteReturn: absReturn,
      annualizedReturn: annualized
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
