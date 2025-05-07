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
            className="text
