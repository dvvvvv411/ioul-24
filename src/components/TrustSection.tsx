
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Phone, Award, Users, Star, Shield, Home, Clock } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Service personnalisé",
      description: "Chaque client est unique, notre approche aussi",
      color: "from-red-100 to-pink-100"
    },
    {
      icon: Home,
      title: "Livraison soignée",
      description: "Nous prenons soin de votre propriété comme la nôtre",
      color: "from-orange-100 to-amber-100"
    },
    {
      icon: Phone,
      title: "Conseil gratuit",
      description: "Nos experts répondent à toutes vos questions",
      color: "from-blue-100 to-indigo-100"
    },
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Satisfaction garantie ou remboursé",
      color: "from-green-100 to-emerald-100"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris 15ème",
      text: "William et son équipe sont fantastiques ! Un service chaleureux et une livraison impeccable. Ils ont même pris le temps de m'expliquer comment optimiser ma consommation.",
      rating: 5,
      image: "👩🏻",
      years: "Cliente depuis 4 ans"
    },
    {
      name: "Pierre Martin",
      location: "Versailles",
      text: "Une entreprise familiale qui comprend nos besoins. Commande le matin, livré l'après-midi avec le sourire. Exactement ce qu'une famille comme la nôtre recherche.",
      rating: 5,
      image: "👨🏻",
      years: "Client depuis 2 ans"
    },
    {
      name: "Sophie Leroy",
      location: "Boulogne-Billancourt",
      text: "Très rassurante cette approche humaine ! Prix transparent, équipe sympathique, et surtout : ils tiennent leurs promesses. Notre famille leur fait entièrement confiance.",
      rating: 5,
      image: "👩🏼",
      years: "Cliente depuis 6 ans"
    }
  ];

  const teamMembers = [
    {
      name: "William",
      role: "Fondateur & Conseil client",
      phone: "+33 1 84 60 78 93",
      description: "À votre écoute depuis 1995"
    },
    {
      name: "Sophie",
      role: "Responsable livraisons",
      description: "Coordonne vos livraisons avec soin"
    },
    {
      name: "Marc",
      role: "Expert technique",
      description: "Conseils personnalisés pour votre installation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Warm intro */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-6">
            <Users className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-gray-700">L'équipe Fioul-24 à votre service</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi nos clients 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">nous font confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis 28 ans, nous chauffons les foyers d'Île-de-France avec la même passion : 
            vous offrir le meilleur service avec un sourire sincère.
          </p>
        </div>

        {/* Our approach - warm features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Notre approche familiale</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover">
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team presentation */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Rencontrez notre équipe
            </h3>
            <p className="text-lg text-gray-600">
              Des visages familiers pour un service personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-red-600 font-medium mb-2">{member.role}</p>
                  {member.phone && (
                    <a href={`tel:${member.phone}`} className="text-sm text-gray-600 hover:text-red-600 transition-colors block mb-2">
                      {member.phone}
                    </a>
                  )}
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Heartfelt testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos familles
            </h3>
            <p className="text-lg text-gray-600">
              Des témoignages authentiques de nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">{testimonial.image}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-xs text-red-600 font-medium">{testimonial.years}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust numbers with warmth */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl cozy-shadow p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">28 ans à votre service</h3>
            <p className="text-gray-600">Une confiance qui se mesure en chiffres</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24h</div>
              <p className="text-gray-700 font-medium">Délai maximum</p>
              <p className="text-sm text-gray-500">Livraison garantie</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15 000+</div>
              <p className="text-gray-700 font-medium">Familles satisfaites</p>
              <p className="text-sm text-gray-500">Depuis 1995</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">Satisfaction garantie</p>
              <p className="text-sm text-gray-500">Ou remboursé</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">0€</div>
              <p className="text-gray-700 font-medium">Frais cachés</p>
              <p className="text-sm text-gray-500">Transparence totale</p>
            </div>
          </div>
        </div>

        {/* Warm call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-12 text-white">
            <Heart className="w-12 h-12 mx-auto mb-6 text-red-100" />
            <h3 className="text-3xl font-bold mb-4">Rejoignez notre grande famille</h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Découvrez pourquoi tant de familles choisissent Fioul-24 pour chauffer leur foyer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33184607893" className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 gentle-hover">
                <Phone className="w-5 h-5" />
                <span>Appelez William : 01 84 60 78 93</span>
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Demandez votre devis gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
