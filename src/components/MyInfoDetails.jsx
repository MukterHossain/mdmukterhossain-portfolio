const MyInfoDetails = () => {
  return (
    <div className="rounded-md shadow-xl border-spacing-1 h-full border-2 border-red-900  p-5 md:px-10 md:pt-8">
      <div className="">
        <h1 className="mb-5  font-bold ">
          <span className="text-xl md:text-2xl ">
            <span className="bg-gradient-to-r from-orange-700 via-green-700 to-fuchsia-700 text-transparent bg-clip-text animate-gradient">
              Aboute Me
            </span>
          </span>
        </h1>
        <h1 className="md:text-lg text-justify">
          I am <span className="text-[16px] md:text-xl text-cyan-700 font-bold">MD. MUKTER HOSSAIN</span>, a passionate Frontend Developer with a strong foundation in building interactive and responsive web applications. My expertise includes HTML, CSS, Tailwind CSS, and JavaScript, enabling me to design visually appealing and user-friendly interfaces. I am proficient in React.js, leveraging it to create scalable components and manage state efficiently using tools like TanStack Query and Axios. Additionally, I have experience with secure authentication using JWT and integrating backends with Node.js and Express.js. With a solid understanding of CRUD operations, I ensure smooth data management and seamless functionality in dynamic web applications
        </h1>
      </div>
    </div>
  );
};

export default MyInfoDetails;
