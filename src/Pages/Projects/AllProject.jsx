const AllProject = () => {
  return (
    <div>
      <div className="text-center my-12  ">
        <h1 className="mb-5  font-bold ">
          <span className="text-xl md:text-2xl lg:text-3xl">
            <span className="bg-gradient-to-r from-fuchsia-700 via-orange-700 to-green-700 text-transparent bg-clip-text animate-gradient">
              My Project
            </span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-5 my-16">
        <div className="  rounded-md shadow-xl border-2 border-gray-200  p-5 ">
          <div className="border-2 border-red-900 rounded-md shadow-md p-2">
            <a
              target="_blank"
              href="https://b9-a11-volunteer-management.web.app"
            >
              <img
                src="https://i.ibb.co.com/qdZG5C9/Volunteer.png"
                alt="Photo"
                className="rounded-md"
              />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="py-5 text-[16px] md:text-xl xl:text-2xl font-bold ">
              Volunteer Management
            </h1>
            <span>
              <a target="_blank" href="https://github.com/MukterHossain/b9-a11-volunteer-management-client" className="text-blue-600 underline font-semibold mr-3 text-sm md:text-xl">Client </a>
              <a target="_blank" href="https://github.com/MukterHossain/b9-a11-volunteer-management-server" className="text-blue-600 underline font-semibold text-sm md:text-xl">Server</a>
            </span>
          </div>
        </div>
        <div className="  rounded-md shadow-xl border-2 border-gray-200 p-5 ">
          <div className="border-2 border-red-900 rounded-md shadow-md p-2">
            <a
              target="_blank"
              href="https://b9a10-southeast-asia.web.app"
            >
              <img
                src="https://i.ibb.co.com/7KhPjZQ/Countries.png"
                alt="Photo"
                className="rounded-md"
              />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="py-5 text-[16px] md:text-xl xl:text-2xl font-bold ">
            Southeast Asia
            </h1>
            <span>
              <a target="_blank" href="https://github.com/MukterHossain/B9A10-Southeast-Asia-client" className="text-blue-600 underline font-semibold mr-3 text-sm md:text-xl">Client </a>
              <a target="_blank" href="https://github.com/MukterHossain/B9A10-Southeast-Asia-server" className="text-blue-600 underline font-semibold text-sm md:text-xl">Server</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
