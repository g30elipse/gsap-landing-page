import {TweenMax, TimelineLite, Power2} from "gsap/TweenMax";

const tl = new TimelineLite();

export const startTimeline = (logo, navContainer: HTMLDivElement) => {
  const navItems = navContainer.children;

  tl.fromTo(
    logo,
    1,
    {opacity: 0},
    {opacity: 1, x: 60, ease: Power2.easeInOut},
    "+=1.0"
  ).staggerTo(navItems, 1, {x: -50, ease: Power2.easeInOut}, 0.1, "-=1.5");

  return tl;
};
