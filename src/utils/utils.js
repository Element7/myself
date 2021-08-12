/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const onMainPictureEnter = (ref, tl) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const switchElement = elements.getElementById("switch");
    tl.fromTo(switchElement, { y: "0" }, { duration: 0.2, y: "+=5" }).to(
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
export const onMainPictureClick = (ref, tl, theme, dispatch) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const lightElement = elements.getElementById("light");
    if (theme === "light") {
      dispatch({ type: "SET_DARK_MODE" });
      tl.to(lightElement, { duration: 1, fill: "#F9A825", autoAlpha: "1" });
    } else {
      dispatch({ type: "SET_LIGHT_MODE" });
      tl.to(lightElement, { duration: 1, fill: "#EEE", autoAlpha: "0.67" });
    }
  }
};

export const lightLamp = (tl, ref) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const lightElement = elements.getElementById("light");
    tl.to(lightElement, { duration: 1, fill: "#F9A825", autoAlpha: "1" });
  }
};

export const switchOffLight = (tl, ref) => {
  if (ref.current !== null) {
    const [elements] = ref.current.children;
    const lightElement = elements.getElementById("light");
    tl.to(lightElement, { duration: 1, fill: "#EEE", autoAlpha: "0.67" });
  }
};
