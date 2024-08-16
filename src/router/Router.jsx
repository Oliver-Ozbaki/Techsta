import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";

function Router() {
  const [productCard, setProductCard] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
