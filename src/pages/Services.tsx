
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Phone, Heart, Shield, Users, Star, Droplets, Calculator } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Fioul Standard",
      description: "Notre fioul domestique de qualité pour votre confort quotidien. Conforme aux normes européennes, livré avec soin par notre équipe familiale.",
      features: ["Fioul de qualité certifiée", "Livraison en 2-4 jours", "Prix transparent", "Service personnalisé"],
      price: "0,70€/L",
      isPopular: false,
      gradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Star,
      title: "Fioul Premium",
      description: "Le meilleur pour votre foyer ! Fioul avec additifs anti-corrosion pour une meilleure conservation et un rendement optimisé.",
      features: ["Additifs anti-corrosion", "Meilleure conservation", "Rendement optimisé", "Protection installation"],
      price: "0,73€/L",
      isPopular: true,
      gradient: "from-orange-50 to-red-50"
    },
    {
      icon: Truck,
      title: "Livraison soignée",
      description: "Livraison gratuite à partir de 3000L partout en Île-de-France. Notre équipe expérimentée prend soin de votre propriété.",
      features: ["Gratuite dès 3000L", "Toute l'Île-de-France", "Équipe expérimentée", "Respect de votre propriété"],
      price: "39€ (si < 3000L)",
      isPopular: false,
      gradient: "from-green-50 to-emerald-100"
    },
    {
      icon: Phone,
      title: "Conseils personnalisés",
      description: "William et son équipe vous conseillent gratuitement sur vos besoins en fioul. Devis personnalisé en quelques minutes.",
      features: ["Conseil gratuit", "Devis personnalisé", "Écoute attentive", "Solutions sur mesure"],
      price: "Gratuit",
      isPopular: false,
      gradient: "from-purple-50 to-indigo-100"
    },
    {
      icon: Users,
      title: "Service client familial",
      description: "Depuis 2009, notre entreprise familiale met l'humain au cœur de ses préoccupations. Un interlocuteur dédié pour chaque client.",
      features: ["Entreprise familiale", "Depuis 2009", "Interlocuteur dédié", "Relation de confiance"],
      price: "Inclus",
      isPopular: false,
      gradient: "from-pink-50 to-rose-100"
    },
    {
      icon: Shield,
      title: "Garantie satisfaction",
      description: "Nous sommes si confiants en notre service que nous vous garantissons votre satisfaction, ou nous vous remboursons.",
      features: ["Satisfaction garantie", "Ou remboursé", "Qualité assurée", "Tranquillité d'esprit"],
      price: "Promis",
      isPopular: false,
      gradient: "from-amber-50 to-yellow-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <Header />
      
      {/* Hero Section - Warm and family-focused */}
      <section className="relative overflow-hidden">
        {/* Warm background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8">
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Entreprise familiale depuis 2009</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez pourquoi plus de 10 000 familles nous font confiance pour leur approvisionnement en fioul
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl">
              <div className="text-2xl font-bold text-red-600">10 000+</div>
              <div className="text-sm text-gray-600">Familles satisfaites</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl">
              <div className="text-2xl font-bold text-red-600">15 ans</div>
              <div className="text-sm text-gray-600">D'expérience</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl">
              <div className="text-2xl font-bold text-red-600">2-4 jours</div>
              <div className="text-sm text-gray-600">Délai de livraison</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${service.gradient} organic-border gentle-hover`}>
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">Recommandé</span>
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-white/80 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <service.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-red-600">
                          {service.price}
                        </div>
                        <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl gentle-hover">
                          En savoir plus
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculez votre devis en quelques clics
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Utilisez notre calculateur en ligne pour obtenir votre prix personnalisé instantanément
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl gentle-hover">
                <Calculator className="w-5 h-5 mr-2" />
                Calculer mon prix
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal CTA Section - Family touch */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white cozy-shadow">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Parlons de vos besoins en fioul
              </h2>
              <p className="text-xl mb-8 text-red-50">
                William et son équipe sont là pour vous conseiller personnellement. Un simple appel suffit !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+33184607893" 
                  className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>01 84 60 78 93</span>
                </a>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-2xl transition-all duration-300">
                  Demander un rappel
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2 text-red-100">
                <Users className="w-4 h-4" />
                <span className="text-sm">Service personnalisé • Réponse immédiate • Devis gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default Services;
