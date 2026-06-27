import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/95 border-b border-white/10">
      
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <Link
              to="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              InterviewHub 🚀
            </Link>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 ${
                      isActive
                        ? "text-indigo-400 font-semibold"
                        : "hover:text-indigo-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <RiMenu3Fill size={28} />
          </button>

        </div>

      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-950 border-r border-white/10 z-50 transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">

          <h2 className="text-xl font-bold text-indigo-400">
            InterviewHub
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <RxCross2 size={28} />
          </button>

        </div>

        {/* Sidebar Links */}
        <div className="p-6 flex flex-col gap-5">

          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg transition-all duration-300 ${
                  isActive
                    ? "text-indigo-400 font-semibold"
                    : "text-gray-300 hover:text-indigo-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 py-3 rounded-xl font-semibold">
              Sign Up
            </button>
          </Link>

        </div>

      </div>
    </>
  );
};

export default Navbar;