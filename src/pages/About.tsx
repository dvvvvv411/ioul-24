
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import TrustSection from "@/components/TrustSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Leaf, Clock, Star, Heart, Phone, Truck, CheckCircle, MapPin, Calendar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Qualité",
      description: "Nous garantissons un fioul de qualité supérieure, conforme aux normes européennes les plus strictes.",
      color: "from-yellow-100 to-amber-100"
    },
    {
      icon: Clock,
      title: "Rapidité",
      description: "Livraison express en 2-4 jours ouvrés partout en Île-de-France pour répondre à vos besoins urgents.",
      color: "from-blue-100 to-indigo-100"
    },
    {
      icon: Users,
      title: "Service familial",
      description: "Une équipe dédiée à votre écoute pour vous accompagner dans tous vos projets énergétiques.",
      color: "from-red-100 to-pink-100"
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Création de Fioul-24",
      description: "William fonde l'entreprise familiale avec la vision d'offrir un service personnalisé en Île-de-France."
    },
    {
      year: "2012",
      title: "Expansion régionale",
      description: "Extension de nos services à toute l'Île-de-France avec une flotte de camions dédiés."
    },
    {
      year: "2018",
      title: "10 000 clients",
      description: "Franchissement du cap des 10 000 familles qui nous font confiance."
    },
    {
      year: "2023",
      title: "Innovation digitale",
      description: "Lancement de notre plateforme en ligne pour faciliter vos commandes et devis."
    }
  ];

  const certifications = [
    "Certification qualité ISO 9001",
    "Agrément transport de matières dangereuses ADR",
    "Certification environnementale ISO 14001",
    "Membre du SNPAA (Syndicat National des Pétroliers)",
    "Assurance responsabilité civile professionnelle"
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
      icon: Heart,
      title: "Service humain",
      description: "Une approche personnalisée pour chaque famille"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Warm background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-8">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Entreprise familiale depuis 2008</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Fioul-24</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Une histoire familiale de passion et d'expertise au service de votre confort énergétique depuis plus de 15 ans
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl cozy-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl cozy-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">15 000+</div>
              <div className="text-sm text-gray-600">Familles satisfaites</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl cozy-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Île-de-France</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Histoire</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Depuis 2008, Fioul-24 accompagne les familles d'Île-de-France dans leurs besoins énergétiques avec passion et expertise.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Une aventure familiale</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Fondée en 2008 par William, Fioul-24 est née d'une vision simple : offrir un service de livraison de fioul 
                      personnalisé et chaleureux aux familles d'Île-de-France. Ce qui a commencé comme une petite entreprise familiale 
                      est devenu aujourd'hui un acteur reconnu du secteur.
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Notre succès repose sur des valeurs authentiques : l'écoute, la proximité, et un service irréprochable. 
                      Chaque client est unique, et nous adaptons notre approche à ses besoins spécifiques.
                    </p>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-4">En chiffres :</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-red-600">15+</div>
                          <div className="text-sm text-gray-700">Années d'expérience</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-600">15 000+</div>
                          <div className="text-sm text-gray-700">Clients satisfaits</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-red-200 to-orange-200 rounded-3xl overflow-hidden cozy-shadow">
                  <img 
                    alt="Équipe Fioul-24 au travail" 
                    className="w-full h-full object-cover" 
                    src="https://i.imgur.com/5skDDm1.jpeg" 
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos étapes clés</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover">
                    <CardContent className="p-6 text-center">
                      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">{milestone.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-700">
                Les principes qui guident notre entreprise familiale au quotidien
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover text-center">
                  <CardContent className="p-8">
                    <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                      <value.icon className="w-10 h-10 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Expertise</span>
              </h2>
              <p className="text-xl text-gray-700">
                15 ans d'expérience au service de votre confort énergétique
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <Truck className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Spécialistes de l'Île-de-France</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Notre connaissance approfondie de la région nous permet d'optimiser nos livraisons et d'offrir 
                    un service rapide et efficace à toutes les familles, des centres urbains aux communes rurales.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Livraison en 2-4 jours ouvrés garantie</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Couverture complète de l'Île-de-France</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Équipe formée et expérimentée</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Service client personnalisé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 cozy-shadow border-0 organic-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900">Zone de livraison</h4>
                    </div>
                    <p className="text-gray-700">Toute l'Île-de-France : Paris, Petite Couronne, Grande Couronne</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-100 cozy-shadow border-0 organic-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-green-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900">Délais de livraison</h4>
                    </div>
                    <p className="text-gray-700">2 à 4 jours ouvrés après validation de votre commande</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-red-100 cozy-shadow border-0 organic-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-orange-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900">Service client</h4>
                    </div>
                    <p className="text-gray-700">Équipe dédiée disponible pour vous conseiller et vous accompagner</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Qualité & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Certifications</span>
              </h2>
              <p className="text-xl text-gray-700">
                Nos engagements pour votre sécurité et votre satisfaction
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Nos Certifications</h3>
                  </div>
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <Card key={index} className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border gentle-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-br from-red-100 to-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center mr-4">
                          <commitment.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{commitment.title}</h4>
                          <p className="text-gray-600 text-sm">{commitment.description}</p>
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

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white cozy-shadow">
            <div className="max-w-3xl mx-auto">
              <Heart className="w-12 h-12 mx-auto mb-6 text-red-100" />
              <h2 className="text-4xl font-bold mb-6">
                Rejoignez notre famille de 15 000+ clients satisfaits
              </h2>
              <p className="text-xl mb-8 text-red-50">
                Découvrez pourquoi tant de familles nous font confiance pour leur approvisionnement en fioul
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+33184607893" 
                  className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appelez William : 01 84 60 78 93</span>
                </a>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 bg-transparent px-8 py-4 rounded-2xl transition-all duration-300">
                  Demandez votre devis gratuit
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2 text-red-100">
                <Users className="w-4 h-4" />
                <span className="text-sm">Service personnalisé • Livraison garantie • Prix transparents</span>
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
