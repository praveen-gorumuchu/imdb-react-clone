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
    }
    window.addEventListener(('scroll'), handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <header className={`header ${scrolled ? 'fixed-header' : ''}`}>
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Left: Logo */}
        <div className="shrink-0 logo-section color-brand-primary">
          <Link to={"/"}>
            <img src="src/assets/logos/logo.png" alt="" width={62} />
          </Link>
        </div>

        {/* Right: Navbar Links */}
        <nav className="hidden space-x-8 md:flex nav-links">
          {menuList.map((menu: any, index: number) => (
            <NavLink
              key={index}
              to={menu.url}
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              {" "}
              {menu.name}{" "}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
