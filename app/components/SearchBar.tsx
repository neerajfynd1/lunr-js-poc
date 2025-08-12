'use client';

import { useState, useRef, useEffect } from 'react';
import { SearchIcon, ClockIcon, TrendingUpIcon, XIcon, Tag as TagIcon, Store as StoreIcon } from 'lucide-react';
import type { SearchResult } from '../hooks/useSearch';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isSearchFocused: boolean;
  onFocusChange: (focused: boolean) => void;
  searchHistory: string[];
  trendingSearches: string[];
  onClearHistory: () => void;
  results?: SearchResult[];
  loading?: boolean;
  categories?: string[];
  brands?: string[];
  onCommit?: (term?: string) => void;
  matchedBrands?: string[];
  matchedCategories?: string[];
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  isSearchFocused,
  onFocusChange,
  searchHistory,
  trendingSearches,
  onClearHistory,
  results = [],
  loading = false,
  categories = [],
  brands = [],
  onCommit,
  matchedBrands = [],
  matchedCategories = [],
}: SearchBarProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        // Commit on outside click as well
        onCommit?.();
        setShowDropdown(false);
        onFocusChange(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onFocusChange, onCommit]);

  const handleFocus = () => {
    setShowDropdown(true);
    onFocusChange(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCommit?.();
    }
  };

  const handleBlur = () => {
    onCommit?.();
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    onCommit?.(suggestion);
    setShowDropdown(true);
    onFocusChange(true);
    inputRef.current?.focus();
  };

  const handleClearInput = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  const searchLower = searchTerm.toLowerCase();

  const filteredHistory = searchHistory.filter(item =>
    item.toLowerCase().includes(searchLower)
  );

  const filteredTrending = trendingSearches.filter(item =>
    item.toLowerCase().includes(searchLower)
  );

  // prefer indexed matches; fallback to client-side filters
  const brandsFromIndex = matchedBrands.length ? matchedBrands : brands.filter(b => b.toLowerCase().includes(searchLower)).slice(0, 5);
  const categoriesFromIndex = matchedCategories.length ? matchedCategories : categories.filter(c => c.toLowerCase().includes(searchLower)).slice(0, 5);

  const recentToShow = (searchTerm ? (filteredHistory.length > 0 ? filteredHistory : searchHistory) : searchHistory).slice(0, 6);

  const showSuggestions = showDropdown && (
    searchTerm === '' ||
    recentToShow.length > 0 ||
    filteredTrending.length > 0 ||
    results.length > 0 ||
    brandsFromIndex.length > 0 ||
    categoriesFromIndex.length > 0 ||
    loading
  );

  const getImageUrl = (item: SearchResult) => {
    const trimmed = (item.image || '').trim();
    return trimmed ? trimmed : `https://picsum.photos/seed/${item.id}/56/56`;
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="Search products, brands, categories..."
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
        />
        {searchTerm && (
          <button
            onClick={handleClearInput}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <XIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {showSuggestions && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto"
        >
          {searchTerm === '' && (
            <>
              {/* Trending Searches */}
              {trendingSearches.length > 0 && (
                <div className="p-3 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700 flex items-center">
                      <TrendingUpIcon className="h-4 w-4 mr-1" />
                      Trending Searches
                    </h3>
                  </div>
                  {trendingSearches.slice(0, 8).map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="block w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              )}

              {/* Search History */}
              {searchHistory.length > 0 && (
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700 flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      Recent Searches
                    </h3>
                    <button
                      onClick={onClearHistory}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      Clear
                    </button>
                  </div>
                  {searchHistory.slice(0, 8).map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="block w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {searchTerm !== '' && (
            <>
              {/* BRANDS Section */}
              {brandsFromIndex.length > 0 && (
                <div className="pt-3">
                  <div className="px-3 py-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Brands</div>
                  <ul className="px-3">
                    {brandsFromIndex.map((b, idx) => (
                      <li key={`${b}-${idx}`}>
                        <button
                          onClick={() => handleSuggestionClick(b)}
                          className="w-full text-left flex items-center gap-3 hover:bg-gray-50 rounded px-2 py-2"
                        >
                          <div className="h-7 w-7 flex items-center justify-center rounded border text-gray-600 bg-white">
                            <StoreIcon className="h-4 w-4" />
                          </div>
                          <span className="text-sm text-gray-900">{highlightMatch(b, searchTerm)}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CATEGORIES Section */}
              {categoriesFromIndex.length > 0 && (
                <div className="pt-3">
                  <div className="px-3 py-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Categories</div>
                  <ul className="px-3">
                    {categoriesFromIndex.map((c, idx) => (
                      <li key={`${c}-${idx}`}>
                        <button
                          onClick={() => handleSuggestionClick(c)}
                          className="w-full text-left flex items-center gap-3 hover:bg-gray-50 rounded px-2 py-2"
                        >
                          <div className="h-7 w-7 flex items-center justify-center rounded border text-gray-600 bg-white">
                            <TagIcon className="h-4 w-4" />
                          </div>
                          <span className="text-sm text-gray-900">{highlightMatch(c, searchTerm)}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PRODUCTS Section */}
              <div className="pt-3">
                <div className="px-3 py-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Products</div>
                <div className="p-3 pt-0">
                  {loading && (
                    <div className="flex items-center justify-center py-6 text-sm text-gray-500">
                      Searching...
                    </div>
                  )}

                  {!loading && results.length === 0 && (
                    <div className="py-4 text-sm text-gray-500 text-center">
                      No results
                    </div>
                  )}

                  <ul className="divide-y divide-gray-100">
                    {results.slice(0, 10).map((item) => (
                      <li key={item.id} className="py-2">
                        <button
                          onClick={() => handleSuggestionClick(item.name)}
                          className="w-full text-left flex items-center gap-3 hover:bg-gray-50 rounded px-2 py-2"
                        >
                          <img
                            src={getImageUrl(item)}
                            alt={item.name}
                            className="h-14 w-14 rounded object-cover border"
                          />
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {highlightMatch(item.name, searchTerm)}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {item.brand} • {item.category}
                            </div>
                            <div className="text-xs text-gray-700 truncate">
                              ${item.price.toFixed(2)}
                            </div>
                          </div>
                          <span className="ml-auto text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {(item.score * 100).toFixed(0)}% match
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Filtered history/trending as hints */}
              {(filteredTrending.length > 0 || recentToShow.length > 0) && (
                <div className="p-3 border-t border-gray-100">
                  {filteredTrending.length > 0 && (
                    <div className="mb-2">
                      <h4 className="text-xs font-semibold text-gray-500 mb-1">Trending</h4>
                      <div className="flex flex-wrap gap-1">
                        {filteredTrending.slice(0, 6).map((search, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(search)}
                            className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {highlightMatch(search, searchTerm)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {recentToShow.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-1">Recent</h4>
                      <div className="flex flex-wrap gap-1">
                        {recentToShow.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(search)}
                            className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {highlightMatch(search, searchTerm)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// Helper function to highlight matching text
function highlightMatch(text: string, searchTerm: string) {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <span key={index} className="bg-yellow-200">{part}</span>
    ) : (
      part
    )
  );
} 