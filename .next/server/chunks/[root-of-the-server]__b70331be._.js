module.exports = [
"[project]/.next-internal/server/app/api/scheme/[code]/returns/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/cache.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const cache = new Map();
function set(key, value, ttlSeconds = 300) {
    const expiresAt = Date.now() + ttlSeconds * 1000;
    cache.set(key, {
        value,
        expiresAt
    });
}
function get(key) {
    const entry = cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
        cache.delete(key);
        return null;
    }
    return entry.value;
}
module.exports = {
    get,
    set
};
}),
"[project]/src/lib/mfapi.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const axios = __turbopack_context__.r("[project]/node_modules/axios/dist/node/axios.cjs [app-route] (ecmascript)");
const cache = __turbopack_context__.r("[project]/src/lib/cache.js [app-route] (ecmascript)");
const MF_LIST_URL = 'https://api.mfapi.in/mf';
const SCHEME_URL = (code)=>`https://api.mfapi.in/mf/${code}`;
async function fetchAllSchemes() {
    const key = 'mf_all_schemes';
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await axios.get(MF_LIST_URL, {
        timeout: 10000
    });
    const data = res.data;
    cache.set(key, data, 60 * 60);
    return data;
}
async function fetchScheme(code) {
    const key = `scheme_${code}`;
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await axios.get(SCHEME_URL(code), {
        timeout: 10000
    });
    const data = res.data;
    cache.set(key, data, 60 * 60);
    return data;
}
module.exports = {
    fetchAllSchemes,
    fetchScheme
};
}),
"[project]/src/app/api/scheme/[code]/returns/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/scheme/[code]/returns/route.js
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mfapi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mfapi.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subYears.js [app-route] (ecmascript)");
;
;
;
/**
 * Convert MFAPI date "DD-MM-YYYY" -> "YYYY-MM-DD"
 */ function toISO(ddmmyyyy) {
    const [d, m, y] = ddmmyyyy.split("-");
    return `${y}-${m}-${d}`;
}
/**
 * Find NAV value on or before the ISO date.
 * navData is expected latest-first array of {date: "DD-MM-YYYY", nav: "123.45"}
 * Returns number or null
 */ function findNavOnOrBefore(navData, isoDate) {
    for(let i = 0; i < navData.length; i++){
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
 */ function calcReturns(startNAV, endNAV, days) {
    if (startNAV == null || endNAV == null) return {
        simpleReturnPercent: null,
        annualizedReturnPercent: null
    };
    const simpleReturnPercent = (endNAV - startNAV) / startNAV * 100;
    let annualizedReturnPercent = null;
    if (days >= 30) {
        const years = days / 365.0;
        annualizedReturnPercent = (Math.pow(endNAV / startNAV, 1 / years) - 1) * 100;
    }
    return {
        simpleReturnPercent,
        annualizedReturnPercent
    };
}
/**
 * Build period result object for a given startDate (ISO) and endDate (ISO)
 */ function buildPeriodResult(navData, startISO, endISO) {
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
    const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["differenceInDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(endISO), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(startISO));
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
async function GET(req, context) {
    // must await params per Next.js app-router rules
    const { code } = await context.params;
    // parse query params
    const { searchParams } = new URL(req.url);
    const period = searchParams.get("period"); // e.g. 1m,6m,1y,5y,10y
    const from = searchParams.get("from"); // custom start ISO e.g. 2020-01-01
    const to = searchParams.get("to"); // custom end ISO
    try {
        const scheme = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mfapi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchScheme"])(code);
        const navData = scheme.data;
        if (!navData || !Array.isArray(navData) || navData.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No NAV data available for this scheme"
            }, {
                status: 404
            });
        }
        // latest available NAV date (iso)
        const latestISO = toISO(navData[0].date);
        // Helper to compute start ISO given months/years
        const periodsMap = {
            "1m": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(latestISO), 1),
            "6m": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(latestISO), 6),
            "1y": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subYears"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(latestISO), 1),
            "5y": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subYears"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(latestISO), 5),
            "10y": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subYears"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(latestISO), 10)
        };
        // If custom from/to provided -> compute that single custom result
        if (from && to) {
            // sanity: ensure ISO format; no conversion here
            const startISO = from;
            const endISO = to;
            const result = buildPeriodResult(navData, startISO, endISO);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                mode: "custom",
                result
            });
        }
        // If a single period requested via query -> compute that only
        if (period) {
            if (!Object.keys(periodsMap).includes(period)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid period. Valid: 1m,6m,1y,5y,10y"
                }, {
                    status: 400
                });
            }
            const startDateObj = periodsMap[period]();
            const startISO = startDateObj.toISOString().slice(0, 10);
            const endISO = latestISO;
            const result = buildPeriodResult(navData, startISO, endISO);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                mode: "period",
                period,
                result
            });
        }
        // Default: return all standard periods for quick-access
        const results = {};
        for (const p of [
            "1m",
            "6m",
            "1y",
            "5y",
            "10y"
        ]){
            const startDateObj = periodsMap[p]();
            const startISO = startDateObj.toISOString().slice(0, 10);
            const endISO = latestISO;
            results[p] = buildPeriodResult(navData, startISO, endISO);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            mode: "all_standard_periods",
            latestDate: latestISO,
            periods: results
        });
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to compute returns"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b70331be._.js.map