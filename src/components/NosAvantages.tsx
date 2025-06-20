
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Gift, Award } from "lucide-react";

const NosAvantages = () => {
  const advantages = [
    {
      icon: Truck,
      title: "Livraison 2-4 jours ouvrés",
      description: "Commandez aujourd'hui, recevez rapidement votre fioul à domicile",
      color: "from-blue-100 to-blue-200"
    },
    {
      icon: Gift,
      title: "Livraison gratuite dès 3000L",
      description: "Économisez sur les frais de transport avec nos volumes avantageux",
      color: "from-green-100 to-green-200"
    },
    {
      icon: Award,
      title: "Fioul de qualité certifiée",
      description: "Produits conformes aux normes françaises et européennes",
      color: "from-orange-100 to-orange-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Avantages</span>
          </h2>
          <p className="text-lg text-gray-600">Pourquoi choisir Fioul-24 pour votre approvisionnement</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white cozy-shadow border-0 organic-border gentle-hover text-center">
              <CardContent className="p-8">
                <div className={`bg-gradient-to-br ${advantage.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                  <advantage.icon className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosAvantages;
