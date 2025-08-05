import React from "react";
import { AlertTriangle, Phone, Menu, X } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Emergency Response
                </h1>
                <p className="text-sm text-gray-500 hidden sm:block">
                  AI-Powered Emergency System
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <Phone size={18} />
                <div className="text-sm">
                  <div className="font-bold">100</div>
                  <div className="text-xs opacity-90">Emergency</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">System Active</span>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 shadow-lg">
          <div className="space-y-3">
            <button className="w-full flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg justify-center font-bold">
              <Phone size={18} />
              Emergency: 100
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All Systems Active</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired,
};

export default Header;
