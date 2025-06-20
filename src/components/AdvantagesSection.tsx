
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Euro, Truck, Award, Users, Leaf, Phone } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Qualité Garantie",
      description: "Fioul certifié conforme aux normes européennes NF EN 590",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Livraison Express",
      description: "Livraison garantie sous 24h, 7j/7 même le dimanche",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Euro,
      title: "Prix Transparent",
      description: "Tarifs compétitifs sans frais cachés, devis gratuit",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Truck,
      title: "Flotte Moderne",
      description: "Camions-citernes récents équipés GPS pour suivi temps réel",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Plus de 25 ans d'expérience dans la livraison de fioul",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Service Client",
      description: "Équipe dédiée disponible du lundi au samedi 8h-20h",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Leaf,
      title: "Engagement Écologique",
      description: "Fioul à faible teneur en soufre, respectueux de l'environnement",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Phone,
      title: "Urgences 24h/24",
      description: "Service d'urgence disponible pour vos besoins imprévus",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmJmYmZiIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Depuis 1995
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-red-600">Avantages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi plus de <AnimatedCounter end={15000} suffix="+" className="font-bold text-red-600" /> clients 
            nous font confiance pour leurs livraisons de fioul
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">
                <AnimatedCounter end={25} suffix=" ans" />
              </div>
              <p className="text-gray-600">D'expérience</p>
            </div>
          </div>
          <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">
                <AnimatedCounter end={15000} suffix="+" />
              </div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
          </div>
          <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">
                <AnimatedCounter end={24} suffix="h" />
              </div>
              <p className="text-gray-600">Livraison garantie</p>
            </div>
          </div>
          <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-gray-600">Taux de satisfaction</p>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0 group hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${advantage.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <advantage.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Certifications</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-900">Norme NF EN 590</p>
                <p className="text-sm text-gray-600">Qualité certifiée</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <p className="font-semibold text-gray-900">ISO 14001</p>
                <p className="text-sm text-gray-600">Engagement environnemental</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <p className="font-semibold text-gray-900">ADR Certifié</p>
                <p className="text-sm text-gray-600">Transport sécurisé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
