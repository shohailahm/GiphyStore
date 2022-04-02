import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky top-0 z-20">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Giphy Store
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4  lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Trending
          </Link>
          <Link
            to="/search"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Search
          </Link>
        </div>
        <div className="flex justify-center">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}

export default Header;
