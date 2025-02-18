import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images.jpeg";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 w-full bg-cyan-300">
            <nav className="border-gray-200 px-6 py-2.5 w-full">
                <div className="container mx-auto flex justify-between items-center w-full">
                    {/* Logo */}
                    <div className="flex w-10 j h-5 gap-2 items-center">
                    <img  src={logo} alt="not loaded" />
                        <NavLink to="/" className="text-xl font-bold text-orange-950">
                        The Siren
                        
                    </NavLink>
                   
                    </div>
                    

                    {/* Mobile Toggle Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                    <div className={`lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 text-lg font-medium w-full lg:w-auto">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Bollywood", path: "/bollywood" },
                                { name: "Technology", path: "/technology" },
                                { name: "Hollywood", path: "/hollywood" },
                                { name: "Fitness", path: "/fitness" },
                                { name: "Food", path: "/food" },
                            ].map(({ name, path }) => (
                                <li key={name} className="py-2 lg:py-0">
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 transition duration-200 ${
                                                isActive
                                                    ? "text-orange-500 border-b-2 border-orange-500"
                                                    : "text-gray-600 hover:text-orange-500"
                                            }`
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
