import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexGrow: 1 },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);
const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section">
      <Box>
        <Typography variant="h1">Welcome</Typography>
      </Box>
    </Box>
  );
};
export default Home;
