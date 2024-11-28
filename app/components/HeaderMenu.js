import { useEffect, useMemo, useState } from "react";
import MobileMenu from "./MoebileMenu";
import { useRouter } from "next/router";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Headermenu = ({
  whatIsVertigoHeight,
  whatIsVertigoFlex,
  onWhatIsVertigo1Click,
  onAnatomical3dModel1Click,
  onHowToLive2Click,
  onTypesOfVertigo2Click,
  onExercisesText1Click,
  onSafetyTipsText1Click,
  onDosAndDonts1Click,
  onChatbotsText1Click,
  headermenuMargin,
  headermenuPosition,
  headermenuTop,
  headermenuLeft,
  setShowLanding,
}) => {
  const headermenuStyle = useMemo(() => {
    return {
      height: whatIsVertigoHeight,
      flex: whatIsVertigoFlex,
      margin: headermenuMargin,
      position: headermenuPosition,
      top: headermenuTop,
      left: headermenuLeft,
    };
  }, [
    whatIsVertigoHeight,
    whatIsVertigoFlex,
    headermenuMargin,
    headermenuPosition,
    headermenuTop,
    headermenuLeft,
  ]);

  const { user } = useUser();

  return (
    <header
      className="w-full h-[90px] fixed top-0 self-stretch md:h-[120px] [background:linear-gradient(127.09deg,_#003557,_#00243c_46.72%,_#003557)]  flex-col items-center justify-center sm:py-[25px] py-3  sm:px-20 px-5 box-border max-w-full z-10 text-left text-lg text-neutral-400 font-roboto"
      style={headermenuStyle}
    >
      <div className="hidden xl:flex w-full flex-1 flex-row items-center justify-between gap-[20px] max-w-full">
        <a href="/">
          <img
            className="h-[55px] mt-1 w-[240.8px] relative object-contain cursor-pointer"
            alt=""
            src="/logo.png"
          />
        </a>
        <div className="self-stretch w-full flex flex-row flex-wrap items-center justify-start max-w-full mq1050:gap-[17px]">
          <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-9 box-border gap-[14px_20px] max-w-full">
            <div
              className="relative font-medium text-white  inline-block min-w-[124px] whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onWhatIsVertigo1Click}
            >{`What is Vertigo? `}</div>
            <div
              className="relative text-white whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onAnatomical3dModel1Click}
            >
              Anatomical 3d models
            </div>
            <div
              className="relative text-white whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onTypesOfVertigo2Click}
            >{`Types of Vertigo `}</div>

            <Link href="/exercise">
              <div className="relative text-white inline-block min-w-[81px] cursor-pointer  mq1600:text-3xl navbar-item">
                Exercises
              </div>
            </Link>
            <div
              className="relative text-white inline-block min-w-[94px] whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onSafetyTipsText1Click}
            >
              Safety Tips
            </div>
            <div
              className="relative text-white inline-block min-w-[94px] whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onHowToLive2Click}
            >
              How to Live with Vertigo
            </div>
            <div
              className="relative text-white inline-block min-w-[121px] whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onDosAndDonts1Click}
            >
              Dos and Donts
            </div>
            <div
              className="relative text-white inline-block min-w-[78px] whitespace-nowrap cursor-pointer mq1600:text-3xl navbar-item"
              onClick={onChatbotsText1Click}
            >
              {" "}
              Chatbots
            </div>
          </div>
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
              <span className="text-3xl text-white">{user?.username}</span>
            </div>
          </SignedIn>
        </div>
      </div>
      <div className="flex w-full xl:hidden z-50">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Headermenu;
