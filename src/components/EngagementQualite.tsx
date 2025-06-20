
import { Shield, Clock, Award, Star, CheckCircle } from "lucide-react";

const EngagementQualite = () => {
  const engagements = [
    {
      icon: Shield,
      text: "Fioul certifié",
      description: "Qualité garantie"
    },
    {
      icon: Clock,
      text: "Livraison ponctuelle",
      description: "Respect des délais"
    },
    {
      icon: Award,
      text: "Service après-vente",
      description: "Support expert"
    }
  ];

  const badges = [
    { name: "ISO 9001", description: "Qualité certifiée" },
    { name: "NF", description: "Norme française" },
    { name: "15 ans", description: "D'expérience" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warm-orange/10 text-warm-orange px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Notre engagement</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            100% satisfaction client
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à vous offrir le meilleur service avec des garanties concrètes
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {engagements.map((engagement, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center gentle-hover group">
              <div className="bg-warm-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-red transition-colors duration-300">
                <engagement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{engagement.text}</h3>
              <p className="text-gray-600">{engagement.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos certifications</h3>
            <p className="text-gray-600">Des garanties reconnues pour votre tranquillité</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {badges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 mb-3 cozy-shadow group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-warm-orange mb-1">{badge.name}</div>
                </div>
                <p className="text-sm text-gray-600 font-medium">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementQualite;
