export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-r from-sky-100 via-gray-50 to-slate-100 text-gray-800 shadow-lg backdrop-blur-sm border-b border-gray-200/60">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent tracking-wider hover:scale-105 transform transition-transform duration-300">
        RedlineIQ
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <a 
            href="#features" 
            className="hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a 
            href="#workflow" 
            className="hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Workflow
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a 
            href="#pricing" 
            className="hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}