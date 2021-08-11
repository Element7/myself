import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      maxWidth: "100%",
      height: "auto",
      opacity: 1,
      visibility: "visible",
    },
  })
);

interface IProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  styles?: any;
}
const Img: React.FC<IProps> = ({ src, width, height, alt, styles }) => {
  const classes = useStyles();
  return (
    <img
      alt={alt}
      className={classes.img}
      height={height}
      src={src}
      style={styles}
      width={width}
    />
  );
};

export default Img;
