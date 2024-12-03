import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import BlogProvider from "./components/Blog/Context/BlogContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <BlogProvider>
        <App />
      </BlogProvider>
    </Router>
  </StrictMode>
);
