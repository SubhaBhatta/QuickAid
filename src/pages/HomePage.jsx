import React from "react";
import {
  AlertTriangle,
  Phone,
  MapPin,
  Heart,
  Shield,
  ArrowRight,
  Clock,
  Users,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <AlertTriangle className="text-red-600" size={24} />,
      title: "Instant Emergency Alert",
      description:
        "One-tap panic button sends your location to emergency services and contacts",
    },
    {
      icon: <Heart className="text-pink-600" size={24} />,
      title: "AI-Powered First Aid",
      description:
        "Get real-time guidance from our advanced AI emergency assistant",
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Location Sharing",
      description:
        "Automatically share your precise location with emergency responders",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Quick Emergency Contacts",
      description:
        "Instant access to police, fire department, and medical services",
    },
  ];

  const stats = [
    { icon: <Clock size={20} />, value: "< 30 sec", label: "Response Time" },
    { icon: <Users size={20} />, value: "24/7", label: "AI Availability" },
    { icon: <Shield size={20} />, value: "100%", label: "Secure & Private" },
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
            <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium" onClick={() => window.open("tel:100", "_self")} aria-label="Call Emergency 100">
              <Phone size={16} />
              <span>Emergency: 100</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Emergency Response Made Simple</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            When Every
            <span className="text-red-600 block">Second Counts</span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            QuickAid provides instant emergency assistance with AI-powered
            guidance, location sharing, and direct connection to emergency
            services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => (window.location.href = "/emergency")}
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span className="relative z-10">Access Emergency Tools</span>
              <ArrowRight className="relative z-10" size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  {React.cloneElement(stat.icon, {
                    className: "text-blue-600",
                  })}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Emergency Features
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need in an emergency, designed for speed,
              reliability, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Preparedness Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Be Prepared for Any Emergency
            </h3>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Don't wait for an emergency to happen. Get familiar with our tools
              and keep QuickAid bookmarked for instant access when you need it
              most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/emergency")}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Try Emergency Tools Now
              </button>
            </div>

            <div className="mt-8 text-red-100 text-sm">
              <p className="flex items-center justify-center gap-2">
                <Shield size={16} />
                Your privacy and data security are our top priority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Footer */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-6xl mb-4">🚨</div>
              <h4 className="text-xl font-semibold mb-2">Police</h4>
              <p className="text-gray-400 mb-4">Emergency law enforcement</p>
              <div className="text-2xl font-bold text-red-400">100</div>
            </div>
            <div className="text-white">
              <div className="text-6xl mb-4">🚒</div>
              <h4 className="text-xl font-semibold mb-2">Fire Department</h4>
              <p className="text-gray-400 mb-4">Fire and rescue services</p>
              <div className="text-2xl font-bold text-orange-400">101</div>
            </div>
            <div className="text-white">
              <div className="text-6xl mb-4">🚑</div>
              <h4 className="text-xl font-semibold mb-2">Medical Emergency</h4>
              <p className="text-gray-400 mb-4">Paramedics and ambulance</p>
              <div className="text-2xl font-bold text-blue-400">102</div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 QuickAid. || All Rights Reserved. || Subhadaya Bhatta
              || Helping save lives through technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
