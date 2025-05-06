import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = (props) => {
  return (
    <div>
      
      <Navbar />
      <Outlet />
    
    </div>
  );
};

export default RootLayout;
