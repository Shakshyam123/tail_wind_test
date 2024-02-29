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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/newlogin" element={<Newloginpage />} />
        </Route>
        <Route path="/admin" element={<Protected />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default App;
