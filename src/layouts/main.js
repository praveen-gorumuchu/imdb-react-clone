import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx("div", { className: '', children: _jsxs("main", { children: [" ", _jsx(Outlet, {}), " "] }) }), _jsx(Footer, {})] }));
}
