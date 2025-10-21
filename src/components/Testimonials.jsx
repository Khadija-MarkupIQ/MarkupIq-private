const testimonials = [
  {
    name: "XYZ",
    role: "Senior Engineer",
    text: "AI saves our team countless hours and catches every detail we used to miss.",
  },
  {
    name: "ABC",
    role: "Drafting Engineer",
    text: "Feels like having an extra team member who never makes mistakes.",
  },
  {
    name: "MNC",
    role: "BIM Coordinator",
    text: "What used to take hours now takes minutes. RedlineIQ transformed our workflow.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-sky-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
              Industry Professionals
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of AEC professionals who have transformed their workflow with RedlineIQ
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-2xl hover:border-blue-300/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              
              {/* Quote icon */}
              <div className="text-4xl text-blue-400/30 mb-4">"</div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>
              
              {/* Author info */}
              <div className="border-t border-gray-200/60 pt-4">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonial.role}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-bl-2xl rounded-tr-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "500+", label: "Happy Teams" },
            { number: "10K+", label: "Projects" },
            { number: "99%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}