import React from "react";

const HowToLive = () => {
  const items = [
    {
      title: "What is vertigo?",
      image: "/how1.png",
      size: "normal",
    },
    {
      title: "Dos and Donts in vertigo",
      image: "/h2.png",
      size: "normal",
    },
    {
      title: "Myths and Facts about vertigo",
      image: "/h3.png",
      size: "tall",
    },
    {
      title: "How to avoid fall in vertigo",
      image: "/h4.png",
      size: "normal",
    },
    {
      title: "Tips to the Care-giver",
      image: "/h5.png",
      size: "normal",
    },
    {
      title: "Travelling with vertigo",
      image: "/h6.jpeg",
      size: "wide",
    },
    {
      title: "Diet changes with Vertigo",
      image: "/h7.jpeg",
      size: "wide",
    },
  ];
  return (
    <div
      className="p-1 mt-10"
      style={{
        background:
          "linear-gradient(127.09deg, #005D9A 10.16%, #000305 47.54%, #004F83 92.87%)",
      }}
    >
      <div
        id="howToLive"
        data-scroll-to="howToLive"
        className="mt-28 w-[80%] mx-auto"
      >
        <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          How to live with Vertigo
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, -2).map((item, index) => (
            <div
              key={index}
              className={`relative group ${
                item.size === "tall"
                  ? "row-span-2"
                  : item.size === "wide"
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
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
              <p className="absolute bottom-2 left-2 right-2 text-white text-center text-2xl font-bold shadow-text">
                {item.title}
              </p>
            </div>
          ))}

          {/* Separate row for the last two items */}
          <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 gap-6 lg:col-span-3">
            {items.slice(-2).map((item, index) => (
              <div key={index} className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
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
                <p className="absolute bottom-2 left-2 right-2 text-white text-center text-2xl font-bold shadow-text">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToLive;
