import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ onSearch }) {
  const [textSearch, setSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between ">
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
        <div className="relative flex items-center bg-[rgba(184,178,178,0.1)] rounded-sm py-1 px-1">
          <span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white mr-3 ml-3"
            />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className=" text-white  rounded-sm py-1 px-1 outline-none"
            onChange={(e) => setSearch(e.target.value)}
            value={textSearch}
          />
        </div>
        <button
          onClick={() => onSearch(textSearch)}
          className="text-white bg-red-600 rounded-sm hover:font-bold hover:font-bold px-4 py-1"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
export default Header;
