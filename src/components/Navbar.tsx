import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Printer, Clock, List, Settings, Files, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Printer, label: "Dashboard" },
    { path: "/queue", icon: List, label: "Print Queue" },
    { path: "/schedule", icon: Clock, label: "Schedule Print" },
    { path: "/frequent", icon: Files, label: "Frequent Docs" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <h1 className="text-xl font-bold text-gray-800">betterMehta</h1>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-2 mt-2 bg-white shadow-md rounded-md p-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
