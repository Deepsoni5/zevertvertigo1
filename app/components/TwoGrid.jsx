import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";

const TwoGrid = ({ translations, language }) => {
  return (
    <div className="w-[80%] py-10 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {translations[language].data[40].Name}
        </h1>
        <p className="text-gray-600 mb-6 text-xl w-full md:w-[70%] mx-auto">
          {translations[language].data[119].Name}
        </p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4">
          <div className="md:w-1/3">
            <div className="relative">
              <img
                src="/head1.png"
                alt="Person demonstrating head forward and backward exercise"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <i className="fas fa-play text-red-500 text-2xl"></i>
                </button>
              </div>
            </div>
            <p className="mt-2 text-gray-800 font-semibold text-xl">
              {translations[language].data[79].Name.split(".")[1].slice(0, -1)}
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="relative">
              <img
                src="/head2.png"
                alt="Person demonstrating head turn left and right exercise"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <i className="fas fa-play text-red-500 text-2xl"></i>
                </button>
              </div>
            </div>
            <p className="mt-2 text-gray-800 font-semibold text-xl">
              {translations[language].data[79].Name.split(".")[2]}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <WhatsappButtonVideo />
      </div>
    </div>
  );
};

export default TwoGrid;