import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
const NotreExpertise = () => {
  const expertisePoints = ["Spécialisés en livraison Île-de-France", "Équipe experte et qualifiée", "Service personnalisé et à l'écoute", "Relation de confiance depuis 2008"];
  return <section className="py-20 bg-gradient-to-br from-warm-cream to-orange-25">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image côté gauche */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-red-200 to-orange-200 rounded-3xl overflow-hidden cozy-shadow">
              <img alt="Équipe Fioul-24" className="w-full h-full object-cover object-left-center" src="https://i.imgur.com/5skDDm1.jpeg" />
            </div>
          </div>

          {/* Contenu côté droit */}
          <Card className="bg-white/95 backdrop-blur-sm cozy-shadow border-0 organic-border">
            <CardContent className="p-10">
              <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium text-red-700">Depuis 2008</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                15 ans d'expérience
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  à votre service
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Forte de notre expertise dans le domaine du fioul domestique, 
                notre équipe vous accompagne pour tous vos besoins énergétiques.
              </p>

              <div className="space-y-4 mb-8">
                {expertisePoints.map((point, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>)}
              </div>

              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold gentle-hover">
                Découvrez notre histoire
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default NotreExpertise;