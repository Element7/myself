import { Paper } from "@material-ui/core";

import Footer from "../containers/footer/Footer";
import Header from "../containers/header/Header";

const Layout: React.FC<any> = ({ Comp, routes }) => (
  <Paper style={{ minHeight: "100vh" }}>
    <Header />
    <Comp routes={routes} />
    <Footer />
  </Paper>
);

export default Layout;
