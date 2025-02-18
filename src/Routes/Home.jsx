import React, { useContext } from "react";
import { store } from "../Store/StoreCompo";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useContext(store);

  return (
    <div className="container mx-auto p-4">
      {/* Poster Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          "https://c4.wallpaperflare.com/wallpaper/153/453/233/anime-crazy-face-art-wallpaper-preview.jpg",
          "https://c4.wallpaperflare.com/wallpaper/644/788/886/anime-mask-covering-disguise-wallpaper-preview.jpg",
          "https://c4.wallpaperflare.com/wallpaper/189/240/835/cover-naruto-anime-cover-wallpaper-preview.jpg",
        ].map((src, index) => (
          <img key={index} src={src} alt="poster" className="rounded-lg shadow-lg" />
        ))}
      </div>

      {/* The Latest */}
      <h2 className="text-2xl font-bold mt-6 mb-4">The Latest</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[2, 22, 44].map((index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <img src={data[index].img} alt="not found" className="w-full h-52 object-cover rounded-md" />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">
                <Link to={`/Blog/${data[index].id}`} className="text-blue-600 hover:underline">
                  {data[index].title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">{data[index].desc.slice(0, 80)}...</p>
              <p className="text-sm text-gray-500">Bollywood : 17-10-23</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Latest Articles */}
      <h2 className="text-2xl font-bold mt-6 mb-4">The Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[5, 16, 22, 33].map((index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <img src={data[index].img} alt="not found" className="w-full h-48 object-cover rounded-md" />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">
                <Link to={`/Blog/${data[index].id}`} className="text-blue-600 hover:underline">
                  {data[index].title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">{data[index].desc.slice(0, 130)}...</p>
              <p className="text-sm text-gray-500">Category : 17-10-23</p>
            </div>
          </div>
        ))}
      </div>

      {/* Top Post */}
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-4">Top Post</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white shadow-md p-4 rounded-lg">
          <img src={data[14].img} alt="not found" className="w-32 h-32 object-cover rounded-md" />
          <div>
            <h3 className="text-lg font-semibold">
              <Link to={`/Blog/${data[14].id}`} className="text-blue-600 hover:underline">
                {data[14].title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm">{data[14].desc.slice(0, 60)}...</p>
            <p className="text-sm text-gray-500">Bollywood : 17-10-23</p>
          </div>
        </div>
      </div>

      {/* Latest Stories */}
      <h2 className="text-2xl font-bold mt-6 mb-4">Latest Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[12, 24, 36].map((index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <img src={data[index].img} alt="not found" className="w-full h-52 object-cover rounded-md" />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">
                <Link to={`/Blog/${data[index].id}`} className="text-blue-600 hover:underline">
                  {data[index].title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">{data[index].desc.slice(0, 80)}...</p>
              <p className="text-sm text-gray-500">Category : 17-10-23</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
