import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SearchBar({ onSearch, placeholder }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative transition-all duration-300 ${
        isExpanded ? 'w-full md:w-96' : 'w-40 md:w-64'
      }`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        placeholder={placeholder || t('common.search')}
        className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 hover:text-gray-900"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar; 