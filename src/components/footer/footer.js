import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FooterMenuList } from '@/constants/menu-constant';
import { Link } from 'react-router-dom';
export default function Footer() {
    const menuList = FooterMenuList;
    return (_jsx("footer", { className: 'left-0 w-full p-5 footer-section bg-neutral-50', children: _jsx("div", { className: 'container flex justify-center', children: menuList.map((list, index) => (_jsxs(Link, { to: list.url, className: 'p-3', children: [" ", list.name, " "] }, index))) }) }));
}
