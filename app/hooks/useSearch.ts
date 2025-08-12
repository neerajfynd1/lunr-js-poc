'use client';

import { useState, useEffect, useMemo } from 'react';
import lunr from 'lunr';
import debounce from 'lodash.debounce';
import { Product, products } from '../data/products';
import { useTaxonomy } from './useTaxonomy';

export interface SearchResult extends Product {
  score: number;
  highlights: string[];
}

interface SearchHookReturn {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  commitSearch: (term?: string) => void;
  searchResults: SearchResult[];
  loading: boolean;
  searchHistory: string[];
  trendingSearches: string[];
  clearHistory: () => void;
  isSearchFocused: boolean;
  setIsSearchFocused: (focused: boolean) => void;
  // taxonomy data for future UI usage
  categories: string[];
  brands: string[];
  matchedBrands: string[];
  matchedCategories: string[];
  matchedTrending: string[];
}

const SEARCH_HISTORY_KEY = 'search_history';
const MAX_HISTORY_ITEMS = 20;

export function useSearch(): SearchHookReturn {
  const [searchTerm, setSearchTermState] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Taxonomy (categories, brands, trending) fetched from API and cached locally
  const { categories, brands, trending, searchBrands, searchCategories, searchTrending } = useTaxonomy();

  // Create Lunr index
  const searchIndex = useMemo(() => {
    return lunr(function () {
      this.ref('id');
      this.field('name', { boost: 3 });
      this.field('description', { boost: 2 });
      this.field('brand', { boost: 2 });
      this.field('category');
      this.field('tags');

      products.forEach((product) => {
        this.add({
          id: product.id,
          name: product.name,
          description: product.description,
          brand: product.brand,
          category: product.category,
          tags: product.tags.join(' '),
        });
      });
    });
  }, []);

  // Load search history from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    }
  }, []);

  // Debounced search function (500ms)
  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        if (!term.trim()) {
          setSearchResults([]);
          setLoading(false);
          return;
        }

        try {
          const lunrResults = searchIndex.search(term) as Array<{ ref: string; score: number }>;
          const searchResults: SearchResult[] = lunrResults.map((result) => {
            const product = products.find((p) => p.id === result.ref)!;
            return {
              ...product,
              score: result.score,
              highlights: extractHighlights(product, term),
            };
          });

          setSearchResults(searchResults);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        }

        setLoading(false);
      }, 500),
    [searchIndex]
  );

  // Extract highlights from search term
  const extractHighlights = (product: Product, term: string): string[] => {
    const highlights: string[] = [];
    const searchTerms = term.toLowerCase().split(' ');

    searchTerms.forEach((searchTerm) => {
      if (product.name.toLowerCase().includes(searchTerm)) {
        highlights.push(product.name);
      }
      if (product.description.toLowerCase().includes(searchTerm)) {
        highlights.push('description');
      }
      if (product.brand.toLowerCase().includes(searchTerm)) {
        highlights.push('brand');
      }
      if (product.category.toLowerCase().includes(searchTerm)) {
        highlights.push('category');
      }
    });

    return [...new Set(highlights)];
  };

  // Set search term with debouncing
  const setSearchTerm = (term: string) => {
    setSearchTermState(term);
    setLoading(term.trim() !== '');
    debouncedSearch(term);
  };

  // Commit a search to history (only full words)
  const commitSearch = (term?: string) => {
    const value = (term ?? searchTerm).trim();
    if (!value) return;

    // Heuristics: avoid partial tokens like "gir" or "girl t"
    const tokens = value.split(/\s+/);
    const lastToken = tokens[tokens.length - 1] || '';
    const isLikelyPartial = lastToken.length < 2 || value.length < 4; // filter very short or trailing 1-char token
    if (isLikelyPartial) return;

    addToSearchHistory(value);
  };

  // Add search term to history
  const addToSearchHistory = (term: string) => {
    if (typeof window === 'undefined') return;

    const trimmedTerm = term.trim();
    if (!trimmedTerm) return;

    setSearchHistory((prev) => {
      const newHistory = [trimmedTerm, ...prev.filter((item) => item !== trimmedTerm)].slice(0, MAX_HISTORY_ITEMS);

      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };

  // Clear search history
  const clearHistory = () => {
    setSearchHistory([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
    }
  };

  // Taxonomy matches via their own indices
  const matchedBrands = useMemo(() => searchBrands(searchTerm, 5), [searchBrands, searchTerm]);
  const matchedCategories = useMemo(() => searchCategories(searchTerm, 5), [searchCategories, searchTerm]);
  const matchedTrending = useMemo(() => searchTrending(searchTerm, 6), [searchTrending, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    commitSearch,
    searchResults,
    loading,
    searchHistory,
    trendingSearches: matchedTrending.length ? matchedTrending : trending, // fallback to API list
    clearHistory,
    isSearchFocused,
    setIsSearchFocused,
    categories,
    brands,
    matchedBrands,
    matchedCategories,
    matchedTrending,
  };
}