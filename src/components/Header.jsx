import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/Bs";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl  sm:mx-auto sm:py-6 px-3">
      <div className="flex items-center gap-5">
        <div className="">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
        </div>
        <div className="">
          <MenuItem title="about" address={"/about"} Icon={BsInfoCircleFill} />
        </div>
      </div>
      {/* <div className="flex items-center">
        <div className="">
          <MenuItem title="" address="" Icon={AiFillHome} />
        </div>
        <div className="">
          <MenuItem title="" address="/" Icon={AiFillHome} />
        </div>{" "}
        <div className="">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
        </div>
      </div> */}
      <div className="flex items-center justify-center gap-5">
        <DarkModeSwitch />
        <h2>
          <span className="bg-amber-500 font-bold rounded-lg py-1 px-2">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
