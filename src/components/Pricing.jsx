import { useState } from "react";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$249",
      period: "/month",
      popular: false,
      details: "Perfect for small GCs or Drafting Shops",
      features: [
        "200 pages included / month",
        "Overage $0.50/page",
        "3 seats included ($15/additional seat)",
        "Core OCR + Review UI, upload, alignment, colored stroke segmentation, rule engine, DXF/PDF export",
        "Basic email support",
        "No page rollover",
      ],
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      popular: true,
      beta: true,
      details: "Perfect for MEP/BIM teams",
      features: [
        "1,000 pages included / month",
        "Overage $0.35/page",
        "10 seats included ($12/additional seat)",
        "Advanced OCR bundle (TrOCR), domain lexicon, batch processing, Drive/Dropbox connectors, priority queue, audit trail, CSV change log",
        "Pages roll over up to 60 days",
      ],
    },
    {
      name: "Enterprise",
      price: "$1499",
      period: "/month",
      popular: false,
      details: "Perfect for Large Contractors, BIM/VDC departments",
      features: [
        "3,000 pages / month",
        "Overage $0.25/page",
        "25 seats included ($10/additional seat)",
        "SSO, SAML, Granular roles, API/webhooks, on-prem MinLO option, SOC 2 reporting, 1-hour SLA, region pinning, redline color model presets, templated QA checks",
        "Pages roll over up to 60 days",
      ],
    },
    {
      name: "Enterprise Plus",
      price: "Custom Pricing",
      period: "",
      popular: false,
      details: "Perfect for Top-tier, High-volume Customers",
      features: [
        "10k-25k pages",
        "Overage $0.18-0.22/page",
        "Dedicated environments, private queue, quarterly model tuning, SLA99.9%",
        "On-prem worker & private environments for predictable performance",
      ],
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$2988",
      period: "/year",
      popular: false,
      details: "Perfect for small GCs or Drafting Shops",
      features: [
        "200 pages included / month",
        "Overage $0.50/page",
        "3 seats included ($15/additional seat)",
        "Core OCR + Review UI, upload, alignment, colored stroke segmentation, rule engine, DXF/PDF export",
        "Basic email support",
        "No page rollover",
      ],
    },
    {
      name: "Professional",
      price: "$7188",
      period: "/year",
      popular: true,
      beta: true,
      details: "Perfect for MEP/BIM teams",
      features: [
        "1,000 pages included / month",
        "Overage $0.35/page",
        "10 seats included ($12/additional seat)",
        "Advanced OCR bundle (TrOCR), domain lexicon, batch processing, Drive/Dropbox connectors, priority queue, audit trail, CSV change log",
        "Pages roll over up to 60 days",
      ],
    },
    {
      name: "Enterprise",
      price: "$17988",
      period: "/year",
      popular: false,
      details: "Perfect for Large Contractors, BIM/VDC departments",
      features: [
        "3,000 pages / month",
        "Overage $0.25/page",
        "25 seats included ($10/additional seat)",
        "SSO, SAML, Granular roles, API/webhooks, on-prem MinLO option, SOC 2 reporting, 1-hour SLA, region pinning, redline color model presets, templated QA checks",
        "Pages roll over up to 60 days",
      ],
    },
    {
      name: "Enterprise Plus",
      price: "Custom Pricing",
      period: "/year",
      popular: false,
      details: "Perfect for Top-tier, High-volume Customers",
      features: [
        "10k-25k pages",
        "Overage $0.18-0.22/page",
        "Dedicated environments, private queue, quarterly model tuning, SLA99.9%",
        "On-prem worker & private environments for predictable performance",
      ],
    },
  ],
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-br from-sky-50 via-white to-purple-50 overflow-hidden py-24"
    >
      {/* Subtle glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plans designed for every team size. Start free — scale when ready.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <span
              className={`font-medium ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative w-16 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === "monthly" ? "left-1" : "left-9"
                }`}
              ></div>
            </button>
            <div className="flex items-center space-x-2">
              <span
                className={`font-medium ${
                  billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Yearly
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full border border-green-200">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans[billingCycle].map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl scale-105 text-white"
                  : "bg-white border border-gray-200 hover:border-blue-300 shadow-lg text-gray-900"
              }`}
            >
              {/* Tags */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`mb-6 ${
                  plan.popular ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {plan.details}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">
                    {plan.price}
                  </span>
                  <span
                    className={`ml-1 ${
                      plan.popular ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 ${
                        plan.popular ? "text-blue-100" : "text-green-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        plan.popular ? "text-blue-100" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Beta Tag and Button */}
              <div className="space-y-3">
                {plan.beta && (
                  <div className="text-center">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-2 rounded-lg border border-purple-200">
                      Beta Promo: $399/month for the first 90 days
                    </span>
                  </div>
                )}
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 ${
                    plan.popular ? "bg-white text-blue-600 hover:bg-gray-50" : ""
                  }`}
                >
                  {index === 3 ? "Contact Us" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-600 text-sm space-y-3">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-2">
              ✅ Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              ✅ No hidden fees
            </span>
            <span className="flex items-center gap-2">
              ✅ Secure payments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}