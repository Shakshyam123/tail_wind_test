import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function Homelayout() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Homelayout;
