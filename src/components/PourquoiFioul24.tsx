
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, Calculator, Truck } from "lucide-react";

const PourquoiFioul24 = () => {
  const reasons = [
    {
      icon: Phone,
      title: "Service client",
      description: "À votre écoute du lundi au vendredi"
    },
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Fioul certifié et de qualité supérieure"
    },
    {
      icon: Calculator,
      title: "Prix transparents",
      description: "Aucun frais caché, tarifs compétitifs"
    },
    {
      icon: Truck,
      title: "Livraison soignée",
      description: "Ponctuelle et respectueuse de votre propriété"
    }
  ];

  // Destructure icons for proper JSX usage
  const FirstIcon = reasons[0].icon;
  const SecondIcon = reasons[1].icon;
  const ThirdIcon = reasons[2].icon;
  const FourthIcon = reasons[3].icon;

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Layout en grille héro */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Première boîte info */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 cozy-shadow border-0 organic-border gentle-hover lg:row-span-1">
              <CardContent className="p-6 text-center">
                <FirstIcon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reasons[0].title}</h3>
                <p className="text-gray-600 text-sm">{reasons[0].description}</p>
              </CardContent>
            </Card>

            {/* Texte central principal */}
            <div className="lg:row-span-2 text-center">
              <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium text-red-700">Depuis 2008</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Votre fournisseur de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  confiance depuis 2008
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Une expertise familiale au service de votre confort énergétique
              </p>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">Plus de 15 000 clients satisfaits</p>
                <p className="text-gray-600">Font confiance à notre savoir-faire</p>
              </div>
            </div>

            {/* Deuxième boîte info */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 cozy-shadow border-0 organic-border gentle-hover lg:row-span-1">
              <CardContent className="p-6 text-center">
                <SecondIcon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reasons[1].title}</h3>
                <p className="text-gray-600 text-sm">{reasons[1].description}</p>
              </CardContent>
            </Card>

            {/* Troisième boîte info */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 cozy-shadow border-0 organic-border gentle-hover lg:row-span-1">
              <CardContent className="p-6 text-center">
                <ThirdIcon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reasons[2].title}</h3>
                <p className="text-gray-600 text-sm">{reasons[2].description}</p>
              </CardContent>
            </Card>

            {/* Quatrième boîte info */}
            <Card className="bg-gradient-to-br from-red-50 to-red-100 cozy-shadow border-0 organic-border gentle-hover lg:row-span-1">
              <CardContent className="p-6 text-center">
                <FourthIcon className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reasons[3].title}</h3>
                <p className="text-gray-600 text-sm">{reasons[3].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiFioul24;
