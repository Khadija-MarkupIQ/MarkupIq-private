import React from "react";

export default function Features() {
  const features = [
    {
      icon: "📁",
      title: "Multi-Format Support",
      description:
        "Upload PDF, DWG, DXF, and image files. Our AI handles all major AEC file formats with precision.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Analysis",
      description:
        "Advanced computer vision and NLP models interpret markups and apply design standards automatically.",
    },
    {
      icon: "⚡",
      title: "Instant Conversion",
      description:
        "Transform redlines into As-Built drawings in minutes, not hours. Accelerate your project timelines.",
    },
    {
      icon: "🔒",
      title: "QA & Compliance",
      description:
        "Built-in quality assurance checks ensure accuracy and compliance with company-specific standards.",
    },
    {
      icon: "🔄",
      title: "Version Control",
      description:
        "Maintain complete version history and track changes throughout the project lifecycle.",
    },
    {
      icon: "🚀",
      title: "Seamless Export",
      description:
        "Export ready-to-use As-Built drawings in your preferred format with one click.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern AEC Teams
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Streamline your redline-to-as-built workflow and deliver projects with unmatched accuracy and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
    >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/40 to-purple-100/30 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
