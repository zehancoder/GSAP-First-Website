import { Link } from "react-router-dom";
export const ToggleNav = () => {
  return (
    <div>
      <nav className="flex flex-col text-[15px] font-extrabold text-gray-700 items-center  gap-5 py-5">
        <Link to={"/aboutUs"} className="links hoverEffect">
          About Us
        </Link>
        <Link to={"/service"} className="links hoverEffect">
          Service
        </Link>
        <Link to={"/usecase"} className="links hoverEffect">
          Use Cases
        </Link>
        <Link to={"/price"} className="links hoverEffect">
          Prizing
        </Link>
        <Link to={"/blog"} className="links hoverEffect">
          Blog
        </Link>
        <button className="links border-2 rounded-lg btnEffect px-4 md:px-5 lg:px-7 py-3 tracking-wide cursor-pointer">
          Request a quote
        </button>
      </nav>
    </div>
  );
};
