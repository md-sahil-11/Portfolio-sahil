import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textAnimation = (ele, num = 70) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      y: num,
    },
    {
      scrollTrigger: {
        trigger: ele,
      },
      opacity: 1,
      y: 0,
    }
  );
};

export default textAnimation;
