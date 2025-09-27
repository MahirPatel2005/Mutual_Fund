module.exports = [
"[project]/.next-internal/server/app/api/scheme/[code]/sip/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/app/api/scheme/[code]/sip/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/scheme/[code]/sip/route.js
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mfapi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mfapi.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInDays.js [app-route] (ecmascript)");
;
;
;
/**
 * convert dd-mm-yyyy to yyyy-mm-dd
 */ function toISO(ddmmyyyy) {
    const [d, m, y] = ddmmyyyy.split("-");
    return `${y}-${m}-${d}`;
}
/**
 * legacy helper: find NAV on or before isoDate (navData: latest-first, date: DD-MM-YYYY)
 */ function findNavForDateOrNext(navData, isoDate) {
    for(let i = 0; i < navData.length; i++){
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
 */ function sipFutureValueUsingExactConversion(P, annualRatePercent, years) {
    const n = Math.round(years * 12);
    if (n <= 0) return {
        totalInvested: 0,
        estimatedReturns: 0,
        totalValue: 0
    };
    const annualRate = Number(annualRatePercent) / 100;
    // monthly periodic i using the compound-root conversion
    const i = Math.pow(1 + annualRate, 1 / 12) - 1;
    const invested = P * n;
    if (i === 0) {
        // no return scenario
        return {
            totalInvested: invested,
            estimatedReturns: 0,
            totalValue: invested
        };
    }
    const factor = (Math.pow(1 + i, n) - 1) / i;
    const M = P * factor * (1 + i); // maturity amount
    const estReturns = M - invested;
    return {
        totalInvested: invested,
        estimatedReturns: estReturns,
        totalValue: M
    };
}
async function POST(req, context) {
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
    if (Object.prototype.hasOwnProperty.call(body, "monthlyInvestment") && Object.prototype.hasOwnProperty.call(body, "expectedRate") && Object.prototype.hasOwnProperty.call(body, "years")) {
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
            inputs: {
                monthlyInvestment: P,
                expectedRate: annualRate,
                years
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(out);
    }
    // --- fallback: legacy NAV-based SIP simulation (unchanged) ---
    const amount = Number(body.amount);
    const frequency = body.frequency || "monthly";
    const from = body.from;
    const to = body.to;
    if (!amount || !from) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid request. Provide either { monthlyInvestment, expectedRate, years } OR legacy { amount, frequency, from, to }."
        }, {
            status: 400
        });
    }
    try {
        const scheme = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mfapi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchScheme"])(code);
        const navData = scheme.data;
        if (!navData || navData.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No NAV data"
            }, {
                status: 404
            });
        }
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(from);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(to || toISO(navData[0].date));
        let nextDate = start;
        let totalInvested = 0, totalUnits = 0;
        while(nextDate <= end){
            const iso = nextDate.toISOString().slice(0, 10);
            const nav = findNavForDateOrNext(navData, iso);
            if (nav) {
                totalUnits += amount / nav;
                totalInvested += amount;
            }
            if (frequency === "monthly") nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMonths"])(nextDate, 1);
            else if (frequency === "quarterly") nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMonths"])(nextDate, 3);
            else if (frequency === "weekly") nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addWeeks"])(nextDate, 1);
            else if (frequency === "daily") nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])(nextDate, 1);
            else nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMonths"])(nextDate, 1);
        }
        const latestNav = parseFloat(navData[0].nav);
        const currentValue = totalUnits * latestNav;
        const absoluteReturn = (currentValue - totalInvested) / totalInvested * 100;
        const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["differenceInDays"])(end, start);
        let annualized = null;
        if (days >= 30) {
            const yearsSpan = days / 365.0;
            annualized = (Math.pow(currentValue / totalInvested, 1 / yearsSpan) - 1) * 100;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            totalInvested,
            currentValue,
            totalUnits,
            absoluteReturn,
            annualized,
            mode: "nav_simulation",
            inputs: {
                amount,
                frequency,
                from,
                to: to || toISO(navData[0].date)
            }
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

//# sourceMappingURL=%5Broot-of-the-server%5D__015e8650._.js.map