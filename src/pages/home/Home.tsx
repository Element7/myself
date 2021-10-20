/* eslint-disable @typescript-eslint/prefer-as-const */
import { CSSProperties, useContext, useLayoutEffect, useRef } from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { gsap } from "gsap";

import { ReactComponent as HomeCinema } from "../../assets/cinema.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";
import AnimatedHeading from "../../components/atoms/animatedHeading/AnimatedHeading";
import { ThemeContext } from "../../providers/ThemeProvider";
import {
  lightLamp,
  onMainPictureClick,
  onMainPictureEnter,
  onMainPictureLeave,
  switchOffLight,
} from "../../utils/utils";

const title = "Movie";
const title2 = "Picker";
const useStyles = makeStyles(() =>
  createStyles({
    root: { flexGrow: 1 },
    title: {
      display: "flex",
      width: "fit-content",
    },
    margin: { marginRight: "24px" },
  })
);
const starsStyle: CSSProperties = {
  position: "fixed",
  top: "64px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
};
const imgStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "25rem",
  maxHeight: "25rem",
  zIndex: 10,
};
const Home: React.FC = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const switchTl = gsap.timeline({
    defaults: { ease: "power3.inOut", yoyo: true },
  });
  const classes = useStyles();

  useLayoutEffect(() => {
    if (wrapperRef.current !== null) {
      const elements = wrapperRef.current.children;
      const starsImg = elements[1];
      gsap.set(starsImg, { autoAlpha: 0, transformOrigin: "60% 50%" });
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });
      if (theme === "light") {
        switchOffLight(tl, imgRef);
        tl.to(starsImg, { autoAlpha: 0 });
      } else {
        lightLamp(tl, imgRef);
        tl.fromTo(
          starsImg,
          { scale: 0 },
          { duration: 1, autoAlpha: "1", scale: 1 }
        );
      }
    }
  }, [theme]);

  console.log("test");
  asdads;

  return (
    <div ref={wrapperRef}>
      <AnimatedHeading
        text={["M", "o", "v", "i", "e", "", "P", "i", "c", "k", "e", "r"]}
        variant="h2"
      />
      {/* <Stars style={starsStyle} />
      <div
        onClick={() => onMainPictureClick(imgRef, switchTl, theme, dispatch)}
        onKeyPress={() => onMainPictureClick(imgRef, switchTl, theme, dispatch)}
        onMouseEnter={() => onMainPictureEnter(imgRef, switchTl)}
        onMouseLeave={() => onMainPictureLeave(imgRef, switchTl)}
        ref={imgRef}
        role="button"
        style={imgStyle}
        tabIndex={0}
      >
        <HomeCinema />
      </div> */}
    </div>
  );
};
export default Home;
