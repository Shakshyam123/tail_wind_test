import "./App.css";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Error from "./component/error/Error";
import Homelayout from "./component/Homelayout";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/loginpage/Loginpage";
import Newloginpage from "./pages/loginpage/Newloginpage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Protected from "./component/Protected";
import Contactus from "./pages/contact/Contactus";
import Dynamic from "./pages/dynamicdata/Dynamic";
// import Adminhome from "./pages/admin/Adminhome";
import Adminservice from "./pages/admin/Adminservice";
import Adminabout from "./pages/admin/Adminabout";
import Admincontact from "./pages/admin/Admincontact";
// import Adminlayout from "./component/Adminlayout";
import AndminNavbar from "./component/AndminNavbar";
import Adminhome from "./pages/admin/Adminhome";
import GlobleContext from "./Globalcontext";
import { useState } from "react";
import Table from "./component/Table";
import Example from "./component/Materialtable";
import Validate from "./pages/contact/Validate";
import LoginPageNew from "./pages/contact/LoginPageNew";
import Register from "./pages/contact/Register";

function App() {
  const [theme, setTheme] = useState({
    backgroundColor: "black",
    color: "white",
  });
  return (
    <>
      <GlobleContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/" element={<Homelayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/newlogin" element={<Newloginpage />} />
          </Route>
          <Route path="/dynamic/:id" element={<Dynamic />} />
          <Route path="/name/:num" element={<Dashboard />} />
          <Route path="/admin" element={<Protected />}>
            <Route path="/adminnav" element={<About />} />
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/admin/service" element={<Adminabout />} />
            <Route path="/adminabout" element={<Adminservice />} />
            <Route path="/admincontact" element={<Admincontact />} />
          </Route>

          <Route
            path="/admin/:num"
            element={
              <AndminNavbar>
                <Adminabout />
              </AndminNavbar>
            }
          />
          <Route path="/table" element={<Table />} />
          <Route path="/material" element={<Example />} />
          <Route path="/loginpage" element={<LoginPageNew />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/validate" element={<Validate />} />
        </Routes>
      </GlobleContext.Provider>
    </>
  );
}

export default App;
