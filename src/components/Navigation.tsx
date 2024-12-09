"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Blur overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="
            fixed 
            inset-0 
            z-40 
            bg-black/30 
            backdrop-blur-sm
            flex 
            items-center 
            justify-center
          "
          onClick={toggleMenu}
        >
          {/* Mobile Navigation */}
          <nav 
            className="
              w-[90%] 
              max-w-md 
              bg-white 
              rounded-2xl 
              shadow-2xl 
              py-8 
              px-6 
              flex 
              flex-col 
              items-center 
              space-y-6
            "
          >

            <Link 
              href="/animals" 
              className="
                text-xl 
                font-bold 
                py-4 
                px-6 
              "
              onClick={toggleMenu}
            >
              Find a Pet
            </Link>
            <Link 
              href="/how-to-adopt" 
              className="
                text-xl 
                font-semibold 
                py-4 
                px-6  
              "
              onClick={toggleMenu}
            >
              Adoption Process
            </Link>
            <Link 
              href="/about" 
              className="
                text-xl 
                font-semibold 
                py-4 
                px-6 
              "
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              href="/donate" 
              className="
                w-full 
                btn-primary 
                text-center 
                text-xl 
                font-bold 
                py-4 
                rounded-full 
                shadow-md 
                hover:shadow-lg 
                transition-all 
                duration-300 
                ease-in-out 
                active:scale-95
              "
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">PawPals</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/animals" 
              className="
                text-gray-700 
                hover:text-primary-600 
                transition-colors 
                font-medium
                relative 
                overflow-hidden
                before:content-[''] 
                before:absolute 
                before:bottom-0 
                before:left-0 
                before:w-full 
                before:h-0.5 
                before:bg-primary-600 
                before:scale-x-0 
                before:origin-left 
                before:transition-transform 
                before:duration-300 
                hover:before:scale-x-100
              "
            >
              Find a Pet
            </Link>
            <Link 
              href="/how-to-adopt" 
              className="
                text-gray-700 
                hover:text-primary-600 
                transition-colors 
                font-medium
                relative 
                overflow-hidden
                before:content-[''] 
                before:absolute 
                before:bottom-0 
                before:left-0 
                before:w-full 
                before:h-0.5 
                before:bg-primary-600 
                before:scale-x-0 
                before:origin-left 
                before:transition-transform 
                before:duration-300 
                hover:before:scale-x-100
              "
            >
              Adoption Process
            </Link>
            <Link 
              href="/about" 
              className="
                text-gray-700 
                hover:text-primary-600 
                transition-colors 
                font-medium
                relative 
                overflow-hidden
                before:content-[''] 
                before:absolute 
                before:bottom-0 
                before:left-0 
                before:w-full 
                before:h-0.5 
                before:bg-primary-600 
                before:scale-x-0 
                before:origin-left 
                before:transition-transform 
                before:duration-300 
                hover:before:scale-x-100
              "
            >
              About Us
            </Link>
            <Link 
              href="/donate" 
              className="btn-primary px-4 py-2 rounded-full"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="
              md:hidden 
              z-[100] 
              p-2 
              rounded-full 
              bg-gray-100 
              hover:bg-gray-200 
              transition-colors 
              duration-300 
              ease-in-out
            "
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}
