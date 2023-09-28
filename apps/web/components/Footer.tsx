import Link from "next/link";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { PiCaretUpBold } from "react-icons/pi";

type Props = {};

function Footer({}: Props) {
  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destinations",
  ];

  return (
    <footer className="px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm bg-white z-50 items-center">
      <ul className="flex gap-3 font-normal">
        <li>&copy; {new Date().getFullYear()} Airbnb, Inc.</li>
        {links.map((link) => {
          return (
            <li key={link}>
              <Link className="capitalize" href={`#`}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-4 font-medium">
        <li className="flex items-center cursor-pointer gap-1">
          <FiGlobe /> English (US)
        </li>
        <li className="cursor-pointer">$ USD</li>
        <li className="cursor-pointer flex gap-1 items-center">
          Support & Resources <PiCaretUpBold className="w-4 h-4" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
