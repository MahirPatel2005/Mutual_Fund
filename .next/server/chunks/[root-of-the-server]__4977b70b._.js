module.exports = [
"[project]/.next-internal/server/app/api/scheme/[code]/fund-returns/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/app/api/scheme/[code]/fund-returns/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/scheme/[code]/fund-returns/route.js
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mfapi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mfapi.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInDays.js [app-route] (ecmascript)");
;
;
;
// DD-MM-YYYY -> YYYY-MM-DD
function toISO(ddmmyyyy) {
    const [d, m, y] = ddmmyyyy.split("-");
    return `${y}-${m}-${d}`;
}
// Find NAV on or before isoDate (navData latest-first)
function findNav(navData, isoDate) {
    for(let i = 0; i < navData.length; i++){
        if (toISO(navData[i].date) <= isoDate) return parseFloat(navData[i].nav);
    }
    return null;
}
// Map preset -> months
const presetMonths = {
    "1m": 1,
    "6m": 6,
    "1y": 12,
    "5y": 60,
    "10y": 120
};
// Count months between start and end (inclusive rule: count full month intervals)
// If end.day >= start.day we treat that as an additional month (so 2024-09-26 -> 2025-09-26 => 12)
function monthsBetweenInclusive(startISO, endISO) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(startISO);
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(endISO);
    let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    // add one if day-of-month of end >= day-of-month of start (count inclusive)
    if (e.getDate() >= s.getDate()) months += 1;
    return Math.max(0, months);
}
async function POST(req, context) {
    const { code } = await context.params;
    let body = {};
    try {
        body = await req.json();
    } catch (e) {
        body = {};
    }
    const mode = (body.mode || "sip").toLowerCase(); // 'sip' or 'lumpsum'
    const amount = Number(body.amount || 0);
    const period = body.period; // preset like '1y'
    const from = body.from;
    const to = body.to;
    if (!mode || !amount) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "mode (lumpsum|sip) and amount are required"
        }, {
            status: 400
        });
    }
    try {
        const scheme = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mfapi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchScheme"])(code);
        const navData = scheme.data;
        if (!navData || navData.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No NAV data"
        }, {
            status: 404
        });
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
            const startDateObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(endISO), -monthsCount);
            startISO = startDateObj.toISOString().slice(0, 10);
        } else {
            // default 1 year
            monthsCount = 12;
            const startDateObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(endISO), -monthsCount);
            startISO = startDateObj.toISOString().slice(0, 10);
        }
        const startNAV = findNav(navData, startISO);
        const endNAV = findNav(navData, endISO);
        if (!endNAV) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No NAV for end date"
        }, {
            status: 400
        });
        let totalInvested = 0, currentValue = 0, totalUnits = 0;
        if (mode === "lumpsum") {
            const startNAV = findNav(navData, startISO);
            if (!startNAV) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No NAV for start date"
            }, {
                status: 400
            });
            // AMC-style: round units to 3 decimals
            totalUnits = Math.floor(amount / startNAV * 1000) / 1000;
            totalInvested = amount;
            currentValue = totalUnits * endNAV;
        } else if (mode === "sip") {
            // iterate exactly monthsCount times, buying once each month on the same day-of-month as 'startISO'
            const sDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(startISO);
            for(let i = 0; i < monthsCount; i++){
                const buyDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMonths"])(sDate, i);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unknown mode, use 'lumpsum' or 'sip'"
            }, {
                status: 400
            });
        }
        const absReturn = totalInvested === 0 ? null : (currentValue - totalInvested) / totalInvested * 100;
        const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["differenceInDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(endISO), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(startISO));
        let annualized = null;
        if (totalInvested > 0 && days >= 30) {
            const years = days / 365.0;
            annualized = (Math.pow(currentValue / totalInvested, 1 / years) - 1) * 100;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4977b70b._.js.map