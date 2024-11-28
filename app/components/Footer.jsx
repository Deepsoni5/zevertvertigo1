import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import styles from "./FooterV.module.css";

const Footer = ({ setShowLanding }) => {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const topBtn = document.getElementById("topBtn");
      if (topBtn) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          topBtn.style.display = "block";
        } else {
          topBtn.style.display = "none";
        }
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    window.topFunction = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll behavior
      });
    };
  }, []);
  const router = useRouter();

  const scrollToSection = useCallback((sectionId) => {
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const isDataHubPage =
    typeof window !== "undefined" && window.location.pathname === "/exercise";

  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/";

  const handleNavigation = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      if (window.location.pathname !== "/") {
        // If not on home page, navigate to home page first
        router.push("/").then(() => {
          setTimeout(() => scrollToSection(sectionId), 100);
        });
      } else {
        // If already on home page, just scroll
        scrollToSection(sectionId);
      }
    },
    [router, scrollToSection]
  );
  return (
    <footer className="mt-20 self-stretch  [background:linear-gradient(127.09deg,_#003557,_#00243c_46.72%,_#003557)] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[52px] max-w-full z-[1] text-left text-lg text-neutral-500 font-roboto mq825:gap-[26px]">
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-300" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
        <div className="w-[1241px] flex flex-col items-start justify-start gap-[32px] max-w-full mq825:gap-[16px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[37px] max-w-full mq825:gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[61.6px] pl-[63px] box-border max-w-full mq1400:pl-[31px] mq1400:pr-[31px] mq1400:box-border">
              <div className=" flex-1 flex flex-row items-start justify-center max-w-full gap-[20px] flex-wrap">
                <Link href="/">
                  <img
                    className="sm:text-center h-[39.6px] w-[173.8px] relative object-contain"
                    alt=""
                    src="/logo.png"
                  />
                </Link>
                <div className="w-[816px] flex flex-col items-center justify-start max-w-full">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[7.5px] px-0 box-border max-w-full mq450:gap-[19px]">
                    <div className="flex-1 flex flex-row mq825:flex-col flex-wrap items-center justify-center py-0 px-[52px] box-border gap-[14px_30px] min-h-[56px] max-w-full mq1400:pl-[26px] mq1400:pr-[26px] mq1400:box-border mq825:gap-[15px]">
                      <div
                        className="relative inline-block min-w-[122px] text-white cursor-pointer navbar-item"
                        onClick={(e) => handleNavigation(e, "vertigoIsA")}
                      >{`What is Vertigo `}</div>
                      <div
                        className="relative cursor-pointer text-white navbar-item"
                        onClick={(e) => handleNavigation(e, "ana")}
                      >
                        Anatomical 3d model
                      </div>
                      <div
                        className="relative cursor-pointer text-white navbar-item"
                        onClick={(e) => handleNavigation(e, "howToLive")}
                      >
                        How to live with Vertigo?
                      </div>
                      <div
                        className="relative  cursor-pointer text-white navbar-item"
                        onClick={(e) => handleNavigation(e, "tv")}
                      >{`Types of Vertigo `}</div>

                      <Link href="/exercise">
                        <div className="relative  inline-block min-w-[81px] cursor-pointer text-white font-thin navbar-item">
                          Exercises
                        </div>
                      </Link>
                      <div
                        className="relative inline-block min-w-[94px] text-white cursor-pointer navbar-item"
                        onClick={(e) =>
                          handleNavigation(e, "safetyInstructionsFor")
                        }
                      >
                        Safety Tips
                      </div>
                      <div
                        className="relative inline-block min-w-[121px] text-white cursor-pointer navbar-item"
                        onClick={(e) => handleNavigation(e, "dosDontsContent")}
                      >
                        Dos and Donts
                      </div>
                      <div
                        className="relative inline-block min-w-[78px] text-white cursor-pointer navbar-item"
                        onClick={(e) =>
                          handleNavigation(e, "accessQuickInformation")
                        }
                      >
                        {" "}
                        Chatbots
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-400" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-2 px-4 text-lightsteelblue font-paragraph-default">
            <div className="text-center text-white whitespace-nowrap relative leading-[30px] overflow-hidden text-ellipsis mq825:text-[15px] mq825:font-bold">
              Copyright © 2024 Medhavee Creatives
            </div>
          </div>
        </div>
      </div>
      {isDataHubPage && (
        <Link href="/" className={`${styles.scrollToTop1}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
      )}
      {isHomePage && (
        <button
          onClick={() => setShowLanding(true)}
          className={`${styles.scrollToTop1}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
      )}
      <button
        onClick={() => window.topFunction()}
        id="topBtn"
        title="Go to top"
        className={`${styles.scrollToTop}`}
      >
        <svg
          className={styles.arrowIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
