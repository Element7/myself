import { useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

import lightbulbOff from "../../../assets/lightbulb-off.svg";
import lightbulb from "../../../assets/lightbulb.svg";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Links = [
  { href: "/", label: "Home" },
  { href: "/picker", label: "Picker" },
  { href: "/about", label: "About" },
  { href: "/movies", label: "Movies list" },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexGrow: 1 },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linksWrapper: {
      marginLeft: "auto",
    },
    links: {
      padding: "0 12px",
    },
  })
);
const Header: React.FC = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  const classes = useStyles();

  const handleTheme = () => {
    if (theme === "light") dispatch({ type: "SET_DARK_MODE" });
    else dispatch({ type: "SET_LIGHT_MODE" });
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          aria-label="menu"
          className={classes.menuButton}
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Box className={classes.linksWrapper}>
          {Links.map(({ href, label }) => (
            <Link
              className={classes.links}
              color="inherit"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </Box>
        <IconButton onClick={handleTheme}>
          <img
            alt="lightbulb"
            height="24"
            src={theme === "dark" ? lightbulbOff : lightbulb}
            width="24"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
