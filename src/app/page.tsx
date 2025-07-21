"use client";

import { useState, useEffect } from "react";
import MenuCard from "../components/MenuCard";
import MenuForm from "../components/MenuForm";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { starterItems } from "../../lib/constants";

const containerStyle = {
  width: "100%",
  maxWidth: "1400px",
  padding: "2rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
};

export default function Page() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (menuItems.length === 0) {
      setMenuItems(starterItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItem = (item: {
    name: string;
    description: string;
    price: number;
    image: string;
  }) => {
    setMenuItems((prevItems) => [
      ...prevItems,
      { ...item, id: crypto.randomUUID() },
    ]);
    setIsModalOpen(false);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginTop: "1rem", marginBottom: "2rem" }}>Menu</h1>
      <SearchBar query={searchQuery} onSearchChange={handleSearchChange} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 mb-4 text-white bg-green-500 rounded"
      >
        Add New Item
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MenuForm onAddItem={addItem} />
      </Modal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
