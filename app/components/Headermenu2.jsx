"use client";
import MobileMenu from "./MoebileMenu";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
const Headermenu2 = ({ setShowLanding }) => {
  const onSignInClick = () => {
    router.push("/sign-in");
  };

  const { user } = useUser();
  return (
    <header className="mq1050: {' padding-left':'0px' } self-stretch h-[110px] bg-darkslategray flex-col items-center justify-center py-[25px] px-5 sm:px-20 box-border max-w-full z-[2] text-left text-lg text-neutral-400 font-roboto">
      <div className="hidden md:flex w-full flex-1 flex-row items-center justify-between gap-[20px] max-w-full">
        <div className="inline-block p-2 bg-white/70 backdrop-blur-lg rounded-md shadow-lg">
          <img
            className="h-[55px] w-[220.8px] relative object-contain cursor-pointer"
            alt=""
            src="/logo.png"
            onClick={() => setShowLanding(true)}
          />
        </div>

        <div>
          <SignedOut>
            <Link
              href="/sign-in"
              className="relative whitespace-nowrap cursor-pointer text-3xl"
            >
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-5">
              <UserButton className="text-3xl" />
              <span className="text-3xl hidden md:block">{user?.username}</span>
            </div>
          </SignedIn>
        </div>
      </div>
      <div className="block md:hidden z-50">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Headermenu2;
