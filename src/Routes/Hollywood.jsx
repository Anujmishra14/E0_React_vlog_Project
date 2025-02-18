import React, { useContext } from 'react';
import { store } from '../Store/StoreCompo';
import { NavLink } from 'react-router-dom';

export default function Hollywood() {
  const { data } = useContext(store);

  if (!data) return <p className="text-center text-xl font-semibold mt-10">Loading...</p>;

  // Filter once for efficiency
  const hollywoodBlogs = data.filter((item) => item.cat === "hollywood");

  if (hollywoodBlogs.length === 0)
    return <p className="text-center text-xl font-semibold mt-10">No Hollywood blogs available.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hollywood Header */}
      <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-6">
        Hollywood
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Blog Container */}
        <div className="md:col-span-2 space-y-6">
          {hollywoodBlogs.slice(0, 7).map((item) => (
            <div key={item.id || item.title} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-40 md:w-60 object-cover"
                src={item.img}
                alt="not found"
                onError={(e) => (e.target.src = '/placeholder.jpg')}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                  <NavLink to={`/blog/${item.id}`}>{item.title}</NavLink>
                </h2>
                <p className="text-gray-600 text-sm mt-2">{item.desc.slice(0, 200)}...</p>
                <p className="text-gray-500 text-xs mt-2"><b>Hollywood:</b> {item.date || 'Unknown Date'}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Blog Container */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Top Post</h2>

          {hollywoodBlogs.length > 7 && (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={hollywoodBlogs[7].img}
                alt="not found"
                onError={(e) => (e.target.src = '/placeholder.jpg')}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                  <NavLink to={`/blog/${hollywoodBlogs[7].id}`}>{hollywoodBlogs[7].title}</NavLink>
                </h3>
                <p className="text-gray-600 text-sm mt-2">{hollywoodBlogs[7].desc.slice(0, 300)}...</p>
                <p className="text-gray-500 text-xs mt-2"><b>Hollywood:</b> {hollywoodBlogs[7].date || 'Unknown Date'}</p>
              </div>
            </div>
          )}

          {hollywoodBlogs.slice(8).map((item) => (
            <div key={item.id || item.title} className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-2">
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={item.img}
                alt="not found"
                onError={(e) => (e.target.src = '/placeholder.jpg')}
              />
              <div className="ml-4">
                <h4 className="text-md font-semibold text-gray-900 hover:text-blue-600">
                  <NavLink to={`/blog/${item.id}`}>{item.title}</NavLink>
                </h4>
                <p className="text-gray-500 text-xs"><b>Hollywood:</b> {item.date || 'Unknown Date'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
