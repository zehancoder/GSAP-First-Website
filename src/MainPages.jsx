import { PageOne } from "./components/Page1";
import { ServicePage } from "./components/Page2";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
export const MainPages = () => {
  // gsap codes
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.from("body", {visibility: "visible"})
    tl.fromTo(
      ".logo",
      { y: -40, opacity: 0,  ease: "none" },
      { y: 0, opacity: 100, ease: "none",  }
    );
    tl.fromTo(
      ".links",
      { y: -40, opacity: 0,  ease: "none" },
      { y: 0, opacity: 100, stagger: 0.1, ease: "none",  }
    );
    tl.fromTo(
      ".pageOneRight",
      { x: -100, opacity: 0,  ease: "none" },
      { x: 0, opacity: 100, ease: "none",  }
    );
    tl.fromTo(
      ".pageOneLeft",
      { x: 100, opacity: 0,  ease: "none" },
      { x: 0, opacity: 100, ease: "none", }
    );
    tl.fromTo(
      ".links-2",
      { y: -40, opacity: 0, ease: "none" },
      { y: 0, opacity: 100, stagger: 0.1, ease: "none", }
    );
    // scroll anime
    tl.fromTo(
      ".scrollText",
      {
        y: 100,
        opacity: 0,
      },
      {
        opacity: 150,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".scrollText",
          start: "top 100%",
          end: "bottom 80%",
          scrub: 2,
        },
      }
    );
    tl.fromTo(
      ".page2Div1",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page2Div1",
          start: "top 100%",
          end: "bottom 95%",
          scrub: 2,
        },
      }
    );
    tl.fromTo(
      ".page2Div2",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page2Div2",
          start: "top 100%",
          end: "bottom 95%",
          scrub: 2,
        },
      }
    );
    tl.fromTo(
      ".page2Div3",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page2Div3",
          start: "top 100%",
          end: "bottom 95%",
          scrub: 2,
        },
      }
    );
    tl.fromTo(
      ".page2Div4",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page2Div4",
          start: "top 100%",
          end: "bottom 95%",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <PageOne />
        <ServicePage />
      </div>
    </>
  );
};
