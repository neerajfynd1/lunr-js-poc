'use client';

import { useState } from 'react';
import { Product } from '../data/products';
import { FilterIcon, SortAscIcon, SortDescIcon } from 'lucide-react';

interface SearchResult extends Product {
  score: number;
  highlights: string[];
}

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  searchTerm: string;
}

type SortOption = 'relevance' | 'price-low' | 'price-high' | 'name';

export default function SearchResults({ results, loading, searchTerm }: SearchResultsProps) {
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [filterInStock, setFilterInStock] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Get unique categories and brands from results
  const availableCategories = [...new Set(results.map(r => r.category))];
  const availableBrands = [...new Set(results.map(r => r.brand))];

  // Filter results
  const filteredResults = results.filter(result => {
    if (filterInStock && !result.inStock) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(result.category)) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(result.brand)) return false;
    return true;
  });

  // Sort results
  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'relevance':
      default:
        return b.score - a.score;
    }
  });

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">{part}</mark>
      ) : (
        part
      )
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Searching...</span>
      </div>
    );
  }

  if (searchTerm && results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No results found for "{searchTerm}"</div>
        <div className="text-gray-400 text-sm">Try different keywords or check your spelling</div>
      </div>
    );
  }

  if (!searchTerm) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">Start typing to search our products</div>
        <div className="text-gray-400 text-sm">Search across 50+ products, 8 categories, and 15 brands</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Search Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Search Results for "{searchTerm}"
        </h2>
        <p className="text-gray-600">
          {filteredResults.length} of {results.length} products found
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <SortAscIcon className="h-4 w-4 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* In Stock Filter */}
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={filterInStock}
              onChange={(e) => setFilterInStock(e.target.checked)}
              className="rounded"
            />
            <span>In Stock Only</span>
          </label>

          {/* Category Filter */}
          {availableCategories.length > 1 && (
            <div className="flex items-center space-x-2">
              <FilterIcon className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">Categories:</span>
              <div className="flex flex-wrap gap-1">
                {availableCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryToggle(category)}
                    className={`px-2 py-1 text-xs rounded ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Brand Filter */}
          {availableBrands.length > 1 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Brands:</span>
              <div className="flex flex-wrap gap-1">
                {availableBrands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => handleBrandToggle(brand)}
                    className={`px-2 py-1 text-xs rounded ${
                      selectedBrands.includes(brand)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedResults.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={`https://picsum.photos/300/200?random=${product.id}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {!product.inStock && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                  Out of Stock
                </div>
              )}
              <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                {(product.score * 100).toFixed(0)}% match
              </div>
            </div>
            
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-1">
                {product.brand} • {product.category}
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                {highlightText(product.name, searchTerm)}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {highlightText(product.description, searchTerm)}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                
                <button
                  disabled={!product.inStock}
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
              
              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1">
                {product.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    {highlightText(tag, searchTerm)}
                  </span>
                ))}
                {product.tags.length > 3 && (
                  <span className="text-gray-400 text-xs">
                    +{product.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results after filtering */}
      {results.length > 0 && filteredResults.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No products match your filters</div>
          <div className="text-gray-400 text-sm">Try adjusting your filter criteria</div>
        </div>
      )}
    </div>
  );
} 