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
      className="border p-2 w-full mb-4"
    />
  );
};

export default SearchBar;
