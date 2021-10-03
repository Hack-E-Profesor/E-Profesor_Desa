import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, hideFooter = false, signShow = false }) => {
  return (
    <>
      <Navbar signShow={signShow}/>
      <div>{children}</div>
      {!hideFooter ? <Footer /> : null}
    </>
  );
};

export default Layout;
