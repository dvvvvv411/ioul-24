
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    // If not on homepage, navigate first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Already on homepage, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group">
              <img 
                src="https://i.imgur.com/YsfubnI.png" 
                alt="Fioul-24 Logo" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
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
            <Button 
              onClick={scrollToTop}
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-2 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Commandez maintenant
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img 
                src="https://i.imgur.com/YsfubnI.png" 
                alt="Fioul-24 Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Empty space for balance */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center text-red-600 font-semibold px-2 py-1">
                <Phone className="w-5 h-5 mr-2" />
                <span>+33 1 84 60 78 93</span>
              </div>
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-2 font-semibold mx-2"
              >
                Commandez maintenant
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
