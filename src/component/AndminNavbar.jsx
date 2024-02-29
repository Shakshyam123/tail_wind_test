import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";

function AndminNavbar() {
  const navigate = useNavigate();
  function logout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <div className="flex h-full">
      <div className="bg-slate-500 text-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4"></h2>
          <nav>
            <ul>
              <li className="mb-2">
                <NavLink
                  to="/home"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/contact"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/about"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Services
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/blog"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Contact
                </NavLink>
              </li>
              <div>
                <br />
                <button
                  onClick={logout}
                  className=" text-white border-1 p-2 rounded bg-slate-700 boder-none hover:bg-slate-500"
                >
                  signout
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-4/5 bg-white p-6"></div>
    </div>
  );
}

export default AndminNavbar;
