import React from "react";
import Img from "./Img";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#532F82] text-white pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div>
            <h3 className="font-circular font-[500] text-[20px] md:text-[22px] mb-4 md:mb-6 text-white">Company</h3>
            <ul className="space-y-3 md:space-y-4 text-[16px] font-circular font-books text-[#B6B6E5]">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><Link href="/Contact-us" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-circular font-[500] text-[20px] md:text-[22px] mb-4 md:mb-6 text-white">Quick links</h3>
            <ul className="space-y-3 md:space-y-4 text-[16px] font-circular font-books text-[#B6B6E5]">
              <li><a href="#" className="hover:text-white transition-colors">Find services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing & plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">List your business</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-circular font-[500] text-[20px] md:text-[22px] mb-4 md:mb-6 text-white">Resources</h3>
            <ul className="space-y-3 md:space-y-4 text-[16px] font-circular font-books text-[#B6B6E5]">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-circular font-[500] text-[20px] md:text-[22px] mb-4 md:mb-6 text-white">More from Dutiful</h3>
            <ul className="space-y-3 md:space-y-4 text-[16px] font-circular font-books text-[#B6B6E5]">
              <li><a href="#" className="hover:text-white transition-colors">Dutiful jobs</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-[#63428E] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-8 md:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <span className="text-[18px] font-circular font-[500] text-white">Follow us</span>
            <div className="flex space-x-5">
              {["facebook", "instagram", "twitter", "youtube", "linkedin"].map((social) => (
                <a key={social} href="#" className="hover:opacity-80 transition-opacity">
                  <Img
                    src={`/${social}-icon.svg`}
                    alt={`${social} Icon`}
                    width={social === "facebook" ? 10.39 : 24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full md:w-auto">
            <span className="text-[18px] font-circular font-[500] text-white">Download the app</span>
            <div className="flex space-x-5">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Img src="/apple-icon.svg" alt="Apple Icon" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Img src="/playstore-icon.svg" alt="Playstore Icon" width={18.75} height={21} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center text-[15px] md:text-[16px] font-circular font-books border-t border-[#63428E] pt-8 md:border-none md:pt-0">
          <div className="mb-6 md:mb-0 md:mr-12 text-white opacity-80 md:opacity-100">
            © 2022 Dutiful®
          </div>
          <div className="flex flex-wrap gap-y-4 gap-x-6 md:space-x-8">
            <a href="#" className="text-[#B6B6E5] hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[#B6B6E5] hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="text-[#B6B6E5] hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;