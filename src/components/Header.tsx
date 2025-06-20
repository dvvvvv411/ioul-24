
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group">
              <h1 className="text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300 transform group-hover:scale-105">
                Fioul-24
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-red-600 font-semibold group cursor-pointer">
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span className="hidden sm:inline group-hover:text-red-700 transition-colors duration-300">
                Appelez-nous: +33 1 84 60 78 93
              </span>
            </div>
            <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-2 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Commandez maintenant
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
