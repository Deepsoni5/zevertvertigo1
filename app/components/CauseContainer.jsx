import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";

const CauseContainer = () => {
  return (
    <div className="flex justify-center items-center p-4 -mt-5 md:mt-36">
      <div className=" rounded-lg flex flex-col  md:flex-row space-y-6 md:space-y-0 ml-0 lg:-ml-56 md:space-x-6 w-[80%]">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img
              src="/cause.png"
              alt="A woman holding her head, looking dizzy or unsteady"
              className="rounded-lg mt-10 md:mt-0"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-5 lg:mt-20 font-bold text-gray-900">
            What causes
            <span className="text-[#005D9A]"> vertigo?</span>
          </h1>
          <p className="mt-4 text-gray-700 text-xl text-justify">
            Vertigo often happens when there is a mix-up in the messages your
            brain gets from your inner ears, eyes, and body. This confusion can
            be due to various reasons like inner ear problems, head injuries,
            certain health conditions, etc. These issues disrupt your body’s
            balance signals, making you feel dizzy or like your surroundings are
            spinning around you. Seeking guidance from a doctor can help you
            find the cause and best ways to manage vertigo.
          </p>
          <WhatsappButtonVideo />
        </div>
      </div>
    </div>
  );
};

export default CauseContainer;
