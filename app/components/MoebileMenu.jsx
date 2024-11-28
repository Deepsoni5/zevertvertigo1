"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
const MobileMenu = () => {
  const [isExerciseRoute, setIsExerciseRoute] = useState(false);

  const handleButtonClick = (scrollToId) => {
    console.log(scrollToId);
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/exercise") {
        // Redirect to the home page with hash
        window.location.href = `/?scrollTo=${scrollToId}`;
      } else {
        const targetElement = document.getElementById(scrollToId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
    toggleNavbar();
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="h-full w-full   flex justify-between items-center px-4 py-2 ">
      <Link href="/">
        <img
          className={`h-[39.6px] w-[173.8px] relative object-contain`}
          alt=""
          src="/logo.png"
        />
      </Link>

      <div className="flex gap-6 items-center">
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="relative whitespace-nowrap cursor-pointer"
            >
              Sign in
            </Link>
          </SignedOut>
        </div>
        <Image
          src="/icons/hamburger.svg"
          alt="hamburger menu"
          width={36}
          height={36}
          className={`${isOpen && "hidden"} cursor-pointer`}
          onClick={toggleNavbar}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10  z-[90] "
          onClick={toggleNavbar}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-[100] bg-opacity-100`}
      >
        <span
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
          onClick={toggleNavbar}
        >
          &times;
        </span>

        <ul className="mt-16">
          <li>
            <button
              onClick={() => handleButtonClick("vertigoIsA")}
              className="text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              What is Vertigo?
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("group")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Anatomical 3d model
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("howToLive")}
              className=" text-white bg-transparent text-lg text-left cursor-pointer block py-2 px-4"
            >
              How To Live with Vertigo?
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("tv")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Types of Vertigo
            </button>
          </li>
          <li>
            <Link
              href="/exercise"
              onClick={toggleNavbar}
              className="text-white no-underline  cursor-pointer block py-2 px-4"
            >
              Exercises
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("safetyInstructionsFor")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Safety Tips
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("dosDontsContent")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Dos and Donts
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("accessQuickInformation")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              ChatBots
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
