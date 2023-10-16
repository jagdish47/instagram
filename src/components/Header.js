import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      {/* Left */}

      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://asset.brandfetch.io/ido5G85nya/idjNzcWu9R.png"
            height={100}
            width={100}
            alt="Instagram logo"
          ></Image>
        </div>
        <div className="h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            height={100}
            width={100}
            alt="Instagram logo"
          ></Image>
        </div>

        {/* Middle */}
        <div className="relative">
          <div className="absolute top-2 left-2">
            <AiOutlineSearch className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        {/* Right */}
        <h1>Right sides</h1>
      </div>
    </div>
  );
};

export default Header;
