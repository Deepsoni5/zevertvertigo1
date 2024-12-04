"use client";
import React from "react";

import Headermenu2 from "./Headermenu2";
import Link from "next/link";

const Header = () => (
  <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 text-center rounded-3xl mx-auto my-5 w-11/12 lg:w-3/4">
    <input
      type="text"
      defaultValue="www.zevertvertigo.in"
      readOnly
      className="w-11/12 p-3 text-center rounded-3xl text-lg"
    />
  </div>
);

const GridItem = ({ imgSrc, altText, text, onClick, isNinth }) => (
  <div
    className={` ${
      isNinth == "true" && "col-span-2 lg:col-span-1"
    } flex flex-col items-center cursor-pointer`}
    onClick={onClick}
  >
    <div className="relative">
      <img src={imgSrc} alt={altText} className="rounded-full w-48 h-30" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-white"></div>
    </div>
    <div className="relative mt-4  px-4 py-2 ">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0.5 h-8 bg-white"></div>
      <div className="flex items-center justify-center">
        <div className="relative w-[130px] lg:w-[180px] text-center bg-white text-black text-lg font-semibold py-3 px-4 rounded-full shadow-md border border-gray-300">
          <div className="absolute inset-0 border-2 border-gray-300 rounded-full pointer-events-none"></div>
          <div className="relative">{text}</div>
        </div>
      </div>
    </div>
  </div>
);

const GridContainer = ({ onLinkClick }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3  gap-6 p-4 mx-auto w-full sm:w-11/12 lg:w-3/4">
    <GridItem
      imgSrc="/ls1_1.png"
      altText="Person holding head in pain"
      text="What is Vertigo"
      onClick={() => onLinkClick("vertigoIsA")}
    />
    <GridItem
      imgSrc="/ls2.png"
      altText="Inner ear diagram"
      text="Types of Vertigo"
      onClick={() => onLinkClick("tv")}
    />
    <GridItem
      imgSrc="/ls3.png"
      altText="Anatomy of ear"
      text="Anatomy of Ear"
      onClick={() => onLinkClick("group")}
    />
    <GridItem
      imgSrc="/ls4.png"
      altText="3D model of inner ear"
      text="Anatomical 3d Model"
      onClick={() => onLinkClick("ana")}
    />
    <GridItem
      imgSrc="/ls5_1.png"
      altText="Safety tips icon"
      text="Safety Tips For Exercise"
      onClick={() => onLinkClick("safetyInstructionsFor")}
    />
    <Link href="/exercise">
      <GridItem
        imgSrc="/ls6.png"
        altText="Person doing vertigo exercises"
        text="Vertigo Exercises"
      />
    </Link>
    <GridItem
      imgSrc="/ls7.png"
      altText="Do's and Don'ts icon"
      text="Do’s and Don’ts in Vertigo"
      onClick={() => onLinkClick("dosDontsContent")}
    />
    <GridItem
      imgSrc="/ls8.png"
      altText="Person living with vertigo"
      text="How to live with Vertigo?"
      onClick={() => onLinkClick("howToLive")}
    />
    <GridItem
      imgSrc="/ls9_1.png"
      altText="Whatsapp chatbot icon"
      text="Whatsapp Chatbot"
      isNinth="true"
      onClick={() => onLinkClick("accessQuickInformation")}
    />
  </div>
);

const Footer = ({ text }) => (
  <div className=" text-white text-center p-2 rounded-3xl mx-auto  w-11/12 md:w-3/4">
    <p>{text}</p>
  </div>
);

const LandingPage = ({ onLinkClick, setShowLanding }) => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center w-full min-h-screen lg:bg-left"
      style={{ backgroundImage: "url('/coverbg.png')" }}
    >
      <Headermenu2 setShowLanding={setShowLanding} />
      <div className="">
        <GridContainer onLinkClick={onLinkClick} />
      </div>
      <Footer text="copyright &copy; by zevert vertigo" />
    </section>
  );
};

export default LandingPage;
