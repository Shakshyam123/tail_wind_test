import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

function AdminNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="bg-slate-50 h-20 flex flex-wrap items-center justify-between shadow-lg px-4 md:px-10 lg:px-16">
        <div className="font-bold text-xl">
          <NavLink to="/adminhome">Admindashboard</NavLink>
        </div>
        <div className="flex gap-3 items-center w-full md:w-auto mt-4 md:mt-0 relative">
          <button onClick={toggleVisibility}>
            <MdMenuOpen className="mt-2" size="30px" />
          </button>
          <br />
          {isVisible && (
            <div className="absolute top-full left-0 bg-white p-5 rounded shadow-lg text-xl">
              <ul>
                <NavLink>Home</NavLink>
                <hr />
                <NavLink>Service</NavLink>
                <hr />
                <NavLink>Class</NavLink>
                <hr />
                <NavLink>Home</NavLink>
                <hr />
                <NavLink>Service</NavLink>
                <hr />
                <NavLink>Class</NavLink>
              </ul>
            </div>
          )}
          <input
            type="text"
            placeholder="Search"
            className="p-2 border-black"
          />
        </div>
        <div className="flex items-center">
          <div className="flex gap-3">
            <NavLink>
              <CiBellOn size="25px" />
            </NavLink>
            <NavLink>
              <CiGlobe size="25px" />
            </NavLink>
            <NavLink>
              <IoSettingsOutline size="25px" />
            </NavLink>
          </div>
          <div className="flex items-center ml-4">
            <img
              className="rounded-full h-12 mr-2"
              src="../image5.jpg"
              alt="User"
            />
            <div>
              <h1 className="text-sm">Shakshyam</h1>
              <h1 className="text-sm">Frontend developer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
