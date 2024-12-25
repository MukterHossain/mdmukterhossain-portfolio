import { Cursor, Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const MyInfo = () => {
  return (
    <div>
      <div className=" rounded-md shadow-xl border-spacing-1 border-2 border-red-900  p-5 md:px-10 md:pt-8 ">
        <img
          src="https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg"
          alt=""
          className="border-2 border-red-900 w-2/5 mx-auto rounded-full"
        />
        <div className="flex flex-col justify-between p-3 ">
          <div className="space-y-2 text-center">
            <h1 className="mb-2  font-bold  ">
              <span className="text-xl md:text-2xl ">
                <span className="bg-gradient-to-r from-green-700 via-purple-700 to-rose-700 text-transparent bg-clip-text animate-gradient">
                  MD. MUKTER HOSSAIN
                </span>
              </span>
            </h1>
            <p className="">mukter3075@gmail.com</p>
            <p className="text-center font-semibold ">
              <Typewriter
                words={[
                  "I am a Web Developer",
                  "A passionate Software Developer",
                ]}
                loop={10}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              ></Typewriter>
              <Cursor></Cursor>
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 pt-3">
            <span><a target="_blank"  href="https://www.linkedin.com/in/md-mukter-hossain-341358295/"><FaLinkedin size={25}></FaLinkedin></a></span>
            <span><a target="_blank" href="https://github.com/MukterHossain"><FaGithub size={25}></FaGithub></a></span>
            <span><a target="_blank" href="https://www.facebook.com/md.mukter.hossain.14661261/"><FaFacebook  size={25}></FaFacebook ></a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
