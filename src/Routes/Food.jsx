import React, { useContext } from 'react';
import { store } from '../Store/StoreCompo';
import { NavLink } from 'react-router-dom';

export default function Food() {
  const { data } = useContext(store);

  // Filter food category blogs
  const foodBlogs = data.filter((item) => item.cat === "food");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
      
      {/* Left Section */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2">Food</h1>
        {foodBlogs.slice(0, 7).map((item) => (
          <div key={item.id} className="flex gap-4 mb-6 border-b pb-4">
            <img className="w-40 h-32 object-cover rounded-lg" src={item.img} alt="Not found" />
            <div>
              <h2 className="text-xl font-semibold">
                <NavLink to={`/blog/${item.id}`} className="hover:text-blue-600">{item.title}</NavLink>
              </h2>
              <p className="text-gray-600 text-sm">{item.desc.slice(0, 200)}...</p>
              <p className="text-gray-500 text-xs"><b>Category:</b> {item.date || "18-12-2023"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div>
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">Top Post</h1>

        {/* Special Top Blog */}
        {foodBlogs.length > 7 && (
          <div className="border p-4 rounded-lg shadow-sm mb-6">
            <img className="w-full h-40 object-cover rounded-md" src={foodBlogs[7].img} alt="Not found" />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">
                <NavLink to={`/blog/${foodBlogs[7].id}`} className="hover:text-blue-600">{foodBlogs[7].title}</NavLink>
              </h3>
              <p className="text-gray-600 text-sm">{foodBlogs[7].desc.slice(0, 300)}...</p>
              <p className="text-gray-500 text-xs"><b>Category:</b> {foodBlogs[7].date || "18-12-2023"}</p>
            </div>
          </div>
        )}

        {/* Remaining Blogs */}
        {foodBlogs.slice(8).map((item) => (
          <div key={item.id} className="flex gap-3 mb-4 border-b pb-2">
            <img className="w-20 h-16 object-cover rounded-lg" src={item.img} alt="Not found" />
            <div>
              <h4 className="text-md font-semibold">
                <NavLink to={`/blog/${item.id}`} className="hover:text-blue-600">{item.title}</NavLink>
              </h4>
              <p className="text-gray-500 text-xs"><b>Category:</b> {item.date || "18-12-2023"}</p>
            </div>
          </div>
        ))}

        {/* Advertisement */}
        <img className="w-full h-40 object-cover mt-6 rounded-md shadow-sm" src="data:image/jpeg;base64,/..." alt="Advertisement" />
      </div>
    </div>
  );
}
