import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex h-[8vh] md:h-[10vh]  items-center px-7 justify-between shadow-md shadow-blue-200">
      <div className="font-bold">
        <Link
          to="/"
          className="text-[16px] md:text-[18px] lg:text-[20px] ease-out duration-300 border-b border-white hover:border-b-slate-700 hover:border-b-1"
        >
          Home
        </Link>
      </div>

      <div className="flex justify-evenly font-bold text-[12px] md:text-[14px] w-[30vw] md:w-[20vw] lg:w-[15vw]">
        <Link
          to="/adddata"
          className="ease-out duration-300 border-b border-white hover:border-b-slate-700 hover:border-b-1"
        >
          Add Data
        </Link>
        <Link
          to="/viewData"
          className="ease-out duration-300 border-b border-white hover:border-b-slate-700 hover:border-b-1"
        >
          View Data
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
