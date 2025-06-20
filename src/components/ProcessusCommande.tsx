
import { Calculator, ShoppingCart, Truck, Home } from "lucide-react";

const ProcessusCommande = () => {
  const steps = [
    {
      number: 1,
      icon: Calculator,
      title: "Calculez votre prix",
      description: "Utilisez notre calculateur en ligne pour estimer votre commande"
    },
    {
      number: 2,
      icon: ShoppingCart,
      title: "Passez commande",
      description: "Finalisez votre commande en quelques clics seulement"
    },
    {
      number: 3,
      icon: Truck,
      title: "Livraison rapide 2-4 jours",
      description: "Nous préparons et expédions votre fioul rapidement"
    },
    {
      number: 4,
      icon: Home,
      title: "Fioul livré chez vous",
      description: "Réception de votre commande directement à domicile"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-25 via-orange-25 to-amber-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Processus de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Commande</span>
          </h2>
          <p className="text-lg text-gray-600">Quatre étapes simples pour recevoir votre fioul</p>
        </div>

        {/* Timeline horizontale */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-orange-200 to-red-200 rounded-full mx-20"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Icône du step */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Numéro du step */}
                <div className="absolute -top-2 -right-2 z-20 w-8 h-8 bg-white border-2 border-red-500 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mx-auto transform translate-x-6">
                  {step.number}
                </div>
                
                {/* Contenu */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 cozy-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessusCommande;
