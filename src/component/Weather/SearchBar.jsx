import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="flex gap-2">
      
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 px-4 py-2 rounded-lg bg-white/20 outline-none text-white placeholder-gray-300"
      />

      <button
        onClick={onSearch}
        className="bg-indigo-600 p-3 rounded-lg hover:bg-indigo-700 transition"
      >
        <FaSearch size={18} />
      </button>

    </div>
  );
};

export default SearchBar;