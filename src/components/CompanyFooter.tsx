
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const CompanyFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">Fioul-24</h3>
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

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Horaires</p>
                  <p className="text-gray-300">
                    Lun-Ven: 8h-18h<br />
                    Sam: 9h-17h<br />
                    Urgences: 24h/24
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Livraison fioul domestique
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Fioul standard et premium
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Livraison express 24h
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Service clientèle 7j/7
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Devis gratuit en ligne
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Informations légales</h4>
            <div className="text-gray-300 space-y-2 text-sm">
              <p><strong>Fuel 2000 Transports Sàrl</strong></p>
              <p>SIREN: 500830567</p>
              <p>SIRET: 50083056700011</p>
              <p>N° TVA: FR66603090631</p>
              <p>Gérant: William Boscher</p>
            </div>

            <div className="space-y-3 pt-4">
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Mentions légales
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                CGV
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Plan du site
              </a>
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
