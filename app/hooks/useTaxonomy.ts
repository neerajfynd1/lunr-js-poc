"use client";

import { useEffect, useState, useCallback, useMemo } from 'react';
import lunr from 'lunr';

type CacheRecord<T> = {
  data: T;
  updatedAt: number;
};

const CATEGORIES_KEY = 'tax_categories_v1';
const BRANDS_KEY = 'tax_brands_v1';
const TRENDING_KEY = 'tax_trending_v1';

const ONE_MIN = 60 * 1000;
const TTL = {
  categories: 24 * 60 * ONE_MIN, // 24h
  brands: 24 * 60 * ONE_MIN, // 24h
  trending: 5 * ONE_MIN, // 5m
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

function loadCache<T>(key: string): CacheRecord<T> | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CacheRecord<T>;
  } catch {
    return null;
  }
}

function saveCache<T>(key: string, record: CacheRecord<T>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(record));
}

export function useTaxonomy() {
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [trending, setTrending] = useState<string[]>([]);
  const [loading, setLoading] = useState({ categories: true, brands: true, trending: true });

  const hydrateFromCache = useCallback(() => {
    const cat = loadCache<string[]>(CATEGORIES_KEY);
    if (cat?.data) setCategories(cat.data);
    const br = loadCache<string[]>(BRANDS_KEY);
    if (br?.data) setBrands(br.data);
    const tr = loadCache<string[]>(TRENDING_KEY);
    if (tr?.data) setTrending(tr.data);
  }, []);

  const refreshCategories = useCallback(async () => {
    try {
      const cache = loadCache<string[]>(CATEGORIES_KEY);
      if (cache && Date.now() - cache.updatedAt < TTL.categories) {
        setLoading(prev => ({ ...prev, categories: false }));
        return;
      }
      const json = await fetchJson<{ categories: string[]; updatedAt: number }>('/api/categories');
      setCategories(json.categories);
      saveCache(CATEGORIES_KEY, { data: json.categories, updatedAt: json.updatedAt });
    } finally {
      setLoading(prev => ({ ...prev, categories: false }));
    }
  }, []);

  const refreshBrands = useCallback(async () => {
    try {
      const cache = loadCache<string[]>(BRANDS_KEY);
      if (cache && Date.now() - cache.updatedAt < TTL.brands) {
        setLoading(prev => ({ ...prev, brands: false }));
        return;
      }
      const json = await fetchJson<{ brands: string[]; updatedAt: number }>('/api/brands');
      setBrands(json.brands);
      saveCache(BRANDS_KEY, { data: json.brands, updatedAt: json.updatedAt });
    } finally {
      setLoading(prev => ({ ...prev, brands: false }));
    }
  }, []);

  const refreshTrending = useCallback(async () => {
    try {
      const cache = loadCache<string[]>(TRENDING_KEY);
      if (cache && Date.now() - cache.updatedAt < TTL.trending) {
        setLoading(prev => ({ ...prev, trending: false }));
        return;
      }
      const json = await fetchJson<{ trending: string[]; updatedAt: number }>('/api/trending');
      setTrending(json.trending);
      saveCache(TRENDING_KEY, { data: json.trending, updatedAt: json.updatedAt });
    } finally {
      setLoading(prev => ({ ...prev, trending: false }));
    }
  }, []);

  // Build small Lunr indices for taxonomy
  const brandIndex = useMemo(() => {
    if (!brands.length) return null;
    return lunr(function () {
      this.ref('id');
      this.field('name', { boost: 2 });
      brands.forEach((b, i) => this.add({ id: String(i), name: b }));
    });
  }, [brands]);

  const categoryIndex = useMemo(() => {
    if (!categories.length) return null;
    return lunr(function () {
      this.ref('id');
      this.field('name', { boost: 2 });
      categories.forEach((c, i) => this.add({ id: String(i), name: c }));
    });
  }, [categories]);

  const trendingIndex = useMemo(() => {
    if (!trending.length) return null;
    return lunr(function () {
      this.ref('id');
      this.field('term', { boost: 3 });
      trending.forEach((t, i) => this.add({ id: String(i), term: t }));
    });
  }, [trending]);

  const searchBrands = useCallback((q: string, limit = 5): string[] => {
    const term = q.trim();
    if (!term || !brandIndex) return [];
    try {
      return brandIndex.search(term).slice(0, limit).map(r => brands[Number(r.ref)]).filter(Boolean);
    } catch {
      return [];
    }
  }, [brandIndex, brands]);

  const searchCategories = useCallback((q: string, limit = 5): string[] => {
    const term = q.trim();
    if (!term || !categoryIndex) return [];
    try {
      return categoryIndex.search(term).slice(0, limit).map(r => categories[Number(r.ref)]).filter(Boolean);
    } catch {
      return [];
    }
  }, [categoryIndex, categories]);

  const searchTrending = useCallback((q: string, limit = 6): string[] => {
    const term = q.trim();
    if (!term || !trendingIndex) return [];
    try {
      return trendingIndex.search(term).slice(0, limit).map(r => trending[Number(r.ref)]).filter(Boolean);
    } catch {
      return [];
    }
  }, [trendingIndex, trending]);

  useEffect(() => {
    hydrateFromCache();
    // Initial fetch
    refreshCategories();
    refreshBrands();
    refreshTrending();

    // Periodic refresh
    const trendingInterval = setInterval(refreshTrending, TTL.trending);
    const taxInterval = setInterval(() => {
      refreshCategories();
      refreshBrands();
    }, 60 * ONE_MIN); // hourly

    return () => {
      clearInterval(trendingInterval);
      clearInterval(taxInterval);
    };
  }, [hydrateFromCache, refreshCategories, refreshBrands, refreshTrending]);

  return {
    categories,
    brands,
    trending,
    loading,
    refreshCategories,
    refreshBrands,
    refreshTrending,
    searchBrands,
    searchCategories,
    searchTrending,
  };
} 