import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";

const ThreeGrid1 = ({ translations, language }) => {
  return (
    <div className="text-center py-10 w-[80%] mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">
        {translations[language].data[41].Name}
      </h1>
      <p className="text-gray-600 mt-4 mb-8 text-xl">
        {translations[language].data[120].Name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <div className="relative w-full">
            <img
              src="/sit1.png"
              alt="Person looking up and down"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-4xl"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-800 text-xl font-bold">
            {translations[language].data[82].Name.split(".")[1].slice(0, -1)}
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="relative w-full">
            <img
              src="/sit2.png"
              alt="Person looking left and right"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-4xl"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-800 text-xl font-bold">
            {translations[language].data[82].Name.split(".")[3].slice(0)}
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="relative w-full">
            <img
              src="/sit3.png"
              alt="Person doing convergence exercise"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-4xl"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-800 text-xl font-bold">
            {translations[language].data[82].Name.split(".")[2].slice(0, -1)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <WhatsappButtonVideo />
      </div>
    </div>
  );
};

export default ThreeGrid1;
