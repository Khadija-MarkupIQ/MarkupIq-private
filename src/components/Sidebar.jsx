import React from 'react'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay - closes sidebar when clicked */}
      {isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-50"
          onClick={onClose} // This closes the sidebar
        />
      )}
      
      {/* Sidebar  */}
     <div className={`
        fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>

        <div className="p-6 h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RedlineIQ
              </span>
            </div>
            {/* Close button - closes sidebar when clicked */}
            <button 
              onClick={onClose} // This closes the sidebar
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links - close sidebar when clicked */}
          <nav className="space-y-2 flex-1">
            <a 
              href="#features" 
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 group"
              onClick={onClose} // This closes the sidebar
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Features
            </a>
            <a 
              href="#pricing" 
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 group"
              onClick={onClose} // This closes the sidebar
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Pricing
            </a>
            <a 
              href="#workflow" 
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 group"
              onClick={onClose} // This closes the sidebar
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Workflow
            </a>
            <a 
              href="#contact" 
              className="flex items-center py-3 px-4 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 group"
              onClick={onClose} // This closes the sidebar
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </nav>

          {/* CTA Section */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-gray-800 mb-2">Ready to transform your workflow?</h3>
            <p className="text-sm text-gray-600 mb-4">Start your free trial today</p>
            <a 
              href="#contact"
              onClick={onClose} // This closes the sidebar
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 mb-2"
            >
              Start Free Trial
            </a>
            <a 
              href="#pricing"
              onClick={onClose} // This closes the sidebar
              className="block w-full text-center border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 text-sm"
            >
              View Plans
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-600 space-y-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@redlineiq.com
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" onClick={onClose}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" onClick={onClose}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}