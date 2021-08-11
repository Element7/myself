/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { gsap } from "gsap";

export const onMainPictureEnter = (ref, tl) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const switchElement = elements.getElementById("switch");
    // alert("aa");
    tl.fromTo(switchElement, { y: "0" }, { duration: 1, y: "+=5" }).to(
      switchElement,
      {
        y: "0",
      }
    );
  }
};
export const onMainPictureLeave = (ref, tl) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const switchElement = elements.getElementById("switch");
    tl.to(switchElement, { duration: 0, y: "+=0" });
  }
};
export const onMainPictureClick = (ref, tl) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const switchElement = elements.getElementById("lamp");

    tl.fromTo(switchElement, { fill: "#000" }, { duration: 1, fill: "#fff" });
  }
};
