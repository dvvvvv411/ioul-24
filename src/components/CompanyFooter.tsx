
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="https://i.imgur.com/YsfubnI.png" 
                alt="Fioul-24 Logo" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Votre partenaire de confiance pour la livraison de fioul domestique en Île-de-France.
                Service rapide, prix compétitifs, qualité garantie.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Hotline 24/7</p>
                  <p className="text-gray-300">+33 1 84 60 78 93</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">contact@fioul-24.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">
                    23 rue de la Porte d'Aubervilliers<br />
                    75018 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/services" className="hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="hover:text-red-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="hover:text-red-400 transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:text-red-400 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/conditions-livraison" className="hover:text-red-400 transition-colors">
                  Conditions de livraison
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Informations légales</h4>
            
            <div className="space-y-3 pt-4">
              <Link to="/mentions-legales" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                CGV
              </Link>
              <Link to="/conditions-livraison" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Conditions de livraison
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Fioul-24. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                Livraison en Île-de-France uniquement
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Service disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompanyFooter;
