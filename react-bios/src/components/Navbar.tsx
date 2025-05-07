import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaShoppingCart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import logo from "../assets/images/RUB.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-green-50 shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="RUB Logo" className="h-10 sm:h-12 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-green-700 focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-green-50 md:bg-transparent md:flex md:items-center md:gap-6 transition-all z-50`}
        >
          <div className="flex flex-col md:flex-row text-gray-700 font-medium items-start md:items-center p-4 md:p-0 gap-4 md:gap-6">
            <NavLink to="/" icon={<AiOutlineHome />} label="Home" closeMenu={closeMenu} />
            <NavLink to="/products" icon={<FaShoppingBag />} label="Producten" closeMenu={closeMenu} />
            <NavLink to="/favorites" icon={<MdOutlineFavoriteBorder />} label="Favorieten" closeMenu={closeMenu} />
            <NavLink to="/cart" icon={<FaShoppingCart />} label="Winkelmandje" closeMenu={closeMenu} />
            <NavLink to="/contact" icon={<HiOutlineMail />} label="Contact" closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  icon,
  label,
  closeMenu,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  closeMenu: () => void;
}) => (
  <Link
    to={to}
    onClick={closeMenu}
    className="flex items-center gap-2 hover:text-green-700 transition"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
