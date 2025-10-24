import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'
import ContactForm from './components/ContactForm'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 mr-2 lg:hidden"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RedlineIQ
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a className="text-gray-600 hover:text-blue-600 font-medium transition-colors" href="#features">Features</a>
            <a className="text-gray-600 hover:text-blue-600 font-medium transition-colors" href="#workflow">Workflow</a>
            <a className="text-gray-600 hover:text-blue-600 font-medium transition-colors" href="#pricing">Pricing</a>
            <a className="text-gray-600 hover:text-blue-600 font-medium transition-colors" href="#contact-form">Contact</a>
            <a href="#contact-form" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200">
              Start Free Trial
            </a>
          </nav>

          <div className="lg:hidden" aria-hidden="true" />
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}