import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const policeImages = [
  {
    src: "https://english.news.cn/20231019/98aaa3e4c15947b585946f9e3fd44c9d/2023101998aaa3e4c15947b585946f9e3fd44c9d_ChkhgeE007014_20231019_CBMFN0A001.jpg",
    alt: "Nepal Police Parade",
    description: "Nepal Police Parade",
  },
  {
    src: "https://assets-api.kathmandupost.com/thumb.php?height=601&src=https%3A%2F%2Fassets-cdn.kathmandupost.com%2Fuploads%2Fsource%2Fnews%2F2023%2Fthird-party%2F31-1699148093.jpg&w=900",
    alt: "Rescue Operation by Nepal Police",
    description: "Nepal Police conducting rescue operations",
  },
  {
    src: "https://imgs.search.brave.com/kqHdUsjQzZSNbnUTpm3fRA27JsIwLIiog1lCzfUdwT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaXNp/bmduZXBhbGRhaWx5/LmNvbS9zdG9yYWdl/L21lZGlhLzY1ODc4/L05lcGFsLVBvbGlj/ZS1IZWFkcXVhcnRl/cnMuanBn",
    alt: "Nepal Police Headquarters",
    description: "Nepal Police Headquarter",
  },
];

const NepalPoliceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % policeImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % policeImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + policeImages.length) % policeImages.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
      {/* Enhanced Header with Gradient and Badge */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-3xl font-bold tracking-wide">Nepal Police</h2>
          </div>
          <p className="text-center text-blue-100 text-lg font-medium">
            🇳🇵 Serving the Nation with Honor & Integrity
          </p>
          <div className="flex justify-center mt-3">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              Photo Gallery
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Slider Container */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Image Display with Enhanced Styling */}
        <div className="relative h-[500px] overflow-hidden bg-gray-900">
          <div
            className="flex transition-all duration-700 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {policeImages.map((image, idx) => (
              <div key={idx} className="min-w-full h-full relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-2xl">
                    <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">
                      {image.alt}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed drop-shadow-md">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Enhanced Slide Counter */}
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
          {currentSlide + 1} of {policeImages.length}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white p-2 rounded-full transition-all duration-300 hover:bg-black/80 border border-white/20"
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="flex justify-center items-center space-x-3 p-8 bg-gradient-to-r from-gray-50 to-gray-100">
        {policeImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
            }`}
          />
        ))}
      </div>

      {/* Enhanced Auto-play Status with Progress Bar */}
      <div className="px-8 pb-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <div
              className={`w-3 h-3 rounded-full mr-3 transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-green-500 animate-pulse shadow-md"
                  : "bg-gray-400"
              }`}
            ></div>
            <span className="font-medium">
              {isAutoPlaying ? "Auto-playing" : "Paused"}
              {isHovered && isAutoPlaying ? " (Hover to pause)" : ""}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 mx-6 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100 ${
                isAutoPlaying && !isHovered ? "animate-pulse" : ""
              }`}
              style={{
                width: `${((currentSlide + 1) / policeImages.length) * 100}%`,
              }}
            ></div>
          </div>

          <span className="text-xs text-gray-500 font-mono">
            {String(currentSlide + 1).padStart(2, "0")}/
            {String(policeImages.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NepalPoliceSlider;
