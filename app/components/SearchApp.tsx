'use client';

import { useSearch } from '../hooks/useSearch';
import SearchBar from './SearchBar';

export default function SearchApp() {
  const {
    searchTerm,
    setSearchTerm,
    commitSearch,
    searchResults,
    loading,
    searchHistory,
    trendingSearches,
    clearHistory,
    isSearchFocused,
    setIsSearchFocused,
    categories,
    brands,
  } = useSearch();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Product Search</h1>
        <p className="text-gray-600 mb-8">Powered by LunrJS - Search across 50+ products with real-time results</p>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          isSearchFocused={isSearchFocused}
          onFocusChange={setIsSearchFocused}
          searchHistory={searchHistory}
          trendingSearches={trendingSearches}
          onClearHistory={clearHistory}
          results={searchResults}
          loading={loading}
          categories={categories}
          brands={brands}
          onCommit={commitSearch}
        />
      </div>
    </div>
  );
} 