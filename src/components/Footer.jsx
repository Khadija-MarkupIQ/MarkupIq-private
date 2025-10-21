import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-sky-50 via-gray-50 to-slate-100 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-slate-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                RedlineIQ
              </h4>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Transform your redline workflow with AI-powered precision. Faster handovers, fewer errors, and higher productivity for AEC teams.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { name: 'Twitter', icon: '𝕏', url: '#' },
                { name: 'LinkedIn', icon: 'in', url: '#' },
                { name: 'YouTube', icon: '▶', url: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white border border-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-slate-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label={social.name}
                >
                  <span className="font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-gray-900">Contact Us</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@redlineiq.com" className="hover:text-blue-600 transition-colors">
                  sales@redlineiq.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" className="hover:text-blue-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-gray-900">Get Started</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Ready to transform your workflow? Request a demo today.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm"
                required
              />
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RedlineIQ. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}