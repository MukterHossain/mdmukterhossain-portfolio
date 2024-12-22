import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-slate-200 fixed w-full">
        <div className="max-w-7xl mx-auto ">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="min-h-[calc(100vh-250px)] pt-24 max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="max-w-7xl mx-auto ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
