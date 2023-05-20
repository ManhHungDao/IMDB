"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    if (!search) return;
    const data = search;
    setSearch("");
    router.push(`/search/${data}`);
  };
  return (
    <>
      <div className="max-w-6xl sm:mx-auto flex items-center justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Keywords..."
          className="w-full h-14  outline-none border-none placeholder-gray-500 bg-transparent flex-1"
        />
        <button
          onClick={handleSubmit}
          className="text-amber-600 disabled:text-gray-400"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
