
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TemoignagesClients = () => {
  const testimonials = [
    {
      name: "Claire Moreau",
      location: "Versailles (78)",
      text: "Service impeccable ! Livraison dans les temps et équipe très professionnelle.",
      rating: 5,
      image: "👩🏼",
      height: "h-64"
    },
    {
      name: "Jean-Pierre Durand",
      location: "Meaux (77)",
      text: "Excellent rapport qualité-prix. Je recommande vivement Fioul-24 pour la fiabilité et la ponctualité de leurs livraisons.",
      rating: 5,
      image: "👨🏻",
      height: "h-72"
    },
    {
      name: "Sylvie Blanchard",
      location: "Créteil (94)",
      text: "Une équipe à l'écoute et des prix compétitifs. Cela fait 3 ans que je commande chez eux.",
      rating: 5,
      image: "👩🏻",
      height: "h-60"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-25 via-orange-25 to-red-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Témoignages <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Clients</span>
          </h2>
          <p className="text-lg text-gray-600">Ce que disent nos clients satisfaits</p>
        </div>

        {/* Staggered layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${index === 1 ? 'md:mt-8' : ''} ${index === 2 ? 'md:mt-4' : ''}`}
            >
              <Card className={`bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover ${testimonial.height}`}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/temoignages" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
            Plus d'avis clients
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemoignagesClients;
