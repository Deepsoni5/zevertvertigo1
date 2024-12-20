import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";

const HeroContainer = () => {
  return (
    <div
      id="vertigoIsA"
      data-scroll-to="vertigoIsA"
      className="flex justify-center items-center p-4 -mt-5 md:mt-0"
    >
      <div className=" rounded-lg flex flex-col  md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-6 w-[80%]">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img
              src="/girl.png"
              alt="A woman holding her head, looking dizzy or unsteady"
              className="rounded-lg md:ml-5"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-8 font-bold text-gray-900">
            What is <span className="text-[#005D9A]">vertigo?</span>
          </h1>
          <p className="mt-4 text-gray-700 text-xl text-justify">
            Vertigo is a feeling like you or the world around you is spinning or
            moving, even when you are standing still. It is a kind of dizziness
            that makes it hard to keep your balance and might affect your daily
            activities. This sensation can happen due to problems in the inner
            ear, head injuries, or other health issues, making you feel
            off-balance or unsteady.
          </p>
          <WhatsappButtonVideo />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
