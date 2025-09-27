import { NextResponse } from "next/server";
import { fetchAllSchemes } from "../../../lib/mfapi";

export async function GET() {
  try {
    const data = await fetchAllSchemes();
    return NextResponse.json({ count: data.length, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch schemes" }, { status: 500 });
  }
}