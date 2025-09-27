// src/app/api/scheme/[code]/returns/route.js
import { NextResponse } from "next/server";
import { fetchScheme } from "../../../../../lib/mfapi";
import { parseISO, differenceInDays, subMonths, subYears } from "date-fns";

/**
 * Convert MFAPI date "DD-MM-YYYY" -> "YYYY-MM-DD"
 */
function toISO(ddmmyyyy) {
  const [d, m, y] = ddmmyyyy.split("-");
  return `${y}-${m}-${d}`;
}

/**
 * Find NAV value on or before the ISO date.
 * navData is expected latest-first array of {date: "DD-MM-YYYY", nav: "123.45"}
 * Returns number or null
 */
function findNavOnOrBefore(navData, isoDate) {
  for (let i = 0; i < navData.length; i++) {
    const navIso = toISO(navData[i].date);
    if (navIso <= isoDate) {
      const v = parseFloat(navData[i].nav);
      return Number.isFinite(v) ? v : null;
    }
  }
  return null;
}

/**
 * Compute simple & annualized returns given startNav, endNav and dayCount
 */
function calcReturns(startNAV, endNAV, days) {
  if (startNAV == null || endNAV == null) return { simpleReturnPercent: null, annualizedReturnPercent: null };
  const simpleReturnPercent = ((endNAV - startNAV) / startNAV) * 100;
  let annualizedReturnPercent = null;
  if (days >= 30) {
    const years = days / 365.0;
    annualizedReturnPercent = (Math.pow(endNAV / startNAV, 1 / years) - 1) * 100;
  }
  return { simpleReturnPercent, annualizedReturnPercent };
}

/**
 * Build period result object for a given startDate (ISO) and endDate (ISO)
 */
function buildPeriodResult(navData, startISO, endISO) {
  const startNAV = findNavOnOrBefore(navData, startISO);
  const endNAV = findNavOnOrBefore(navData, endISO);
  if (startNAV == null || endNAV == null) {
    return {
      startDate: startISO,
      endDate: endISO,
      startNAV: startNAV,
      endNAV: endNAV,
      days: null,
      simpleReturnPercent: null,
      annualizedReturnPercent: null,
      note: "NAV not available for one or both dates"
    };
  }
  const days = differenceInDays(parseISO(endISO), parseISO(startISO));
  const { simpleReturnPercent, annualizedReturnPercent } = calcReturns(startNAV, endNAV, days);
  return {
    startDate: startISO,
    endDate: endISO,
    startNAV,
    endNAV,
    days,
    simpleReturnPercent,
    annualizedReturnPercent
  };
}

export async function GET(req, context) {
  // must await params per Next.js app-router rules
  const { code } = await context.params;

  // parse query params
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period"); // e.g. 1m,6m,1y,5y,10y
  const from = searchParams.get("from"); // custom start ISO e.g. 2020-01-01
  const to = searchParams.get("to");     // custom end ISO

  try {
    const scheme = await fetchScheme(code);
    const navData = scheme.data;
    if (!navData || !Array.isArray(navData) || navData.length === 0) {
      return NextResponse.json({ error: "No NAV data available for this scheme" }, { status: 404 });
    }

    // latest available NAV date (iso)
    const latestISO = toISO(navData[0].date);

    // Helper to compute start ISO given months/years
    const periodsMap = {
      "1m": () => subMonths(parseISO(latestISO), 1),
      "6m": () => subMonths(parseISO(latestISO), 6),
      "1y": () => subYears(parseISO(latestISO), 1),
      "5y": () => subYears(parseISO(latestISO), 5),
      "10y": () => subYears(parseISO(latestISO), 10)
    };

    // If custom from/to provided -> compute that single custom result
    if (from && to) {
      // sanity: ensure ISO format; no conversion here
      const startISO = from;
      const endISO = to;
      const result = buildPeriodResult(navData, startISO, endISO);
      return NextResponse.json({ mode: "custom", result });
    }

    // If a single period requested via query -> compute that only
    if (period) {
      if (!Object.keys(periodsMap).includes(period)) {
        return NextResponse.json({ error: "Invalid period. Valid: 1m,6m,1y,5y,10y" }, { status: 400 });
      }
      const startDateObj = periodsMap[period]();
      const startISO = startDateObj.toISOString().slice(0, 10);
      const endISO = latestISO;
      const result = buildPeriodResult(navData, startISO, endISO);
      return NextResponse.json({ mode: "period", period, result });
    }

    // Default: return all standard periods for quick-access
    const results = {};
    for (const p of ["1m", "6m", "1y", "5y", "10y"]) {
      const startDateObj = periodsMap[p]();
      const startISO = startDateObj.toISOString().slice(0, 10);
      const endISO = latestISO;
      results[p] = buildPeriodResult(navData, startISO, endISO);
    }

    return NextResponse.json({
      mode: "all_standard_periods",
      latestDate: latestISO,
      periods: results
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to compute returns" }, { status: 500 });
  }
}
