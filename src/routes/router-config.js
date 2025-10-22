import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "@/layouts/main";
import { lazy } from "react";
// Lazy-loaded pages
const Home = lazy(() => import("../pages/home/hero/hero"));
const WishList = lazy(() => import("../pages/wist-list/wishList"));
const Login = lazy(() => import("../pages/login/login"));
const routerConfig = [
    {
        path: "/",
        element: _jsx(Layout, {}),
        children: [
            { index: true, element: _jsx(Home, {}) }, // Default route for "/"
            { path: "wish-list", element: _jsx(WishList, {}) },
            { path: "login", element: _jsx(Login, {}) },
        ],
    },
];
export default routerConfig;
