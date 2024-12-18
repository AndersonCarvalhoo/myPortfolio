import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [isMenuClick, setIsMenuClick] = useState(false);
  return (
    <header className="h-20 w-full flex justify-evenly px-20 shadow-2xl">
      <nav className="flex justify-evenly items-center w-full">
        <a
          className="text-gray-300 text-lg font-bold hidden lg:block font-main tracking-wide"
          href="#contact"
        >
          Contact
        </a>
        <a
          className="text-gray-300 text-lg font-bold hidden lg:block font-main tracking-wide"
          href="#about"
        >
          About
        </a>
        <a
          className="text-gray-300 text-lg font-bold hidden lg:block font-main tracking-wide"
          href="https://www.salesforce.com/trailblazer/carvalhodev"
          target="_blank"
        >
          Trailhead
        </a>
        <RiMenu3Fill
          onClick={() => {
            setIsMenuClick(true);
          }}
          className="cursor-pointer text-gray-300 text-3xl md:hidden"
        />
      </nav>
      {isMenuClick ? (
        <IoCloseSharp
          onClick={() => {
            setIsMenuClick(false);
          }}
        />
      ) : null}
    </header>
  );
}
