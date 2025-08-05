import React from "react";
import {
  AlertTriangle,
  Home,
  Phone,
  ArrowLeft,
  Search,
  MapPin,
} from "lucide-react";
import StatusFooter from "../components/StatusFooter";

export default function NotFoundPage() {
  const quickLinks = [
    {
      icon: <AlertTriangle className="text-red-600" size={20} />,
      title: "Emergency Tools",
      description: "Access emergency assistance",
      action: () => (window.location.href = "/emergency"),
      color: "bg-red-50 hover:bg-red-100 border-red-200",
    },
    {
      icon: <Home className="text-blue-600" size={20} />,
      title: "Homepage",
      description: "Return to main page",
      action: () => (window.location.href = "/"),
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    },
    {
      icon: <Phone className="text-green-600" size={20} />,
      title: "Emergency Services",
      description: "Call 100 for emergencies",
      action: () => window.open("tel:100", "_self"),
      color: "bg-green-50 hover:bg-green-100 border-green-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="text-red-600" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">QuickAid</h1>
                <p className="text-sm text-gray-600">
                  Emergency Response Platform
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Phone size={16} />
              <span>Emergency: 100</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="text-9xl font-bold text-gray-200 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 bg-white rounded-full shadow-lg border-4 border-red-100">
                  <Search className="text-red-500" size={48} />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              The page you're looking for seems to have gone missing.
            </p>
            <p className="text-gray-500">
              Don't worry - we'll help you find what you need or get emergency
              assistance.
            </p>
          </div>

          {/* Emergency Banner */}
          <div className="bg-red-600 text-white p-4 rounded-lg mb-8 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle size={20} />
              <span className="font-semibold">Having an Emergency?</span>
            </div>
            <p className="text-red-100 text-sm mb-3">
              If this is a life-threatening emergency, don't waste time
              navigating - call immediately!
            </p>
            <button
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md"
              onClick={() => window.open("tel:100", "_self")}
            >
              📞 Call 100 Now
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-md transform hover:scale-105 ${link.color}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              <Home size={18} />
              Return Home
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="text-blue-600" size={16} />
              <span className="text-sm font-medium text-blue-800">
                Need Help?
              </span>
            </div>
            <p className="text-sm text-blue-700">
              If you're having trouble finding emergency resources, try our
              emergency tools page or contact emergency services directly.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl mb-3">🚨</div>
              <h4 className="text-lg font-semibold mb-1">Police</h4>
              <div className="text-xl font-bold text-red-400">100</div>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-3">🚒</div>
              <h4 className="text-lg font-semibold mb-1">Fire Department</h4>
              <div className="text-xl font-bold text-orange-400">101</div>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-3">🚑</div>
              <h4 className="text-lg font-semibold mb-1">Medical Emergency</h4>
              <div className="text-xl font-bold text-blue-400">103</div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <StatusFooter />
          </div>
        </div>
      </footer>
    </div>
  );
}
