// @ts-nocheck

import Link from "next/link";
import { useEffect } from "react";

function MobileMenu({ setIsOpen, isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-black">
        <div className="text-2xl font-semibold">Menu</div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-4xl font-semibold"
        >
          ×
        </button>
      </div>
      <div className="flex flex-col space-y-6 py-8 px-6">
        <Link className="text-xl" href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          className="text-xl"
          href="/discography"
          onClick={() => setIsOpen(false)}
        >
          Discography
        </Link>
        <Link
          className="text-xl"
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
