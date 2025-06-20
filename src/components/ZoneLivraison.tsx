
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const ZoneLivraison = () => {
  const departements = [
    { code: "75", name: "Paris" },
    { code: "77", name: "Seine-et-Marne" },
    { code: "78", name: "Yvelines" },
    { code: "91", name: "Essonne" },
    { code: "92", name: "Hauts-de-Seine" },
    { code: "93", name: "Seine-Saint-Denis" },
    { code: "94", name: "Val-de-Marne" },
    { code: "95", name: "Val-d'Oise" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background avec image de carte */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
          alt="Carte Île-de-France" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-800/70"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Zone vide pour l'effet visuel de la carte */}
          <div></div>

          {/* Contenu côté droit */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 cozy-shadow">
            <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Zone de couverture</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Livraison dans toute
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                l'Île-de-France
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Nous desservons tous les départements franciliens avec la même qualité de service.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {departements.map((dept, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 text-white text-sm font-bold rounded-lg flex items-center justify-center">
                    {dept.code}
                  </div>
                  <span className="text-gray-700 font-medium">{dept.name}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg gentle-hover">
              Vérifiez votre éligibilité
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneLivraison;
