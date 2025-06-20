
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const NosTypesFioul = () => {
  const fuelTypes = [
    {
      type: "Standard",
      name: "Fioul domestique classique",
      price: "À partir de 0,70€/L",
      features: [
        "Fioul de qualité standard",
        "Conforme aux normes",
        "Livraison soignée",
        "Prix compétitif"
      ],
      isRecommended: false,
      gradient: "from-blue-50 to-blue-100",
      buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    },
    {
      type: "Premium",
      name: "Fioul avec additifs",
      price: "À partir de 0,73€/L",
      features: [
        "Additifs anti-corrosion",
        "Meilleure conservation",
        "Rendement optimisé",
        "Protection de votre installation"
      ],
      isRecommended: true,
      gradient: "from-orange-50 to-red-50",
      buttonStyle: "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Types de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Fioul</span>
          </h2>
          <p className="text-lg text-gray-600">Choisissez le fioul adapté à vos besoins</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {fuelTypes.map((fuel, index) => (
            <Card key={index} className={`relative bg-gradient-to-br ${fuel.gradient} cozy-shadow border-0 organic-border gentle-hover`}>
              {fuel.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Recommandé</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <div className="text-sm font-medium text-gray-600 mb-2">{fuel.type}</div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {fuel.name}
                </CardTitle>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  {fuel.price}
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <div className="space-y-4 mb-8">
                  {fuel.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 gentle-hover ${fuel.buttonStyle}`}>
                  Choisir {fuel.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosTypesFioul;
