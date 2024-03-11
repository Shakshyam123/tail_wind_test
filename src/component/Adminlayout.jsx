/* eslint-disable react/prop-types */
// import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminFooter from "./AdminFooter";
import AndminNavbar from "./AndminNavbar";
import Sidenav from "./Sidenav";
function Adminlayout({ children }) {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex-col ">
          <div className="">
            <AndminNavbar />
          </div>
          <div className="flex">
            <Sidenav />
            <div>{children}</div>
          </div>
          <div className="bg-gray-800 h-28 ">
            <AdminFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlayout;
