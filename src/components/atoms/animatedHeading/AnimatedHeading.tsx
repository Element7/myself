/* eslint-disable react/no-array-index-key */
import { useLayoutEffect, useRef } from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { gsap } from "gsap";

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: "flex",
      width: "fit-content",
      margin: "4rem auto 1.5rem auto",
    },
    title: {},
  })
);
interface CompProps extends TypographyProps {
  text: string[];
}
const AnimatedHeading: React.FC<CompProps> = ({ variant, text }) => {
  const classes = useStyles();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (wrapperRef.current !== null) {
      const elements = wrapperRef.current.children;
      const titleChars = Array.from(elements);
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });
      gsap.set([titleChars], { autoAlpha: 0 });
      titleChars.forEach((e) =>
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
    <div className={classes.wrapper} ref={wrapperRef}>
      {text.map((e, i) => (
        <Typography className={classes.title} key={e + i} variant={variant}>
          {e || <>&nbsp;</>}
        </Typography>
      ))}
    </div>
  );
};
export default AnimatedHeading;
