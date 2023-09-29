import Airbnb from "~/assets/svg/Airbnb";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 border-b border-b-gray-200">
      <div className="flex items-center justify-between px-20">
        <div className="flex-grow basis-0">
          <Link href="/" className="w-max cursor-pointer">
            <Airbnb className="w-[102px] h-8 block" />
          </Link>
        </div>
        <nav className="flex-grow basis-0">
          <ul className="flex items-center justify-end gap-6 font-medium">
            <li className="cursor-pointer">
              <span>Airbnb your home</span>
            </li>
            <li className="cursor-pointer">
              <FiGlobe className="w-5 h-5" />
            </li>
            <li className="flex cursor-pointer items-center gap-2 border border-gray-200 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500">
              <RxHamburgerMenu className="w-5 h-5" />
              <span>
                <Image
                  src="/empty-profile.png"
                  alt="Profile"
                  height={30}
                  width={30}
                />
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
