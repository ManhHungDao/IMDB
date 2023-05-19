import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="TopRated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
