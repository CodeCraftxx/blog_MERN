import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Blog/pages/User/Register";
import Login from "./components/Blog/pages/User/Login";
import Home from "./components/Blog/pages/Home/Home";
import Blog from "./components/Blog/pages/ReadBlog/Blog";
import Publish from "./components/Blog/pages/Publish/Publish";

import MyBlogs from "./components/Blog/pages/User/MyBlogs";
import NavBar from "./components/NavBar";
type Blog = {
  title: string;
  content: string;
  author: string;
  createdAt?: string;
};

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/publish" element={<Publish />} />
        {/* Estas todavía no están - NO UTILIZAR POR EL MOMENTO */}
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
