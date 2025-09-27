// src/app/api/scheme/[code]/returns/route.js
import { NextResponse } from "next/server";
import { fetchScheme } from "../../../../../lib/mfapi";
import { parseISO, differenceInDays } from "date-fns";

function periodToRange(period, latestDateStr) {
  const latest = parseISO(latestDateStr);
  const map = { '1m': 30, '3m': 90, '6m': 182, '1y': 365 };
  const days = map[period];
  if (!days) return null;
  const start = new Date(latest.getTime() - days * 24 * 3600 * 1000);
  return start.toISOString().slice(0, 10);
}

function toISO(ddmmyyyy) {
  const [d, m, y] = ddmmyyyy.split('-');
  return `${y}-${m}-${d}`;
}

function findNAVOnOrBefore(data, dateStr) {
  for (let i = 0; i < data.length; i++) {
    if (toISO(data[i].date) <= dateStr) return parseFloat(data[i].nav);
  }
  return null;
}

export async function GET(req, context) {
  const { code } = await context.params;
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  try {
    const scheme = await fetchScheme(code);
    const navData = scheme.data;
    if (!navData || navData.length === 0) {
      return NextResponse.json({ error: "No NAV data" }, { status: 404 });
    }

    const latest = toISO(navData[0].date);
    let startDate = from;
    let endDate = to || latest;
    if (period && !from && !to) startDate = periodToRange(period, latest);
    if (!startDate) return NextResponse.json({ error: "provide period or from/to" }, { status: 400 });

    const startNAV = findNAVOnOrBefore(navData, startDate);
    const endNAV = findNAVOnOrBefore(navData, endDate);
    const days = differenceInDays(new Date(endDate), new Date(startDate));
    const simpleReturn = ((endNAV - startNAV) / startNAV) * 100;
    let annualized = null;
    if (days >= 30) {
      const years = days / 365.0;
      annualized = (Math.pow(endNAV / startNAV, 1 / years) - 1) * 100;
    }

    return NextResponse.json({ startDate, endDate, startNAV, endNAV, simpleReturn, annualized });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
