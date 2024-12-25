import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const MySkills = () => {
  return (
    <div className="rounded-md shadow-xl border-spacing-1 h-full border-2 border-red-900  p-5 md:px-10 md:py-8 my-12">
      <div className="">
        <h1 className="mb-5  font-bold ">
          <span className="text-xl md:text-2xl lg:text-3xl">
            <span className="bg-gradient-to-r from-fuchsia-700 via-orange-700 to-green-700 text-transparent bg-clip-text animate-gradient">
              Language Skills
            </span>
          </span>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-12 mt-4">
            <div className="bg-gradient-to-r from-lime-100 to-lime-900 flex justify-center items-center gap-3 border-2 border-red-900 py-2 rounded-lg" >
                <span className="text-green-700"><RiTailwindCssFill size={50}></RiTailwindCssFill></span> <span className="text-lg md:text-xl text-white font-bold">Tailwind CSS</span>
            </div>
            <div className="bg-gradient-to-r from-lime-100 to-lime-900 flex justify-center items-center gap-3 border-2 border-red-900 py-2 rounded-lg" >
                <span className="text-yellow-300 bg-black"><SiJavascript size={50}></SiJavascript></span> <span className="text-lg md:text-xl text-white  font-bold">Tailwind CSS</span>
            </div>
            <div className="bg-gradient-to-r from-lime-100 to-lime-900 flex justify-center items-center gap-3 border-2 border-red-900 py-2 rounded-lg" >
                <span className="text-green-700"><FaReact  size={50}></FaReact ></span> <span className="text-lg md:text-xl text-white  font-bold">JavaScript</span>
            </div>
            <div className="bg-gradient-to-r from-lime-100 to-lime-900 flex justify-center items-center gap-3 border-2 border-red-900 py-2 rounded-lg" >
                <span className="text-white font-bold bg-green-900 rounded-full p-1"><SiExpress size={50}></SiExpress></span> <span className="text-lg md:text-xl text-white  font-bold">Express.js</span>
            </div>
            <div className="bg-gradient-to-r from-lime-100 to-lime-900 flex justify-center items-center gap-3 border-2 border-red-900 py-2 rounded-lg" >
                <span className="text-green-700"><SiMongodb  size={50}></SiMongodb ></span> <span className="text-lg md:text-xl text-white  font-bold">Mongo DB</span>
            </div>
            <div className="bg-gradient-to-r from-lime-100 to-lime-900 flex justify-center items-center gap-3 border-2 border-red-900 py-2 rounded-lg" >
                <span className="text-green-700"><FaNodeJs   size={50}></FaNodeJs  ></span> <span className="text-lg md:text-xl text-white  font-bold">Node.js</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
