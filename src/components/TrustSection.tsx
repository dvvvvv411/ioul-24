
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Euro, Phone, Award, Star } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Livraison rapide",
      description: "Livraison garantie sous 24h partout en Île-de-France"
    },
    {
      icon: Euro,
      title: "Prix compétitifs",
      description: "Les meilleurs tarifs du marché, sans compromis sur la qualité"
    },
    {
      icon: Phone,
      title: "Service client",
      description: "Équipe disponible 7j/7 pour répondre à vos questions"
    },
    {
      icon: Award,
      title: "Qualité certifiée",
      description: "Fioul domestique conforme aux normes européennes"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris 15ème",
      text: "Service impeccable ! Livraison rapide et prix très compétitif. Je recommande vivement Fioul-24.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      location: "Versailles",
      text: "Commande passée le matin, livré l'après-midi. Exactement ce qu'il nous fallait pour notre maison.",
      rating: 5
    },
    {
      name: "Sophie Leroy",
      location: "Boulogne-Billancourt",
      text: "Très professionnel, prix transparent et équipe très sympathique. Client fidèle depuis 3 ans.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Why Choose Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir <span className="text-red-600">Fioul-24</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à vous fournir le meilleur service de livraison de fioul en Île-de-France
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h3>
          <p className="text-lg text-gray-600">
            Plus de 10 000 clients satisfaits nous font confiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">24h</div>
                <p className="text-gray-700">Livraison garantie</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">10 000+</div>
                <p className="text-gray-700">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">15 ans</div>
                <p className="text-gray-700">D'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
