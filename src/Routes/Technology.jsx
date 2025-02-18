import React, { useContext } from "react";
import { store } from "../Store/StoreCompo";
import { NavLink } from "react-router-dom";

export default function Technology() {
  const { data } = useContext(store);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
        Technology
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Content - Main Blog Posts */}
        <div className="lg:col-span-2">
          {data
            .filter((item) => item.cat === "technology")
            .slice(0, 7)
            .map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  className="w-full sm:w-48 h-32 object-cover rounded-lg"
                  src={item.img}
                  alt="not found"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">
                    <NavLink to={`/blog/${item.id}`} className="hover:text-blue-600">
                      {item.title}
                    </NavLink>
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.desc.slice(0, 150)}...
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    <b>Technology:</b> 18-12-2023
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Right Content - Top Post & Ads */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Top Post
          </h1>

          {data
            .filter((item) => item.cat === "technology")
            .slice(7, 8)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition mb-4"
              >
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={item.img}
                  alt="not found"
                />
                <h3 className="text-lg font-semibold mt-2">
                  <NavLink to={`/blog/${item.id}`} className="hover:text-blue-600">
                    {item.title}
                  </NavLink>
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc.slice(0, 200)}...
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <b>Technology:</b> 18-12-2023
                </p>
              </div>
            ))}

          {data
            .filter((item) => item.cat === "technology")
            .slice(8)
            .map((item, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <img
                  className="w-16 h-16 object-cover rounded-lg"
                  src={item.img}
                  alt="not found"
                />
                <div>
                  <h4 className="text-sm font-semibold">
                    <NavLink to={`/blog/${item.id}`} className="hover:text-blue-600">
                      {item.title}
                    </NavLink>
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    <b>Technology:</b> 18-12-2023
                  </p>
                </div>
              </div>
            ))}

          {/* Advertisement */}
          <img
            className="w-full h-48 object-cover rounded-lg mt-6"
            src="https://images.pexels.com/photos/18690123/pexels-photo-18690123/free-photo-of-portrait-of-pregnant-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Advertisement"
          />
        </div>
      </div>
    </div>
  );
}
