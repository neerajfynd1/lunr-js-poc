# LunrJS Search Application

A Next.js 14 application featuring client-side search powered by LunrJS with real-time results, trending searches, and search history.

## Features

### Core Search Functionality
- **LunrJS Integration**: Client-side full-text search with relevance scoring
- **Real-time Results**: Debounced search with 300ms delay for optimal performance
- **Search Highlighting**: Visual highlighting of matching terms in results
- **Advanced Filtering**: Filter by category, brand, and stock status
- **Multiple Sort Options**: Sort by relevance, price, or name

### Smart Search Experience
- **Trending Searches**: Displays popular search terms (updates every 5 minutes)
- **Search History**: Stores last 20 searches in localStorage
- **Autocomplete Dropdown**: Shows trending searches and history when focused
- **Search Suggestions**: Filtered suggestions based on current input

### Product Catalog
- **50 Products**: Across 8 categories and 15 brands
- **Rich Product Data**: Name, description, brand, category, price, tags, and stock status
- **Responsive Grid**: Adaptive layout for different screen sizes

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **LunrJS**: Client-side full-text search engine
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **localStorage**: Client-side search history and trending searches storage

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lunr-js-poc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lunr-js-poc/
├── app/
│   ├── components/
│   │   ├── SearchApp.tsx      # Main search application
│   │   ├── SearchBar.tsx      # Search input with autocomplete
│   │   └── SearchResults.tsx  # Results display and filtering
│   ├── data/
│   │   └── products.ts        # Product data and types
│   ├── hooks/
│   │   └── useSearch.ts       # Search logic and LunrJS integration
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Usage Guide

### Basic Search
1. Type in the search bar to see real-time results
2. Results are automatically highlighted and sorted by relevance
3. Use filters to narrow down results by category, brand, or stock status

### Search History & Trending
1. Click on the search bar (without typing) to see:
   - Trending searches (popular terms)
   - Recent search history (last 20 searches)
2. Click any suggestion to search instantly
3. Use "Clear" button to remove search history

### Filtering & Sorting
- **Sort Options**: Relevance, Price (Low to High), Price (High to Low), Name (A-Z)
- **Filters**: In Stock Only, Categories, Brands
- **Real-time Filtering**: Results update immediately when filters change

## Key Features Implementation

### LunrJS Index Configuration
```typescript
const searchIndex = lunr(function() {
  this.ref('id');
  this.field('name', { boost: 3 });      // Highest priority
  this.field('description', { boost: 2 }); // Medium priority
  this.field('brand', { boost: 2 });
  this.field('category');
  this.field('tags');
});
```

### Search Features
- **Debounced Input**: 300ms delay to prevent excessive searches
- **Score-based Ranking**: LunrJS relevance scores for result ordering
- **Multi-field Search**: Searches across name, description, brand, category, and tags
- **Highlighting**: Visual emphasis on matching search terms

### Data Management
- **localStorage**: Persistent search history and trending searches
- **Automatic Updates**: Trending searches refresh every 5 minutes
- **History Limit**: Maximum 20 search history items

## Customization

### Adding Products
Edit `app/data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description...',
  brand: 'Brand Name',
  category: 'Category',
  price: 99.99,
  tags: ['tag1', 'tag2'],
  image: '/path/to/image',
  inStock: true
}
```

### Modifying Search Behavior
Adjust search configuration in `app/hooks/useSearch.ts`:
- Change debounce delay
- Modify field boost values
- Add new search fields
- Customize trending search logic

## Performance Considerations

- **Client-side Search**: No server requests for search operations
- **Optimized Indexing**: LunrJS index built once on component mount
- **Debounced Input**: Prevents excessive search operations
- **Memoized Components**: React optimization for better performance

## Browser Support

- Modern browsers with ES2015+ support
- localStorage support required for search history
- Responsive design for mobile and desktop

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Setup
The application is fully client-side and doesn't require any backend services or environment variables.

## License

This project is open source and available under the [MIT License](LICENSE). 