const MyInfo = () => {
  return (
    <div>
      <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src="https://i.ibb.co.com/3WSZVZy/Mukter-Hossain.jpg"
          alt=""
          className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">MD. MUKTER HOSSAIN</h2>
            <p className="dark:text-gray-800">mukter3075@gmail.com</p>
            <p className="dark:text-gray-800">I am a Web Developer.</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
