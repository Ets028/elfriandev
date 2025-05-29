import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">Elfrian Dev</h2>
              <p className="text-sm text-gray-400 mt-1">
                Modern Web Solutions &mdash; Built with passion.
              </p>
            </div>

            {/* Links */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>

            {/* Socials */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-github" /> GitHub
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-instagram" /> Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-10 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Elfrian Dev. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
