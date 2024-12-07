import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Register from "./components/Blog/pages/User/Register";
import Login from "./components/Blog/pages/User/Login";
import Home from "./components/Blog/pages/Home/Home";
import Blog from "./components/Blog/pages/ReadBlog/Blog";
import Publish from "./components/Blog/pages/Publish/Publish";

import MyBlogs from "./components/Blog/pages/User/MyBlogs";
import NavBar from "./components/NavBar";
import UserInfo from "./components/Blog/pages/UserInfo";
type Blog = {
  title: string;
  content: string;
  author: string;
  createdAt?: string;
};

function App() {
  const location = useLocation();
  const noNavBarRoutes = ['/register', '/login'];
  return (
    <>
      {!noNavBarRoutes.includes(location.pathname) && <NavBar/>}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/my-account" element={<UserInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
