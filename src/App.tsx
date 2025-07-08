  import { useState, useEffect } from "react";
  import "./App.css";
  import MenuCard from "./components/MenuCard";
  import MenuForm from "./components/MenuForm";
  import SearchBar from "./components/SearchBar";
  import Modal from "./components/Modal";

  function App() {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Start cards
    const starterItems = [
      {
        id: 1,
        name: "Классический бургер",
        description: "Говяжья котлета, сыр, салат, соус",
        price: 350,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        id: 2,
        name: "Салат Цезарь",
        description: "Курица, листья салата, сухарики, соус",
        price: 280,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
      },
      {
        id: 3,
        name: "Тирамису",
        description: "Классический итальянский десерт",
        price: 220,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      },
    ];

    // Start cards initializaion once
    useEffect(() => {
      if (menuItems.length === 0) {
        setMenuItems(starterItems);
      }
    }, []); // Empty dependencies array = only on mounting

    const addItem = (item: {
      name: string;
      description: string;
      price: number;
      image: string;
    }) => {
      setMenuItems((prevItems) => [
        ...prevItems,
        { ...item, id: Date.now() }, // Unique ID
      ]);
      setIsModalOpen(false);
    };

    const filteredItems = menuItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="p-6">
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
      </div>
    );
  }

  export default App;