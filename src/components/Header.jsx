import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [isMenuClick, setIsMenuClick] = useState(false);
  return (
    <header className="h-10 w-full flex justify-between px-20">
      <div className="logo">
        <h2 className="font-bold text-3xl font-mono text-white">
          Anderson Dev
        </h2>
      </div>
      <nav className="flex gap-6 items-center">
        <a className="text-gray-300 text-lg hidden lg:block" href="#home">
          Home
        </a>
        <a className="text-gray-300 text-lg hidden lg:block" href="#about">
          About
        </a>
        <a
          className="text-gray-300 text-lg hidden lg:block"
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
