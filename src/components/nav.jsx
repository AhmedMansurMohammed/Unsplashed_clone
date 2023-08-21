import React, { useState } from "react";
import { CgMenuOreos, CgClose, CgSearch } from "react-icons/cg";
import Button from "./Button";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className="relative w-full h-20 align-top">
      <div className="w-full h-full bg-slate-100 flex items-center">
        <div className="flex items-center justify-between p-5 w-full gap-8 ">
          <h1 className="text-xl font-bold flex-2 whitespace-nowrap ">
            Splash <span className="text-teal-500 ">Clone.</span>
          </h1>

          {/* Mobile menu button responsive */}
          <div
            className="p-2 md:hidden "
            onClick={() => {
              toggleNav();
            }}
          >
            <CgMenuOreos className="text-2xl " />
          </div>
          {/* Desktop links */}
          <div className=" hidden md:flex items-center flex-8 w-full justify-between ">
            <ul className="flex items-center gap-4">
              <li className="text-sm text-slate-600 font-bold ">Works</li>
              <li className="text-sm text-slate-600 whitespace-nowrap">
                Currated Collections
              </li>
              <li className="text-sm text-slate-600 whitespace-nowrap">
                Editorial Features{" "}
              </li>
              <li className="text-sm text-slate-600 whitespace-nowrap">More</li>
            </ul>
            <ul className="flex items-center gap-4">
              <li className="flex items-center gap-2 text-slate-400 px-3 py-1 rounded-md whitespace-nowrap">
                <CgSearch />
                <p className="text-sm ">Search by...</p>
              </li>
              <li>
                <Button text={"Log in"} outline />
              </li>
              <li>
                <Button text={"Create Account"} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      {isOpen && (
        <div className="w-full absolute top-0 left-0 h-screen z-10 p-5 bg-slate-100 ">
          <div className="max-w-7xl mx-auto p-5 ">
            <div className="flex items-center justify-between w-full mb-10 ">
              <h1 className="text-xl font-bold  ">
                Splash <span className="text-teal-500 ">Clone.</span>
              </h1>
              <div className="p-4" onClick={toggleNav}>
                <CgClose className="text-xl" />
              </div>
            </div>
            <ul className="  ">
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                Works
              </li>
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                Curated Collections
              </li>
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                Editorial Features
              </li>
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                More
              </li>
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                Search bar
              </li>
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                Create account button
              </li>
              <li className="text-slate-500 hover:bg-slate-200 hover:font-bold hover:text-teal-500 py-4 px-2 mb-2 text-center ">
                Login
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
