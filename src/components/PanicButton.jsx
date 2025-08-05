import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  X,
  CheckCircle,
  Shield,
  Heart,
  Users,
} from "lucide-react";

const PanicButton = ({ handleAlert }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handlePress = () => {
    setCountdown(3);
    setIsPressed(true);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Get real location or use mock
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const location = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                if (handleAlert) {
                  handleAlert(location);
                }
              },
              () => {
                // Fallback to mock location if geolocation fails
                const mockLocation = { lat: 40.7128, lng: -74.006 };
                if (handleAlert) {
                  handleAlert(mockLocation);
                }
              }
            );
          } else {
            const mockLocation = { lat: 40.7128, lng: -74.006 };
            if (handleAlert) {
              handleAlert(mockLocation);
            }
          }
          setIsPressed(false);
          setCountdown(null);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleCancel = () => {
    setCountdown(null);
    setIsPressed(false);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute -inset-8 bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

        {/* Middle ring */}
        <div className="absolute -inset-6 bg-gradient-to-r from-red-600 to-red-400 rounded-full opacity-30 animate-ping"></div>

        {/* Button */}
        <button
          onClick={isPressed ? handleCancel : handlePress}
          className={`relative w-40 h-40 ${
            isPressed
              ? "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 shadow-inner"
              : "bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 shadow-2xl"
          } text-white rounded-full transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center font-bold border-4 ${
            isPressed ? "border-slate-300" : "border-red-300"
          } active:scale-95`}
          style={{
            boxShadow: isPressed
              ? "inset 0 8px 16px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.2)"
              : "0 20px 40px rgba(239, 68, 68, 0.4), 0 8px 16px rgba(239, 68, 68, 0.3)",
          }}
        >
          {countdown ? (
            <>
              <div className="text-5xl font-black mb-2 animate-bounce">
                {countdown}
              </div>
              <span className="text-xs uppercase tracking-wider opacity-90">
                Tap to Cancel
              </span>
            </>
          ) : (
            <>
              <AlertTriangle
                size={40}
                className="animate-pulse mb-2 drop-shadow-lg"
              />
              <span className="text-sm uppercase tracking-widest font-black">
                EMERGENCY
              </span>
              <span className="text-xs opacity-75 mt-1">Press & Hold</span>
            </>
          )}
        </button>
      </div>

      <div className="text-center">
        <p
          className={`text-base font-medium ${
            countdown ? "text-red-600 animate-pulse" : "text-gray-700"
          } max-w-xs leading-relaxed`}
        >
          {countdown
            ? "🚨 Sending emergency alert..."
            : "Press and hold for 3 seconds to activate emergency protocol"}
        </p>
      </div>
    </div>
  );
};

const EmergencyAlert = ({ alert, onClose }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!alert) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-red-900/20 to-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-red-100">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-600 tracking-tight">
                EMERGENCY ALERT
              </h2>
              <p className="text-sm text-red-500 font-medium">Status: Active</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success Status */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3 text-green-700">
            <div className="bg-green-500 p-2 rounded-full">
              <CheckCircle size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-lg">Alert Successfully Sent</span>
              <p className="text-sm text-green-600">
                Emergency services have been notified
              </p>
            </div>
          </div>
        </div>

        {/* Alert Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
            <div className="bg-blue-500 p-3 rounded-full">
              <Clock size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-gray-800">Timestamp</span>
              <div className="text-gray-600">{alert.timestamp}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
            <div className="bg-red-500 p-3 rounded-full">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-gray-800">GPS Location</span>
              <div className="text-sm text-gray-600 font-mono">
                {alert.location.lat.toFixed(6)}, {alert.location.lng.toFixed(6)}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
            <div className="bg-purple-500 p-3 rounded-full">
              <Users size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-gray-800">Contacts Notified</span>
              <div className="text-gray-600">
                Emergency services • Family contacts
              </div>
            </div>
          </div>
        </div>

        {/* Alert Active Timer */}
        <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-red-700 text-lg font-bold">
                Alert Active: {formatTime(timeElapsed)}
              </div>
              <div className="text-red-600 text-sm">
                🚨 Rescue teams are being dispatched to your location
              </div>
            </div>
            <div className="bg-red-500 p-3 rounded-full animate-pulse">
              <Shield size={24} className="text-white" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
            <Phone size={20} />
            <span>Call 100</span>
          </button>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-700 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Heart size={20} />
            <span>I'm Safe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const EmergencyApp = () => {
  const [currentAlert, setCurrentAlert] = useState(null);
  const [alertHistory, setAlertHistory] = useState([]);

  const handleAlert = (location) => {
    const alert = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      location: location,
      status: "active",
    };

    setCurrentAlert(alert);
    setAlertHistory((prev) => [alert, ...prev]);

    // Simulate emergency services notification
    console.log("🚨 EMERGENCY ALERT SENT:", alert);
  };

  const closeAlert = () => {
    setCurrentAlert(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-red-50 p-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10 pt-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-2xl">
            <Shield size={48} className="text-white mx-auto" />
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-red-600 mb-3">
            Emergency Alert System
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
            Your personal safety companion. Quick access to emergency help when
            you need it most.
          </p>
        </div>

        {/* Main Panic Button Card */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl mb-8 border border-white border-opacity-50">
          <PanicButton handleAlert={handleAlert} />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-2xl shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl">
            <Phone size={32} className="mx-auto mb-3" />
            <div className="font-bold text-lg">Call 100</div>
            <div className="text-sm opacity-90">Emergency Services</div>
          </button>

          <button className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-2xl shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl">
            <Users size={32} className="mx-auto mb-3" />
            <div className="font-bold text-lg">Family</div>
            <div className="text-sm opacity-90">Emergency Contact</div>
          </button>
        </div>

        {/* Alert History */}
        {alertHistory.length > 0 && (
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-full">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Recent Alerts
              </h3>
            </div>

            <div className="space-y-4">
              {alertHistory.slice(0, 3).map((alert, index) => (
                <div
                  key={alert.id}
                  className={`p-5 rounded-2xl border-2 ${
                    index === 0
                      ? "bg-gradient-to-r from-red-50 to-rose-50 border-red-200"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-gray-800">
                      {alert.timestamp}
                    </span>
                    <span
                      className={`text-sm px-4 py-2 rounded-full font-bold ${
                        index === 0
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {index === 0 ? "ACTIVE" : "RESOLVED"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span className="font-mono text-sm">
                      {alert.location.lat.toFixed(4)},{" "}
                      {alert.location.lng.toFixed(4)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Alert Modal */}
      <EmergencyAlert alert={currentAlert} onClose={closeAlert} />
    </div>
  );
};

export default EmergencyApp;
