import React from "react";
import { featureLists, goodLists } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
const Art = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const maskTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    });
    maskTimeLine
      .to(".will-fade", {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      })
      .to(".masked-img", {
        scale: 1.3,
        duration: 1,
        maskSize: "400%",
        maskPosition: "center",
        ease: "power1.out",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });
  }, []);
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((good, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{good}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((good, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{good}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink, It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
