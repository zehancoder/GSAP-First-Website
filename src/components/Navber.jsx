import { Link, Links } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ToggleNav } from "./ToggleNav";
import MenuButton from "./AnimeCloseMenuBar";

export const Navber = () => {
  // nav links in arr
  const navLinks = [
    { text: "About Us", to: "about" },
    { text: "Services", to: "services" },
    { text: "Use Cases", to: "usecases" },
    { text: "Prizing", to: "prizing" },
    { text: "Blog", to: "blog" },
    { text: "Reqest a quote", to: "request" },
  ];
  //navber toggler
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.fromTo(
  //     ".logo",
  //     { y: -40, opacity: 0, duration: 0.2, ease: "none" },
  //     { y: 0, opacity: 100, ease: "none", delay: 0.1 }
  //   );
  //   tl.fromTo(
  //     ".links",
  //     { y: -40, opacity: 0, duration: 0.2, ease: "none" },
  //     { y: 0, opacity: 100, stagger: 0.1, ease: "none", delay: 0.1 }
  //   );
  //   tl.fromTo(
  //     ".pageOneRight",
  //     { x: -100, opacity: 0, duration: 0.2, ease: "none" },
  //     { x: 0, opacity: 100, ease: "none", delay: 0.1 }
  //   );
  //   tl.fromTo(
  //     ".pageOneLeft",
  //     { x: 100, opacity: 0, duration: 0.2, ease: "none" },
  //     { x: 0, opacity: 100, ease: "none", delay: 0.1 }
  //   );
  //   tl.fromTo(
  //     ".links-2",
  //     { y: -40, opacity: 0, duration: 0.2, ease: "none" },
  //     { y: 0, opacity: 100, stagger: 0.1, ease: "none", delay: 0.1 }
  //   );
  // }, []);

  return (
    <div
      className={`py-4 md:px-3 px-2   transition-all duration-500  ${
        open ? "h-96" : "h-20"
      }`}
    >
      <header className="flex items-center justify-between max-w-7xl mx-auto z-50">
        <div className="flex items-center gap-2 logo">
          <img className="w-8 " src="/headingLogo.png" alt="" />
          <p className="text-[27px] font-extrabold ">WizardZ</p>
        </div>
        <nav className="hidden text-[15px] font-extrabold lg:flex text-gray-700 items-center  md:gap-6 lg:gap-8">
          {navLinks.map(({text, to}, idx) => (
            <Link to={to} key={idx} className="links hoverEffect">
              {text}
            </Link>
          ))}

          <button className="links border-2 rounded-lg btnEffect px-4 md:px-5 lg:px-7 py-3 tracking-wide cursor-pointer">
            Request a quote
          </button>
        </nav>

        {
          // <div>
          //   onClick={handleMenu}
          //   className="lg:hidden links cursor-pointer text-gray-700 font-extrabold text-2xl scale-x-125"
          // >
          //   X
          // </div>
          <div className="links z-40 cursor-pointer lg:hidden">
            <MenuButton setOpen={setOpen} open={open} />
          </div>

          // <div
          //   onClick={handleMenu}
          //   className="lg:hidden links cursor-pointer text-gray-700 font-extrabold text-2xl scale-x-125"
          // >
          //   ☰
          // </div>
        }
      </header>
      <div
        className={` toggleNav transform transition duration-500 bg-white ${
          open ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <ToggleNav />
      </div>
    </div>
  );
};
