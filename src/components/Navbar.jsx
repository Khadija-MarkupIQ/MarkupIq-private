import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function Navbar() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-r from-sky-100 via-gray-50 to-slate-100 text-gray-800 shadow-lg backdrop-blur-sm border-b border-gray-200/60">
      
      {/* Logo */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent tracking-wider hover:scale-105 transform transition-transform duration-300">
        RedlineIQ
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-lg font-medium items-center">
        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
        <li><a href="#workflow" className="hover:text-blue-600">Workflow</a></li>
        <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>

        {!session ? (
          <>
            <li>
              <button
                onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a
                href="/dashboard"
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition"
              >
                Dashboard
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}