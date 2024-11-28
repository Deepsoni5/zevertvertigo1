import { useCallback } from "react";
import Headermenu from "./HeaderMenu";
import { useRouter } from "next/router";

const Header = ({ setShowLanding }) => {
  const imageUrl = "https://youtu.be/5Lh1INdRHKg";
  const onWhatIsVertigo1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='vertigoIsA']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAnatomical3dModel1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='group']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHowToLive2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='howToLive']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTypesOfVertigo2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onExercisesText1Click = useCallback(() => {
    window.open("/data-hub");
  }, []);

  const onSafetyTipsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='safetyInstructionsFor']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDosAndDonts1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='dosDontsContent']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChatbotsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='accessQuickInformation']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const navigateToHomeAndScroll = useCallback((target) => {
    window.location.href = `/?scrollTo=${target}`;
  }, []);

  return (
    <section className="self-stretch   overflow-hidden  flex flex-col items-start justify-start pt-0 px-0 pb-48 box-border relative max-w-full z-[3] text-left text-27xl text-neutral-800 font-montserrat">
      <Headermenu
        onWhatIsVertigo1Click={() => navigateToHomeAndScroll("vertigoIsA")}
        onAnatomical3dModel1Click={() => navigateToHomeAndScroll("group")}
        onHowToLive2Click={() => navigateToHomeAndScroll("howToLive")}
        onTypesOfVertigo2Click={() => navigateToHomeAndScroll("tv")}
        onExercisesText1Click={() => navigateToHomeAndScroll("data-hub")}
        onSafetyTipsText1Click={() =>
          navigateToHomeAndScroll("safetyInstructionsFor")
        }
        onDosAndDonts1Click={() => navigateToHomeAndScroll("dosDontsContent")}
        onChatbotsText1Click={() =>
          navigateToHomeAndScroll("accessQuickInformation")
        }
        setShowLanding={setShowLanding}
      />
    </section>
  );
};

export default Header;
