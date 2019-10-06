import { TweenMax, TimelineLite, Power2 } from "gsap/TweenMax";

const tl = new TimelineLite();

export const startTimeline = (heroImg, bgImg) => {
  tl.to(heroImg, 1, { width: "90%", ease: Power2.easeInOut })
    .to(heroImg, 1, { y: 50, ease: Power2.easeInOut }, "-=0.2")
    .to(bgImg, 1, { width: "100%" }, "-=1.5")
    .to(heroImg, 0.5, { opacity: 0.9 }, "-=1.0")
    .to(
      heroImg,
      1,
      { transform: "rotateY(-20deg) translateY(60px)", ease: Power2.easeInOut },
      "-=1"
    );
};
