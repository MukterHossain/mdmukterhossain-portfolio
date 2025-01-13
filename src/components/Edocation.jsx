const Edocation = () => {
  return (
    <div className="rounded-md box_shadow border-spacing-1 h-full border-2 border-slate-200  p-5 md:px-10 md:pt-8 my-12 mx-5 md:mx-0">
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className="mb-5  font-bold underline underline-offset-8">
            <span className="text-xl md:text-2xl lg:text-3xl">
              <span className="bg-gradient-to-r  from-fuchsia-700 via-orange-700 to-green-700 text-transparent bg-clip-text animate-gradient">
                Educational Qualification
              </span>
            </span>
          </h1>
          <div>
            <h1 className="text-xl font-semibold">Master of Social Science </h1>
            <p className="text-lg ">Dhaka College</p>
          </div>
        </div>
        <div>
          <h1 className="mb-5  font-bold  underline underline-offset-8 ">
            <span className="text-xl md:text-2xl lg:text-3xl">
              <span className="bg-gradient-to-r from-fuchsia-700 via-orange-700 to-green-700 text-transparent bg-clip-text animate-gradient">
              Certification
              </span>
            </span>
          </h1>
          <div>
            <h1 className="text-xl  font-bold">Fron End Web Development </h1>
            <p className="text-lg mb-3">Institute: Programming Hero</p>
            <a target="_blank"  href="https://drive.google.com/file/d/1raQscb9ThQE2G8OUDzVD6jrlKvqBPJ0y/view?usp=sharing" className="text-lg text-green-600 font-semibold border border-green-200 hover:bg-green-500 hover:text-white transition duration-200 bg-green-50 rounded-md  px-3 py-1  ">See Certificate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edocation;
