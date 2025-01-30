import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
