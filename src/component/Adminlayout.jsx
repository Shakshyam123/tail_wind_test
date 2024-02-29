/* eslint-disable react/prop-types */
import AdminFooter from "./AdminFooter";
import AndminNavbar from "./AndminNavbar";

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
        <div className="flex h-full">
          <div className=" w-96 ">
            <AndminNavbar />
          </div>
          <div>{children}</div>
        </div>
        <div className="bg-gray-800 h-28 ">
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

export default Adminlayout;
