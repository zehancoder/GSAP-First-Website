import React, { useState } from "react";

export default function MenuButton({open, setOpen}) {
    
  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-6 h-4 flex flex-col justify-between cursor-pointer"
    >
      {/* Line 1 */}
      <span
        className={`block h-[2.6px] w-full bg-black rounded transform transition duration-300 origin-center ${
          open ? "rotate-45 translate-y-[7px]" : ""
        }`}
      ></span>

      {/* Line 2 */}
      <span
        className={`block h-[2.6px] w-full bg-black rounded transform transition duration-300 origin-center ${
          open ? "opacity-0" : ""
        }`}
      ></span>

      {/* Line 3 */}
      <span
        className={`block h-[2.6px] w-full bg-black rounded transform transition duration-300 origin-center ${
          open ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      ></span>
    </button>
  );
}
