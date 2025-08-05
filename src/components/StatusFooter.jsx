import React from "react";
import { Activity, Shield } from "lucide-react";
import PropTypes from "prop-types";

const StatusFooter = () => {
  return (
    <>
      {/* API Status & Privacy - Vertical Layout */}
      <div className="mt-8 flex flex-col gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Activity size={18} />
            System Status
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Gemini AI</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">
                  Online
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">GPS Tracking</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">
                  Active
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Emergency Services</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">
                  Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Shield size={18} />
            Privacy & Security
          </h4>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Your location data is only shared during active emergencies</p>
            <p>• AI conversations are processed securely</p>
            <p>• No personal data is stored permanently</p>
            <p>• Emergency contacts are notified automatically</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
          <div className="flex items-center justify-center gap-3 text-gray-600 mb-4">
            <Activity size={16} className="text-green-500" />
            <span className="text-sm">
              Emergency Response System powered by Google Gemini AI
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-500">
            <p>
              ⚠️ This system provides guidance only. Always call 911 for
              life-threatening emergencies.
            </p>
            <p className="mt-1">
              For technical support or feedback, please contact your system
              administrator.
            </p>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>
          &copy; 2025 QuickAid. || All Rights Reserved. || Subhadaya Bhatta ||
          Helping save lives through technology.
        </p>
      </div>
    </>
  );
};

StatusFooter.propTypes = {};

export default StatusFooter;
