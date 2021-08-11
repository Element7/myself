/* eslint-disable @typescript-eslint/prefer-as-const */
import { CSSProperties, useContext, useLayoutEffect, useRef } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { gsap } from "gsap";

import { ReactComponent as HomeCinema } from "../../assets/cinema-dark.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";
import Img from "../../components/atoms/img/Img";
import { ThemeContext } from "../../providers/ThemeProvider";
import {
  onMainPictureClick,
  onMainPictureEnter,
  onMainPictureLeave,
} from "../../utils/utils";

const title = "Movie";
const title2 = "Picker";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexGrow: 1 },
    title: {
      display: "flex",
      width: "fit-content",
      margin: "4rem auto 1.5rem auto",
    },
    margin: { marginRight: "24px" },
  })
);
const starsStyle: CSSProperties = {
  position: "fixed",
  top: "64px",
  left: "0",
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
  const { theme } = useContext(ThemeContext);
  const titleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const switchTl = gsap.timeline({
    defaults: { pause: true, ease: "power3.inOut", yoyo: true },
  });
  const classes = useStyles();

  useLayoutEffect(() => {
    let elements;
    let elementsArr;
    if (titleRef.current !== null) {
      elements = titleRef.current.children;
      elementsArr = Array.from(elements);
      console.log(elements);

      const mainTitle = elementsArr[0];
      console.log(mainTitle);

      const mainTitleChars = mainTitle.childNodes;

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });
      console.log(mainTitleChars);

      gsap.set([mainTitleChars], { autoAlpha: 0 });
      mainTitleChars.forEach((e) =>
        tl.fromTo(
          e,
          { y: "+=10" },
          { duration: 0.1, y: "-=15", autoAlpha: 1 },
          "-=0.01"
        )
      );
    }
  }, []);

  return (
    <div ref={titleRef}>
      {theme === "dark" && <Stars style={starsStyle} />}
      <Typography className={classes.title} variant="h2">
        {Array.from(title).map((e, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={clsx(e === "e" && classes.margin)} id={e} key={i}>
            {e}
          </div>
        ))}
        {Array.from(title2).map((e, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{e}</div>
        ))}
      </Typography>
      <div
        onClick={() => onMainPictureClick(imgRef, switchTl)}
        onKeyPress={() => onMainPictureClick(imgRef, switchTl)}
        onMouseEnter={() => onMainPictureEnter(imgRef, switchTl)}
        onMouseLeave={() => onMainPictureLeave(imgRef, switchTl)}
        ref={imgRef}
        role="button"
        style={imgStyle}
        tabIndex={0}
      >
        <HomeCinema />
      </div>
    </div>
  );
};
export default Home;
