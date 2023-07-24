import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-500 text-indigo-50 h-14 flex justify-center items-center">
      <header>
        <ul className="list-none flex justify-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/main">All Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
