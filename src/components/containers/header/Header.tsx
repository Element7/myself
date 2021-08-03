import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          aria-label="menu"
          className={classes.menuButton}
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography align="right" className={classes.title} variant="h6">
          <Link href="/" color="inherit">
            Link1
          </Link>
          <Link href="/" color="inherit">
            Link2
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
