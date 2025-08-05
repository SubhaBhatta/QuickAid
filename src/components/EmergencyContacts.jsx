import React from "react";
import { Heart, CheckCircle } from "lucide-react";
import PropTypes from "prop-types";

const EmergencyContacts = () => {
  const emergencyTypes = [
    {
      name: "Emergency Services",
      number: "100",
      icon: "🚨",
      color: "red",
      desc: "Police",
    },
    {
      name: "Medical",
      number: "102",
      icon: "☠️",
      color: "blue",
      desc: "24/7 medical help",
    },
    {
      name: "Fire",
      number: "101",
      icon: "🔥",
      color: "yellow",
      desc: "Fire Helpline",
    },
  ];

  const preparednessItems = [
    {
      title: "Emergency Kit Ready",
      desc: "Water, food, flashlight, first aid supplies, medications",
    },
    {
      title: "Know Basic First Aid",
      desc: "CPR, wound care, choking response, AED usage",
    },
    {
      title: "Emergency Plan",
      desc: "Meeting points, contact lists, evacuation routes",
    },
    {
      title: "Stay Informed",
      desc: "Weather alerts, emergency broadcasts, local warnings",
    },
  ];

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Emergency Resources & Quick Reference
      </h3>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {emergencyTypes.map((resource, index) => (
          <div
            key={index}
            className={`text-center p-6 rounded-xl border-2 transition-all hover:scale-105 ${
              resource.color === "red"
                ? "bg-red-50 border-red-200 hover:bg-red-100"
                : resource.color === "yellow"
                ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
                : "bg-blue-50 border-blue-200 hover:bg-blue-100"
            }`}
          >
            <div className="text-4xl mb-4">{resource.icon}</div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {resource.name}
            </h4>
            <p className="text-sm text-gray-600 mb-4">{resource.desc}</p>
            <button
              onClick={() => window.open(`tel:${resource.number}`, "_self")}
              className={`w-full py-2 px-4 rounded-lg font-bold text-white transition-all hover:shadow-lg ${
                resource.color === "red"
                  ? "bg-red-600 hover:bg-red-700"
                  : resource.color === "yellow"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Call {resource.number}
            </button>
          </div>
        ))}
      </div>

      {/* Additional Preparedness Tips */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Heart size={20} />
          Emergency Preparedness Tips
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {preparednessItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle
                className="text-green-600 mt-0.5 flex-shrink-0"
                size={16}
              />
              <div className="text-sm">
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

EmergencyContacts.propTypes = {};

export default EmergencyContacts;
