import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import PanicButton from "../components/PanicButton.jsx";
import LocationDisplay from "../components/LocationDisplay.jsx";
import EmergencyChatbot from "../components/EmergencyChatbot.jsx";
import StatusFooter from "../components/StatusFooter.jsx";
import EmergencyContacts from "../components/EmergencyContacts.jsx";
import NepalPoliceSlider from "../components/NepalPoliceSlider.jsx";

export default function EmergencyApp() {
  const [alertHistory, setAlertHistory] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAlert = (loc) => {
    const alert = {
      id: Date.now(),
      timestamp: new Date(),
      location: loc,
      status: "sent",
    };
    setAlertHistory((prev) => [alert, ...prev]);
    const alertMessage = `🚨 EMERGENCY ALERT SENT!\n\n📍 Location: ${loc.lat.toFixed(
      4
    )}, ${loc.lng.toFixed(
      4
    )}\n⏰ Time: ${alert.timestamp.toLocaleString()}\n🚑 Emergency services have been notified\n📱 Emergency contacts have been alerted\n\nStay calm and wait for help to arrive.`;
    alert(alertMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeroSection />
      <NepalPoliceSlider />

      <main className="flex flex-col gap-8 px-4 py-8 max-w-4xl mx-auto">
        {/* Panic Button Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
            Emergency Alert
          </h3>
          <p className="text-sm text-gray-600 text-center mb-4">
            Instantly notify emergency services with your location
          </p>
          <PanicButton handleAlert={handleAlert} />
          {alertHistory.length > 0 && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="text-sm font-medium text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle size={16} />
                Recent Alerts:
              </h4>
              <div className="space-y-2">
                {alertHistory.slice(0, 2).map((alert) => (
                  <div
                    key={alert.id}
                    className="text-xs text-green-700 flex items-center justify-between"
                  >
                    <span>{alert.timestamp.toLocaleTimeString()}</span>
                    <span className="font-medium bg-green-100 px-2 py-1 rounded">
                      Sent Successfully
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <LocationDisplay />
        </div>

        {/* Emergency Chatbot Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <EmergencyChatbot />
        </div>

        {/* Emergency Resources Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <EmergencyContacts />
        </div>
      </main>

      <StatusFooter />
    </div>
  );
}
