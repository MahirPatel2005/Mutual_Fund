// src/app/api/scheme/[code]/route.js
import { NextResponse } from "next/server";
import { fetchScheme } from "../../../../../lib/mfapi";

export async function GET(req, context) {
  // params should be awaited before accessing properties
  const { code } = await context.params;
  try {
    const data = await fetchScheme(code);
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch scheme" }, { status: 500 });
  }
}
