import { Link } from "react-router-dom";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover border-2 border-red-900"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/27wny5G/bnner17.png)",
        }}
      >
        <div className=" bg-gray-800 bg-opacity-70">
          <div className="text-white">
            <div className=" w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 justify-between items-center">
              <div className=" my-16 sm:my-20 md:my-32 lg:my-48 ">
                <h1 className="mb-5  font-bold text-white text-center sm:text-start">
                  <span className="text-xl md:text-3xl"> Hi, I am</span>
                  <br />
                  <span className="text-3xl md:text-5xl lg:text-[64px] "> <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                  <span className="hover:text-blue-600">M</span>
                  <span className="hover:text-pink-500">D.</span> MUKTER <br></br> HOSSAIN</span>
                  </span></h1>
                <p className="mb-5 text-center sm:text-start">
                  <Typewriter
                    words={[
                      "I am a Web Developer",
                      "A passionate Software Developer",
                    ]}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  ></Typewriter>
                  <Cursor></Cursor>
                </p>
              </div>
              <div className="text-center sm:text-end">
                <Link to={'/project'}><button className="btn btn-success text-white font-extrabold">Go Project</button></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
