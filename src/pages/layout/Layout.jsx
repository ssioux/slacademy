import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <div> <Outlet /></div>
      <Footer/>
     
    </>
  );
}

export default Layout;
