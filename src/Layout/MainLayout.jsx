import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-tr from-[#22001f] via-[#250902] to-[#0b0120] ">
      <div className="bg-slate-200 fixed w-full">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1600px] z-40">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="min-h-[calc(100vh-210px)] pt-[74px] max-w-7xl mx-auto 2xl:max-w-[1600px] z-1">
        <Outlet></Outlet>
      </div>
      <div className="max-w-7xl mx-auto 2xl:max-w-[1600px]">
        <Footer></Footer>
      </div>
    </div>
    
  );
};

export default MainLayout;
