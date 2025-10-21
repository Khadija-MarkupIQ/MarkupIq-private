import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-purple-50 overflow-hidden">
      {/* Subtle radial accent glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.15),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8">
          <span className="text-sm font-medium text-blue-700 tracking-wide">
            AI-Powered Redline Conversion
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Transform{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Redlines
          </span>{" "}
          into As-Builts
        </h1>

        {/* Description */}
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Convert hand-marked PDFs, DWGs, DXFs, and images into accurate, standardized
          As-Built drawings in minutes. Faster handovers, fewer errors, and higher
          productivity for architects, engineers, and contractors.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Free Trial
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a
            href="#features"
            className="group inline-flex items-center px-8 py-4 rounded-3xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-400 hover:bg-white/60 transition-all duration-300"
          >
            <svg
              className="mr-2 w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "10x", label: "Faster Processing" },
            { number: "99%", label: "Accuracy Rate" },
            { number: "50+", label: "File Formats" },
            { number: "24/7", label: "AI Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute -bottom-44 -left-24 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full"></div>
      <div className="absolute -top-44 -right-24 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>
    </section>
  );
}
