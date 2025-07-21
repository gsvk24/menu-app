"use client";

import { useState, useEffect } from "react";
import MenuCard from "../src/components/MenuCard";
import MenuForm from "../src/components/MenuForm";
import SearchBar from "../src/components/SearchBar";
import Modal from "../src/components/Modal";

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
    fetch("/api/menu")
      .then((res) => res.json())
      .then(setMenuItems);
  }, []);

  const addItem = async (item: {
    name: string;
    description: string;
    price: number;
    image: string;
  }) => {
    try {
      const response = await fetch("/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("Ошибка при создании меню");
      }

      const newItem = await response.json();

      // Добавляем полученный элемент (с id из базы)
      setMenuItems((prevItems) => [...prevItems, newItem]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Ошибка добавления:", error);
      alert("Не удалось добавить блюдо. Попробуйте ещё раз.");
    }
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Menu</h1>
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
