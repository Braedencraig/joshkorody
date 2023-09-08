"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className="text-4xl font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
    </div>
  );
}

export default HamburgerMenu;
