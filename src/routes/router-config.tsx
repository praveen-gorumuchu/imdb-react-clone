import Layout from "@/layouts/main";
import React, { lazy } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/home/hero/hero"));
const WishList = lazy(() => import("../pages/wist-list/wishList"));
const Login = lazy(() => import("../pages/login/login"));

const routerConfig = [
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home /> }, // Default route for "/"
      { path: "wish-list", element: <WishList /> },
      { path: "login", element: <Login /> },
    ],
  },
];

export default routerConfig;
