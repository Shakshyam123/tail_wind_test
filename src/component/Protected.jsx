import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import Adminlayout from "./Adminlayout";
function Protected() {
  const token = Cookies.get("token");
  return token ? (
    <>
      <Adminlayout>
        <Outlet />
      </Adminlayout>
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default Protected;
