import { useState } from "react";

function Header({ onSearch }) {
  const [textSearch, setSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white hover:font-bold">
            Home
          </a>
          <a href="#" className="text-white hover:font-bold">
            TV Show
          </a>
          <a href="#" className="text-white hover:font-bold">
            Movies
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className=" text-black bg-white rounded-sm py-1 px-1"
          onChange={(e) => setSearch(e.target.value)}
          value={textSearch}
        />
        <button
          onClick={() => onSearch(textSearch)}
          className="text-white bg-red-600 rounded-lg hover:font-bold hover:bg-red-300 px-4 py-1"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
export default Header;
