import React from "react";

export default function Workflow() {
  const steps = [
    {
      text: "Upload redline markups (PDF, DWG, DXF, or images).",
      icon: "📁"
    },
    {
      text: "AI interprets changes using CV + NLP models.",
      icon: "🤖"
    },
    {
      text: "Rule engine applies company-specific design standards.",
      icon: "⚡"
    },
    {
      text: "QA check ensures accuracy & compliance.",
      icon: "🔍"
    },
    {
      text: "Export ready As-Built drawings instantly.",
      icon: "🚀"
    }
  ];

  return (
    <section id="workflow" className="relative py-24 bg-gradient-to-br from-sky-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-slate-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700 tracking-wide">
              SIMPLE 5-STEP PROCESS
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-700">
              Works
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your manual redline process into a fully automated, intelligent workflow — 
            from upload to final As-Built in minutes, not hours.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400/60 via-slate-500/60 to-blue-400/60"></div>
          
          {/* Steps Container */}
          <div className="space-y-8 lg:space-y-16 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content Card */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Number Connector */}
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-slate-600 text-white text-2xl font-bold shadow-xl shadow-blue-500/30 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white">
                    {index + 1}
                  </div>
                  
                  {/* Connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400/60 to-slate-500/60"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 shadow-xl max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Workflow?
            </h4>
            <p className="text-gray-600 mb-6">
              Join thousands of AEC professionals who save hours every week
            </p>
            <button className="group relative px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}