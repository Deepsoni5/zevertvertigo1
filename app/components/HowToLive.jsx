import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const HowToLive = () => {
  const items = [
    { title: "What is vertigo?", image: "/how1.png", link: "5Lh1INdRHKg" },
    {
      title: "Dos and Donts in vertigo",
      image: "/h2.png",
      link: "Hi_QSD-6_GY",
      wplink: "",
    },
    {
      title: "Diet changes with Vertigo",
      image: "/h7.jpeg",
      link: "eNVpyfT5guw",
      wplink: "",
    },
    {
      title: "Myths and Facts about vertigo",
      image: "/h3.png",
      link: "phl8u99rTfo  ",
      wplink: "",
    },
    {
      title: "How to avoid fall in vertigo",
      image: "/h4.png",
      link: "lM0PC3CWpBc",
      wplink: "",
    },
    { title: "Tips to the Care-giver", image: "/h5.png", link: "36zxdHwFbqE" },
    {
      title: "Travelling with vertigo",
      image: "/h6.jpeg",
      link: "98k7KHF2UMY",
      wplink: "",
    },
  ];

  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };
  const handleWatchMovie = (videoId) => {
    setIsVideoVisible(true);
    setSelectedVideoId(videoId);
  };

  return (
    <div
      className="p-4"
      style={{
        background:
          "linear-gradient(127.09deg, #005D9A 10.16%, #000305 47.54%, #004F83 92.87%)",
      }}
    >
      {selectedVideoId && isVideoVisible && (
        <VideoPlayer videoId={selectedVideoId} onClose={handleVideoClose} />
      )}
      <div
        id="howToLive"
        data-scroll-to="howToLive"
        className="mt-20 w-[90%] mx-auto"
      >
        <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          How to live with Vertigo
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Render the first 6 items in two rows of 3 */}
          {items.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden"
              onClick={() => handleWatchMovie(item.link)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    />
                  </svg>
                </button>
              </div>
              <p className="absolute bottom-2 left-2 right-2 text-white text-center text-lg font-semibold shadow-text">
                {item.title}
              </p>
            </div>
          ))}

          {/* Render the last item as a full-width row */}
          <div className="col-span-1 sm:col-span-3">
            <div
              className="relative group bg-gray-800 rounded-lg overflow-hidden"
              onClick={() => handleWatchMovie("98k7KHF2UMY")}
            >
              <div className="w-full h-auto md:h-96 relative overflow-hidden">
                <img
                  src={items[6].image}
                  alt={items[6].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    />
                  </svg>
                </button>
              </div>
              <p className="absolute bottom-2 left-2 right-2 text-white text-center text-lg font-semibold shadow-text">
                {items[6].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToLive;
