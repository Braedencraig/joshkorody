// @ts-nocheck

"use client";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? "font-bold text-shadow-default" : "";
  };

  return (
    <nav className="p-4 flex justify-between items-center bg-white border-b border-black">
      <div>
        <Link className="hidden md:flex" href="/">
          Josh Korody
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link
          className={`relative text-black transition-colors duration-300 transform after:bg-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:transition-width after:duration-300 hover:after:w-full ${isActive(
            "/"
          )}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`relative text-black transition-colors duration-300 transform after:bg-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:transition-width after:duration-300 hover:after:w-full ${isActive(
            "/discography"
          )}`}
          href="/discography"
        >
          Discography
        </Link>
        <Link
          className={`relative text-black transition-colors duration-300 transform after:bg-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:transition-width after:duration-300 hover:after:w-full ${isActive(
            "/contact"
          )}`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
