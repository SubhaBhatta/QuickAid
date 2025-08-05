import React, { useState, useEffect } from "react";
import { MapPin, Send, CheckCircle } from "lucide-react";
import PropTypes from "prop-types";

const LocationDisplay = () => {
  const [accuracy, setAccuracy] = useState(15);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccuracy((prev) => Math.max(3, prev - Math.random() * 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleShareLocation = () => {
    setIsSharing(true);
    setTimeout(() => setIsSharing(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <MapPin className="text-blue-600" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Live Location</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">GPS Active</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Latitude:</span>
            <div className="font-mono font-medium">40.7128° N</div>
          </div>
          <div>
            <span className="text-gray-600">Longitude:</span>
            <div className="font-mono font-medium">74.0060° W</div>
          </div>
          <div>
            <span className="text-gray-600">Accuracy:</span>
            <div
              className={`font-medium ${
                accuracy < 10 ? "text-green-600" : "text-orange-600"
              }`}
            >
              ±{accuracy.toFixed(1)}m
            </div>
          </div>
          <div>
            <span className="text-gray-600">Updated:</span>
            <div className="text-blue-600 font-medium">Just now</div>
          </div>
        </div>
      </div>

      <button
        onClick={handleShareLocation}
        disabled={isSharing}
        className={`w-full ${
          isSharing
            ? "bg-green-500 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        } py-3 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2`}
      >
        {isSharing ? (
          <>
            <CheckCircle size={18} />
            Location Shared!
          </>
        ) : (
          <>
            <Send size={18} />
            Share with Emergency Services
          </>
        )}
      </button>
    </div>
  );
};

LocationDisplay.propTypes = {};

export default LocationDisplay;
