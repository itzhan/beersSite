import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import TerroirPage from "./components/terroir/TerroirPage";
import Productpage from "./components/product/Productpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "terroir", element: <TerroirPage /> },
      { path: "product", element: <Productpage /> },
    ],
  },
]);

export default router;
