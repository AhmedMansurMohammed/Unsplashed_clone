import React from "react";
import { CgSearch } from "react-icons/cg";
import PillButton from "./pillButton";

const SearchBar = () => {
  return (
    <div className="bg-slate-100 p-20 mt-10">
      <h1 className="text-7xl font-bold">Search</h1>
      <div className="py-10">
        <p className="text-sm text-slate-500 mb-1 whitespace-nowrap">
          Millions of works, articles, and collections.
        </p>
        <span className="bg-gray-200 flex items-center gap-2 text-slate-400 p-3 rounded-md border border-slate-300 whitespace-nowrap">
          <CgSearch />
          <p className="text-sm ">Search by...</p>
        </span>
        <ul className="flex gap-2 items-center py-2">
          <li>
            <PillButton text={"vase "} />
          </li>
          <li>
            <PillButton text={"+ Add filter"} outline addbtn />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 border-b-2 border-dotted ">
          <li className="text-sm text-slate-600 flex gap-2">
            Works
            <span className="text-sm text-black bg-gray-200 rounded-lg border mb-2 border-slate-300 px-1">
              105.272
            </span>
          </li>
          <li className="text-sm text-slate-600 gap-2 flex">
            Currated Collections
            <span className="text-sm text-black bg-gray-200 rounded-lg border mb-2 border-slate-300 px-1">
              333
            </span>
          </li>
          <li className="text-sm text-slate-600 gap-2 flex">
            Editorial Features
            <span className="text-sm text-black bg-gray-200 rounded-lg border mb-2 border-slate-300 px-1">
              8
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
