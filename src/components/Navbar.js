import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">EventConnect</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Browse Professionals
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Get Quotes
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join as Professional
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Browse Professionals
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Get Quotes
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                How it Works
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
                  Sign In
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg text-base font-medium w-full text-left mt-2">
                  Join as Professional
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;