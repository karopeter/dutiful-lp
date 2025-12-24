"use client";
import { useState } from "react";
import Img from "./Img";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO - Far Left */}
          <div className="flex-shrink-0">
            <Img
              src="/duftiLogo.svg"
              width={100} 
              height={40}
              alt="Dutiful Logo"
              className="block md:w-[130px] md:h-[50px]"
            />
          </div>

          {/* DESKTOP NAV + AUTH */}
          <div className="hidden md:flex items-center space-x-12">
            
            {/* NAV LINKS */}
            <nav className="flex items-center space-x-8">
              <Link href="/business-directory" className="font-circular text-[#686868] text-[18px] font-books hover:text-purple-700 transition-colors">Business Directory</Link>
              <a href="#" className="font-circular text-[#686868] text-[18px] font-books hover:text-purple-700 transition-colors">Features</a>
              <Link href="/pricing" className="font-circular text-[#686868] text-[18px] font-books hover:text-purple-700 transition-colors">Pricing</Link>
              <a href="#" className="font-circular text-[#686868] text-[18px] font-books hover:text-purple-700 transition-colors">Blog</a>
            </nav>

            {/* AUTH BUTTONS */}
            <div className="flex items-center space-x-8">
              <Link href="/Login" className="font-circular text-[#1E1E4B] text-[20px] font-[500] hover:text-purple-700 transition-colors">
                Login
              </Link>

              <Link
                href="/SignUp"
                className="
                  px-5
                  py-2
                  rounded-[6px]
                  border-[2px]
                  border-[#603F8B]
                  bg-transparent
                  font-circular
                  text-[#603F8B]
                  text-[16px]
                  font-medium
                  hover:bg-purple-50
                  transition
                  block
                "
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#603F8B] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/business-directory" className="text-[#686868] text-[16px] font-[400] hover:text-purple-700 transition-colors py-2">Business Directory</Link>
              <a href="#" className="text-[#686868] text-[16px] font-[400] hover:text-purple-700 transition-colors py-2">Features</a>
              <Link href="/pricing" className="text-[#686868] text-[16px] font-[400] hover:text-purple-700 transition-colors py-2">Pricing</Link>
              <a href="#" className="text-[#686868] text-[16px] font-[400] hover:text-purple-700 transition-colors py-2">Blog</a>
            </nav>

            <div className="flex flex-col space-y-3 mt-6">
              <Link href="/Login" className="text-[#1E1E4B] text-[18px] font-[500] hover:text-purple-700 transition-colors py-2 text-center">
                Login
              </Link>

              <Link
                href="/SignUp"
                className="
                  px-5
                  py-3
                  rounded-[6px]
                  border-[2px]
                  border-[#603F8B]
                  bg-transparent
                  text-[#603F8B]
                  text-[16px]
                  font-medium
                  hover:bg-purple-50
                  transition
                  text-center
                  block
                "
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;