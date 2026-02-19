import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error("Missing VITE_SUPABASE_URL in .env")
}

if (!supabaseAnonKey) {
  throw new Error("Missing VITE_SUPABASE_ANON_KEY in .env")
}

// Optional: log only in development
if (import.meta.env.DEV) {
  console.log("Supabase URL:", supabaseUrl)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
