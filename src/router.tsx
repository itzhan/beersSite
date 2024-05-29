import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import LineAnimation from "./components/Border";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <LineAnimation /> }],
  },
]);

export default router;
