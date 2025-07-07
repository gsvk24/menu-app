import { useState } from "react"; // Оставляем только необходимый импорт
import "./App.css";
import MenuCard from "./components/MenuCard";
import MenuForm from "./components/MenuForm";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";

function App() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addItem = (item: {
    name: string;
    description: string;
    price: number;
    image: string;
  }) => {
    setMenuItems([...menuItems, { ...item, id: menuItems.length + 1 }]);
    setIsModalOpen(false);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="mt-8 text-2xl font-bold">Menu</h2>
      <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 mb-4 text-white bg-green-500 rounded"
      >
        Add New Item
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MenuForm onAddItem={addItem} />
      </Modal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
