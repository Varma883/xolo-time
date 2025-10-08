import React from "react";
import logo from "../assets/logo-white.svg";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand + Social */}
          <div>
           <img src={logo} alt="Twincles Logo" className="w-40 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
            </p> 
            <div className="flex space-x-4 text-2xl mt-4 text-gray-500">
              <FaInstagram className="hover:text-gray-900 cursor-pointer" />
              <FaFacebook className="hover:text-gray-900 cursor-pointer" />
              <FaSquareXTwitter className="hover:text-gray-900 cursor-pointer" />
              <FaPinterest className="hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              What We Do
            </h2>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Track time</a></li>
              <li><a href="#" className="hover:text-gray-900">Track projects</a></li>
              <li><a href="#" className="hover:text-gray-900">Track teams</a></li>
              <li><a href="#" className="hover:text-gray-900">Track plans</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy promise</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Company
            </h2>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Investors</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Support
            </h2>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Business</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h2>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">WhatsApp</a></li>
              <li><a href="#" className="hover:text-gray-900">Support 24/7</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Login</a>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Start 14-day trial
            </a>
          </div>

          <span className="text-gray-400">
            © 2025 <span className="font-semibold text-gray-700">Xolotime</span>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
