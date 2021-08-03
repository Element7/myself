import Footer from "../containers/footer/Footer";
import Header from "../containers/header/Header";

const Layout: React.FC<any> = ({ Comp, routes }) => (
  <>
    <Header />
    <Comp routes={routes} />
    <Footer />
  </>
);

export default Layout;
