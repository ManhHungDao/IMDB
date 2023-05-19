// import React, { useState } from "react";

const SearchBar = () => {
  // const [search, setSearch] = useState("");
  return (
    <>
      <div className="max-w-6xl sm:mx-auto flex py-6">
        <input
          className="py-6 bg-transparent w-64"
          placeholder="Search Keywords..."
        />
        <button className="w-14">Search</button>
      </div>
    </>
  );
};

export default SearchBar;
