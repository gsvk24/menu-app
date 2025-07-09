import React from "react";

interface SearchBarProps {
  query: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search menu items..."
      value={query}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full p-2 mb-4 border rounded"
    />
  );
};

export default SearchBar;

// This component is a simple search bar that takes a query and a callback function to handle changes.
// It can be used in the main App component to filter menu items based on user input.

