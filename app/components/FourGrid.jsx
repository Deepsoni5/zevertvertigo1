import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";

const FourGrid = ({ translations, language }) => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-black">
        {translations[language].data[43].Name}
      </h1>
      <p className="text-center text-gray-600 mt-2 text-xl">
        {translations[language].data[125].Name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="relative">
          <img
            src="/move1.png"
            alt="Person throwing and catching a ball while walking"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold w-[80%] md:w-full mx-auto">
            {translations[language].data[90].Name.split(".")[1].slice(0, -1)}
          </p>
        </div>
        <div className="relative">
          <img
            src="/move2.png"
            alt="Person aiming with the ball and bending/stretching while playing with it"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold  w-[80%] md:w-full mx-auto">
            {translations[language].data[90].Name.split(".")[3].slice(0, -1)}
          </p>
        </div>
        <div className="relative">
          <img
            src="/move3.png"
            alt="Person walking around in the room with eyes open and closed"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold w-[80%] md:w-[85%] mx-auto">
            {translations[language].data[90].Name.split(".")[2].slice(0, -1)}
          </p>
        </div>
        <div className="relative">
          <img
            src="/move4.png"
            alt="Person walking up and down the stairs"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold">
            {translations[language].data[90].Name.split(".")[4].slice(0)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <WhatsappButtonVideo />
      </div>
    </div>
  );
};

export default FourGrid;
