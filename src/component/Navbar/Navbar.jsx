import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import GlobleContext from "../../Globalcontext";

// import { useState } from "react";

function Navbar() {
  const contextValues = useContext(GlobleContext);
  const { setTheme } = contextValues;

  function changeColor(e) {
    const value = e.target.value;
    if (value === "theme1") {
      setTheme({
        backgroundColor: "red",
        color: "yellow",
      });
    } else if (value === "theme2") {
      setTheme({
        backgroundColor: "green",
        color: "red",
      });
    } else if (value === "theme3") {
      setTheme({
        backgroundColor: "orange",
        color: "blue",
      });
    } else {
      setTheme({
        backgroundColor: "black",
        color: "white",
      });
    }
  }
  return (
    <div className="">
      <ul className="bg-[url('/public/board.jpg')] h-18">
        <li className="flex gap-10 ml-10 text-2xl text-white text-center font-semibold">
          <img src="sakshyam.png" className="h-16" />
          <NavLink
            className={({ isActive }) => `border-
            ${isActive ? "text-orange-700" : "text-black"}
               text-black hover:bg-white hover:text-black rounded-md p-1 mt-1 mb-1`}
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => `border-
            ${isActive ? "text-orange-700" : "text-black"}
            text-black
                 
            hover:bg-white
            hover:text-black
            rounded-md
            p-1
            mt-1`}
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => `border-
   ${isActive ? "text-orange-700" : "text-black"}
   text-black
        
   hover:bg-white
   hover:text-black
   rounded-md
   p-1
   mt-1`}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => `border-
              ${isActive ? "text-orange-700" : "text-black"}
              text-black
                   
              hover:bg-white
              hover:text-black
              rounded-md
              p-1
              mt-1`}
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
        <li>
          <label>
            Change color
            <select onChange={changeColor}>
              <option value=""></option>
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
