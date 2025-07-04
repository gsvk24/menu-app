import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuItem from "./components/MenuItem";
import MenuForm from "./components/MenuForm";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);
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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Menu Section */}
      <h2 className="text-2xl font-bold mt-8">Menu</h2>
      <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add New Item
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MenuForm onAddItem={addItem} />
      </Modal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
