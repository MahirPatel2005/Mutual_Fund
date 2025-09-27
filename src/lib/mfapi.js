const axios = require('axios');
const cache = require('./cache');

const MF_LIST_URL = 'https://api.mfapi.in/mf';
const SCHEME_URL = (code) => `https://api.mfapi.in/mf/${code}`;

async function fetchAllSchemes() {
  const key = 'mf_all_schemes';
  const cached = cache.get(key);
  if (cached) return cached;
  const res = await axios.get(MF_LIST_URL, { timeout: 10000 });
  const data = res.data;
  cache.set(key, data, 60 * 60);
  return data;
}

async function fetchScheme(code) {
  const key = `scheme_${code}`;
  const cached = cache.get(key);
  if (cached) return cached;
  const res = await axios.get(SCHEME_URL(code), { timeout: 10000 });
  const data = res.data;
  cache.set(key, data, 60 * 60);
  return data;
}

module.exports = { fetchAllSchemes, fetchScheme };