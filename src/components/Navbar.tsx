import React from "react";
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-20 container mx-auto px-4 w-full flex justify-between items-center">
        <p className="flex justify-center items-center gap-2">
          <h2 className="text-grey-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        <div className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm">Bangladesh</p>
          <SearchBox value={value}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
