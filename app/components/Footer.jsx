import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import styles from "./FooterV.module.css";
import { motion } from "framer-motion";
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

    window.topFunction = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
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

  const navigateToHomeAndScroll = useCallback((target) => {
    window.location.href = `/?scrollTo=${target}`;
  }, []);

  const handleNavigation = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      if (window.location.pathname !== "/") {
        router.push("/").then(() => {
          setTimeout(() => scrollToSection(sectionId), 100);
        });
      } else {
        scrollToSection(sectionId);
      }
    },
    [router, scrollToSection]
  );

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <footer className="mt-10 bg-gradient-to-br from-[#003557] via-[#00243c] to-[#003557] text-white py-10">
        <div className="max-w-7xl mx-auto px-5">
          {/* Logo Section */}
          <div className="mb-6 text-center">
            <Link href="/">
              <img
                className="h-10 mx-auto object-contain"
                alt="Logo"
                src="/logo.png"
              />
            </Link>
          </div>

          {/* Buttons / Links Section */}
          <div className="flex flex-wrap items-center justify-center gap-4  md:gap-8">
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("vertigoIsA")}
            >
              What is Vertigo
            </button>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("tv")}
            >
              Types of Vertigo
            </button>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("ana")}
            >
              Anatomical 3D Model
            </button>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("group")}
            >
              Anatomy of Ear
            </button>

            <Link href="/exercise">
              <button className="text-white hover:text-neutral-300 transition-all">
                Exercises
              </button>
            </Link>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("safetyInstructionsFor")}
            >
              Safety Tips
            </button>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("dosDontsContent")}
            >
              Dos and Donts
            </button>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("howToLive")}
            >
              How to Live with Vertigo?
            </button>
            <button
              className="text-white hover:text-neutral-300 transition-all"
              onClick={() => navigateToHomeAndScroll("accessQuickInformation")}
            >
              Chatbot
            </button>
            <Link href="/ref">
              <button className="text-white hover:text-neutral-300 transition-all">
                References
              </button>
            </Link>

            {/* Additional Buttons */}
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
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-400 mt-8 mb-6 mx-auto w-2/3"></div>

          {/* Footer Text */}
          <div className="text-center text-sm text-neutral-300">
            Copyright © 2024 Medhavee Creatives
          </div>
        </div>
      </footer>
    </motion.footer>
  );
};

export default Footer;
