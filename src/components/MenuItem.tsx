import React from "react";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;
