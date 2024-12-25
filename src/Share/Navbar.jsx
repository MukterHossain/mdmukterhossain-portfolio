import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
      <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'py-1 px-3   font-bold text-green-800 ' : 'font-bold py-1 px-3   '}>Home</NavLink>
        <NavLink to='/project' className={({ isActive }) => isActive ? 'py-1 px-3   font-bold text-green-800' : 'font-bold py-1 px-3    '}>Projets</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'py-1 px-3  font-bold text-green-800' : 'font-bold py-1 px-3  '}>Contact</NavLink>
     </>
  );
  return (
    <>
      <div className="navbar bg-slate-200 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlink}
            </ul>
          </div>
          <div className="flex items-center">
            <Link to={"/"} className="mr-2 md:mr-3">
              <img
                className="w-8 md:w-10 lg:w-14 h-8 md:h-10 lg:h-14 bg-slate-100 rounded-full"
                src="https://i.ibb.co.com/k4Fy93r/Mlogo5.png"
                alt="Logo"
              />
            </Link>
            <h2 className="text-sm md:text-lg lg:text-2xl font-bold text-violet-700">MD. <span className="text-red-900">MUKTER</span> HOSSAIN</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <div className="bg-gray-200 border-2 border-red-900 rounded-md shadow-lg px-3 py-1 text-red-900 font-semibold">
            <a target="_blank"  href="https://drive.google.com/file/d/1TyhiXGkrGjeUmFpBMSiC1F8GgM6KwsQO/view?usp=sharing">Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
