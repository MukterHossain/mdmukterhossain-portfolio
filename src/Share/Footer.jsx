import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-2 border-red-900 p-5  rounded-t-md ">
        <div className="w-11/12 mx-auto flex flex-col justify-center gap-2 items-center text-white">
          <div>
            <div className="flex items-center">
              <Link to={"/"} className="mr-2 md:mr-3">
                <img
                  className="w-8 md:w-10 lg:w-14 h-8 md:h-10 lg:h-14 bg-slate-100 rounded-full"
                  src="https://i.ibb.co.com/k4Fy93r/Mlogo5.png"
                  alt="Logo"
                />
              </Link>
              <h2 className="text-sm md:text-lg lg:text-2xl font-bold text-violet-700">
                MD. <span className="text-red-900">MUKTER</span> HOSSAIN
              </h2>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-4 py-2">
              <span className="text-blue-600">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-mukter-hossain-341358295/"
                >
                  <FaLinkedin size={30}></FaLinkedin>
                </a>
              </span>
              <span className="text-black">
                <a target="_blank" href="https://github.com/MukterHossain">
                  <FaGithub size={30}></FaGithub>
                </a>
              </span>
              <span className="text-blue-600">
                <a
                  target="_blank"
                  href="https://www.facebook.com/md.mukter.hossain.14661261/"
                >
                  <FaFacebook size={30}></FaFacebook>
                </a>
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm text-white w-11/12 mx-auto text-center border-t-2 border-red-900 py-1 mt-1">
          Copyright © {new Date().getFullYear()} - All right reserved by MD.
          MUKTER HOSSAIN
        </p>
      </div>
    </>
  );
};

export default Footer;
