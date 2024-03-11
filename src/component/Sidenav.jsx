import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Sidenav({ children }) {
  const [data, setData] = useState({ name: "", roll: "" });
  const params = useParams();
  // console.log(params.num);
  async function hello() {
    try {
      const fish = await axios({
        method: "get",
        url: `http://localhost:5005/admin/${params.num}`,
      });
      console.log(fish.data);
      setData(fish.data);
    } catch (err) {
      console.log(err.data);
    }
  }
  useEffect(() => {
    hello();
  }, [params]);
  const navigate = useNavigate();
  function logout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <div>
      <div className="flex">
        <div className="bg-slate-100 pl-12 pr-16 font-semibold pb-10 shadow-lg h-[90vh] overflow-auto">
          <nav>
            <ul>
              <li className="mb-2">
                <h1>Dashboard</h1>
                <NavLink
                  to="/admin/home"
                  href="#"
                  className={({ isActive }) => `border-
                  ${
                    isActive ? "text-orange-700" : "text-black"
                  }block py-2 px-4 rounded hover:bg-gray-700`}
                >
                  Default
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/service"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Analytic
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/about"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Sales
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/contact"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Contact
                </NavLink>
              </li>
              <h1>Dashboard</h1>
              <li className="mb-2">
                <NavLink
                  to="/admin/1"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Default
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/2"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Analytic
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/3"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Sales
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/4"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Contact
                </NavLink>
              </li>
              <h1>Dashboard</h1>
              <li className="mb-2">
                <NavLink
                  to="/admin/1"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Default
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/2"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Analytic
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/3"
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Sales
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/4"
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
                  className="text-white border-1 p-2 rounded bg-slate-700 boder-none hover:bg-slate-500"
                >
                  signout
                </button>
              </div>
            </ul>
          </nav>
        </div>
        <div>{data.name}</div>
        <div>{data.roll}</div>
      </div>
      {children ? (
        <> {children}</>
      ) : (
        <div>
          <div>{data.name}</div>
          <div>{data.roll}</div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
