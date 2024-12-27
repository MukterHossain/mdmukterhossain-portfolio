import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className=" w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4 mx-auto mt-8 my-12 sm:mt-12 md:mt-20 lg:mt-24 xl:mt-32  rounded-md shadow-xl  border-2 border-red-200  p-5 md:px-10 md:py-8 ">
        <h2 className="flex  items-center">
          <MdEmail size={25}></MdEmail>{" "}
          <span className="text-xl ml-2">mukter3075@gmail.com</span>
        </h2>
        <h2 className="flex py-2 items-center">
          <FaLinkedin size={25}></FaLinkedin>{" "}
          <span className="text-blue-600 underline  ml-2 font-semibold">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-mukter-hossain-341358295/"
            >
              LinkedIn
            </a>
          </span>
        </h2>
        <h2 className="flex pb-2 items-center">
          <FaGithub size={25}></FaGithub>{" "}
          <span className="text-blue-600 underline font-semibold  ml-2">
            <a target="_blank" href="https://github.com/MukterHossain">
              GitHub
            </a>
          </span>
        </h2>
        <h2 className="flex items-center">
          <FaFacebook size={25}></FaFacebook>{" "}
          <span className="text-blue-600 underline font-semibold  ml-2">
            <a
              target="_blank"
              href="https://www.facebook.com/md.mukter.hossain.14661261/"
            >
              Face Book
            </a>
          </span>
        </h2>
        <h2 className="flex  pt-2 items-center">
          <FaPhoneVolume size={25}></FaPhoneVolume>{" "}
          <span className=" font-semibold  ml-2">+8801976-937064</span>
        </h2>
      </div>
    </>
  );
};

export default Contact;
