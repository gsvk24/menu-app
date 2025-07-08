import React from 'react';

// MenuItem interface
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Props for MenuCard component
interface MenuCardProps {
  item: MenuItem;
}

// Menu card component
const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { name, description, price, image } = item;

  return (
    <div className="overflow-hidden transition-transform duration-300 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>
          <span className="px-3 py-1 text-sm font-semibold rounded-full bg-amber-100 text-amber-800">
            ${Number(price).toFixed(2)}
          </span>
        </div>
        <p className="mb-4 text-gray-600 line-clamp-2">{description}</p>
        <button className="w-full px-4 py-2 font-medium text-white transition-colors duration-300 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
