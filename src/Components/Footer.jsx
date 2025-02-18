import React from "react";
import logo from "./images.jpeg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="=w-full  bg-blue-400 text-white py-3">
      <div className="flex flex-wrap justify-evenly">
        
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="mx-auto sm:mx-0 h-full-screen" />
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Explore</h3>
          <nav className="flex flex-col  space-y-1 text-10">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/Bollywood" className="hover:text-gray-400">Bollywood</Link>
            <Link to="/Technology" className="hover:text-gray-400">Technology</Link>
            <Link to="/Food" className="hover:text-gray-400">Food</Link>
            <Link to="/Hollywood" className="hover:text-gray-400">Hollywood</Link>
            <Link to="/Fitness" className="hover:text-gray-400">Fitness</Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <p className="text-xs">anujmishra71758@gmail.com</p>
          <p className="text-xs">7004018458</p>
          <p className="text-xs">Dehradun, Uttarakhand 248007</p>
        </div>

        {/* Social Links */}
        <div className="sm:col-span-3 flex justify-center space-x-4 mt-3 text-10">
          <a href="https://github.com/Anujmishra14" className="hover:text-orange-400">GitHub</a>
          <a href="https://www.instagram.com" className="hover:text-orange-400">Instagram</a>
          <a href="http://linkedin.com/in/anuj-kumar-mishra-a76a59277" className="hover:text-orange-400">LinkedIn</a>
          <a href="https://www.twitter.com" className="hover:text-orange-400">Twitter</a>
        </div>

        {/* Copyright */}
        <div className="sm:col-span-3 text-center text-orange-500 text-10 mt-2">
          © 2025 The Siren. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
