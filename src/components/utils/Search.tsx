"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full h-10 flex items-center relative"
    >
      <IoSearch className="text-xl text-gray-500 absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search food /  restaurant"
        className="w-full h-10 max-w-[350px] bg-white rounded-full text-sm outline-none pl-10 pr-5 placeholder:text-gray-500 shadow-sm hover:shadow-lg focus:border-[#261d56] focus:border transition-all duration-300"
      />
    </form>
  );
};

export default Search;
