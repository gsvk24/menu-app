// src/components/MenuForm.tsx
import React, { useState } from "react";

interface MenuFormProps {
  onAddItem: (item: {
    name: string;
    description: string;
    price: number;
    image: string;
  }) => void;
}

const MenuForm: React.FC<MenuFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem({ name, description, price, image });
    setName("");
    setDescription("");
    setPrice(0);
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Item
      </button>
    </form>
  );
};

export default MenuForm;
