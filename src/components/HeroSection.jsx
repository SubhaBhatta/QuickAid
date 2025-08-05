import React from "react";
import { Activity } from "lucide-react";
import PropTypes from "prop-types";

const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Advanced Emergency Response System
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Get instant AI-powered emergency guidance with Google's Gemini AI, send
        location-based alerts, and access critical emergency resources
      </p>
      <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
        <Activity size={16} />
        <span className="text-sm font-medium">Powered by Gemini AI</span>
      </div>
    </div>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
