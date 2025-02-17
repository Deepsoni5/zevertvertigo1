"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
const MobileMenu = ({ setShowLanding }) => {
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

  const navigateToHomeAndScroll = useCallback((target) => {
    window.location.href = `/?scrollTo=${target}`;
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="h-full w-full   flex justify-between items-center px-4 py-2 ">
      <div className="inline-block p-2 bg-white/70 backdrop-blur-lg rounded-md shadow-lg">
        <Link href="/">
          <img
            className={`h-[39.6px] w-[173.8px] relative object-contain`}
            alt=""
            src="/logo.png"
          />
        </Link>
      </div>

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
          <li
            className="text-white no-underline  cursor-pointer block py-2 px-4"
            onClick={() => setShowLanding(true)}
          >
            Home
          </li>
          <li>
            <button
              onClick={() => navigateToHomeAndScroll("vertigoIsA")}
              className="text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              What is Vertigo?
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateToHomeAndScroll("ana")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Anatomical 3D Model
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateToHomeAndScroll("tv")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Types of Vertigo
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateToHomeAndScroll("group")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Anatomy of Ear
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
              onClick={() => navigateToHomeAndScroll("safetyInstructionsFor")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Safety Tips
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateToHomeAndScroll("group")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Anatomy of Ear
            </button>
          </li>

          <li>
            <button
              onClick={() => navigateToHomeAndScroll("howToLive")}
              className=" text-white bg-transparent text-lg text-left cursor-pointer block py-2 px-4"
            >
              How To Live with Vertigo?
            </button>
          </li>

          <li>
            <button
              onClick={() => navigateToHomeAndScroll("dosDontsContent")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              {"Do's and Don'ts"}
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateToHomeAndScroll("accessQuickInformation")}
              className=" text-white bg-transparent text-lg cursor-pointer block py-2 px-4"
            >
              Whatsapp ChatBot
            </button>
          </li>
          <li>
            <Link
              href="/ref"
              onClick={toggleNavbar}
              className="text-white no-underline  cursor-pointer block py-2 px-4"
            >
              Reference
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
