
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Clock, Star, Leaf, Shield, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Qualité",
      description: "Fioul de qualité supérieure, conforme aux normes européennes les plus strictes."
    },
    {
      icon: Clock,
      title: "Rapidité",
      description: "Livraison en 2-4 jours ouvrés partout en Île-de-France."
    },
    {
      icon: Heart,
      title: "Service familial",
      description: "Une équipe dédiée à votre écoute pour vous accompagner."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Création de Fioul-24",
      description: "William fonde l'entreprise familiale en Île-de-France."
    },
    {
      year: "2012",
      title: "Expansion régionale",
      description: "Extension de nos services à toute l'Île-de-France."
    },
    {
      year: "2018",
      title: "200 000 clients",
      description: "Franchissement du cap des 200 000 familles."
    },
    {
      year: "2023",
      title: "Innovation digitale",
      description: "Lancement de notre plateforme en ligne."
    }
  ];

  const commitments = [
    {
      icon: Leaf,
      title: "Respect de l'environnement",
      description: "Fioul à faible teneur en soufre et camions aux normes Euro 6"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Livraisons sécurisées avec équipement de protection complet"
    },
    {
      icon: Users,
      title: "Service client",
      description: "Équipe formée et expérimentée à votre service"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <Header />
      
      {/* Hero Section - Increased padding */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-8">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span className="text-base font-medium text-gray-700">Entreprise familiale depuis 2008</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Fioul-24</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une entreprise familiale au service de votre confort énergétique depuis plus de 15 ans
          </p>
        </div>
      </section>

      {/* Notre Histoire - Increased padding */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Histoire</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Une aventure familiale</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Fondée en 2008 par William, Fioul-24 est une entreprise familiale spécialisée dans la livraison 
                    de fioul domestique en Île-de-France. Notre mission est simple : offrir un service de qualité, 
                    rapide et personnalisé à chaque famille.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nous privilégions la proximité et l'écoute pour répondre aux besoins spécifiques de chaque client, 
                    qu'il s'agisse d'une livraison d'urgence ou d'un approvisionnement régulier.
                  </p>
                </CardContent>
              </Card>

              <div className="aspect-[4/3] bg-gradient-to-br from-red-200 to-orange-200 rounded-2xl overflow-hidden cozy-shadow">
                <img 
                  alt="Équipe Fioul-24" 
                  className="w-full h-full object-cover" 
                  src="https://i.imgur.com/5skDDm1.jpeg" 
                />
              </div>
            </div>

            {/* Timeline - Increased card padding */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border text-center">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <span className="font-bold text-base">{milestone.year}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">{milestone.title}</h4>
                    <p className="text-gray-600 text-base leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs - Increased padding and sizes */}
      <section className="py-24 lg:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Valeurs</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border text-center">
                  <CardContent className="p-10">
                    <div className="bg-gradient-to-br from-red-100 to-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre Engagement - Increased padding and sizes */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Engagement</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-10">
                  <div className="flex items-center mb-8">
                    <Award className="w-8 h-8 text-red-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Qualité & Sécurité</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-4" />
                      <span className="text-gray-700 text-base">Certification qualité ISO 9001</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-4" />
                      <span className="text-gray-700 text-base">Agrément transport ADR</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-4" />
                      <span className="text-gray-700 text-base">Membre du SNPAA</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-4" />
                      <span className="text-gray-700 text-base">Assurance responsabilité civile</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                    <CardContent className="p-8">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-br from-red-100 to-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mr-6">
                          <commitment.icon className="w-7 h-7 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-lg">{commitment.title}</h4>
                          <p className="text-gray-600 text-base leading-relaxed">{commitment.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default About;
