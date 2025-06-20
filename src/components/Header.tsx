
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-red-600">Fioul-24</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Prix
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              À propos
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-red-600 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Appelez-nous: +33 1 84 60 78 93</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold">
              Commandez maintenant
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
