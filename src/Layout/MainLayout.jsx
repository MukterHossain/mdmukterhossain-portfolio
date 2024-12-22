import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-slate-200 fixed w-full">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1600px]">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="min-h-[calc(100vh-210px)] pt-[72px] max-w-7xl mx-auto 2xl:max-w-[1600px] ">
        <Outlet></Outlet>
      </div>
      <div className="max-w-7xl mx-auto 2xl:max-w-[1600px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
