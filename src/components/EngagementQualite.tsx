
import { Shield, Clock, Award, Star } from "lucide-react";

const EngagementQualite = () => {
  const engagements = [
    {
      icon: Shield,
      text: "Fioul certifié"
    },
    {
      icon: Clock,
      text: "Livraison ponctuelle"
    },
    {
      icon: Award,
      text: "Service après-vente"
    }
  ];

  const badges = [
    { name: "ISO 9001", description: "Qualité certifiée" },
    { name: "NF", description: "Norme française" },
    { name: "15 ans", description: "D'expérience" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white overflow-hidden relative">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-300 fill-current" />
            <span className="text-sm font-medium">Notre promesse</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Notre engagement : 100% satisfaction client
          </h2>
          
          {/* Points d'engagement en ligne */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {engagements.map((engagement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <engagement.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{engagement.text}</span>
                {index < engagements.length - 1 && (
                  <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="flex justify-center items-center space-x-12">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-3 gentle-hover">
                <div className="text-2xl font-bold">{badge.name}</div>
              </div>
              <p className="text-sm text-white/80">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementQualite;
