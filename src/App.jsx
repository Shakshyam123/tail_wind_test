import "./App.css";
import About from "./assets/about/About";
import Blog from "./assets/blog/Blog";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Error from "./error/Error";
import Homelayout from "./Homelayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
