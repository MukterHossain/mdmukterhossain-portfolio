const Edocation = () => {
  return (
    <div className="rounded-md shadow-xl border-spacing-1 h-full border-2 border-red-900  p-5 md:px-10 md:pt-8 my-12 mx-5 md:mx-0">
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
            <p className="text-lg ">Institute: Programming Hero</p>
            <p className="text-lg ">Batch: 09</p>
            <p className="text-lg ">Duration: 2024-2024</p>
            <a href="#" className="text-lg text-green-500 font-semibold">See Certificate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edocation;
