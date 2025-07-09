// src/components/SearchBar.tsx
import React from "react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search menu items..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 mb-4 border"
    />
  );
};

export default SearchBar;
