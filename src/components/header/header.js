import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { MenuConstant } from "@/constants/menu-constant";
import { useEffect, useState } from "react";
import { NumberConstant } from "@/constants/Numbers.constant";
function Header() {
    const menuList = MenuConstant;
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > NumberConstant.FIVE * NumberConstant.TEN);
        };
        window.addEventListener(('scroll'), handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsx("header", { className: `header ${scrolled ? 'fixed-header' : ''}`, children: _jsxs("div", { className: "container flex items-center justify-between px-6 py-4 mx-auto", children: [_jsx("div", { className: "shrink-0 logo-section color-brand-primary", children: _jsx(Link, { to: "/", children: _jsx("img", { src: "src/assets/logos/logo.png", alt: "", width: 62 }) }) }), _jsx("nav", { className: "hidden space-x-8 md:flex nav-links", children: menuList.map((menu, index) => (_jsxs(NavLink, { to: menu.url, className: ({ isActive }) => (isActive ? "active" : "nav-link"), children: [" ", menu.name, " "] }, index))) })] }) }));
}
export default Header;
