import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// import { useState } from "react";

function Navbar() {
  return (
    <div>
      <ul className="bg-[url('/public/board.jpg')] h-18">
        <li className="flex gap-10 ml-10 text-2xl text-white text-center font-semibold">
          <img src="sakshyam.png" className="h-16" />
          <NavLink
            className="border- text-black hover:bg-white hover:text-black rounded-md p-1 mt-1 mb-1"
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            className="border-
            text-black
            hover:bg-white
            hover:text-black
            rounded-md
            p-1
            mt-1"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className="border- bg-darkgrey text-black hover:bg-white hover:text-black rounded-md p-1 mt-1"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="border- text-black hover:bg-white hover:text-black rounded-md p-1 mt-1 mb-1"
            to="/contact"
          >
            Contact
          </NavLink>

          <div className="flex justify-end w-full">
            <NavLink className="border-black-1 text-black bg-white cursor-pointer p-1 ml-32 flex gap-6 mt-1 mb-1 w-1/2">
              <FaSearch /> Search
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
