import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <a href="/contact">Contact</a> */}

      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
