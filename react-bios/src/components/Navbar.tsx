import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import logo from "../assets/images/RUB.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-green-50 shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo links */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RUB Logo" className="h-12 w-auto" />
        </Link>

        {/* Navigatie over de hele breedte verdeeld */}
        <div className="flex-1 ml-10">
          <div className="flex justify-evenly text-gray-700 font-medium items-center">
            <Link to="/" className="flex items-center gap-1 hover:text-green-700 transition">
              <AiOutlineHome />
              <span>Home</span>
            </Link>

            <Link to="/products" className="flex items-center gap-1 hover:text-green-700 transition">
              <FaShoppingBag />
              <span>Producten</span>
            </Link>

            <Link to="/favorites" className="flex items-center gap-1 hover:text-green-700 transition">
              <MdOutlineFavoriteBorder className="text-lg" />
              <span>Favorieten</span>
            </Link>

            <Link to="/cart" className="flex items-center gap-1 hover:text-green-700 transition">
              <FaShoppingCart className="text-lg" />
              <span>Winkelmandje</span>
            </Link>

            <Link to="/contact" className="flex items-center gap-1 hover:text-green-700 transition">
              <HiOutlineMail className="text-lg" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
