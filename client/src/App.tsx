import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Home from "./components/Blog/Home";
import Blog from "./components/Blog/ReadBlog/Blog";
import Publish from "./components/Blog/Publish";

import MyBlogs from "./components/User/MyBlogs";

type Blog = {
  title: string;
  content: string;
  author: string;
  createdAt?: string;
};

function App() {
  return (
    <div>
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
