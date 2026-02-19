import React, { useState, useEffect } from "react"
import { supabase } from "./lib/supabaseClient"

import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"
import ContactForm from "./components/ContactForm"

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
      setLoading(false)
    }

    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 mr-2 lg:hidden"
              aria-label="Open menu"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
            <a
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              href="#workflow"
            >
              Workflow
            </a>
            <a
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              href="#pricing"
            >
              Pricing
            </a>

            {!session ? (
              <a
                href="#contact-form"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
              >
                Start Free Trial
              </a>
            ) : (
              <button
                onClick={() => supabase.auth.signOut()}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
              >
                Sign Out
              </button>
            )}
          </nav>

          <div className="lg:hidden" aria-hidden="true" />
        </div>
      </header>

      <main className="flex-grow">
        {!session ? (
          <>
            <Hero />
            <Features />
            <Workflow />
            <Pricing />
            <Testimonials />
            <ContactForm />
          </>
        ) : (
          <div className="max-w-4xl mx-auto py-20 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Welcome to your Dashboard
            </h2>
            <p className="text-gray-600 text-lg">
              You are successfully authenticated with Supabase.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}