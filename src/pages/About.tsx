
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Shield, Leaf, Clock, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Qualité",
      description: "Nous garantissons un fioul de qualité supérieure, conforme aux normes européennes les plus strictes."
    },
    {
      icon: Clock,
      title: "Rapidité",
      description: "Livraison express sous 24h partout en Île-de-France pour répondre à vos besoins urgents."
    },
    {
      icon: Users,
      title: "Service client",
      description: "Une équipe dédiée à votre écoute 7j/7 pour vous accompagner dans tous vos projets."
    }
  ];

  const certifications = [
    "Certification ISO 9001:2015",
    "Agrément transport de matières dangereuses",
    "Certification environnementale ISO 14001",
    "Membre du SNPAA (Syndicat National des Pétroliers)",
    "Assurance responsabilité civile professionnelle"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">À propos de Fioul-24</h1>
            <p className="text-xl">
              Notre expertise depuis 1995 au service de votre confort thermique
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Notre Histoire
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">Fuel 2000 Transports Sàrl</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Depuis 1995, Fuel 2000 Transports s'est imposée comme un acteur majeur de la livraison de fioul domestique en Île-de-France. 
                  Fondée par William Boscher, notre entreprise familiale a su évoluer avec son temps tout en conservant ses valeurs fondamentales.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Avec plus de 25 ans d'expérience, nous avons développé une expertise unique dans le domaine du combustible domestique, 
                  nous permettant de servir plus de 10 000 clients satisfaits à travers la région parisienne.
                </p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">En chiffres :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Plus de 25 ans d'expérience</li>
                    <li>• 10 000+ clients satisfaits</li>
                    <li>• Livraisons dans toute l'Île-de-France</li>
                    <li>• Service disponible 7j/7</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Informations légales</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Raison sociale :</strong> Fuel 2000 Transports Sàrl</p>
                  <p><strong>SIREN :</strong> 500830567</p>
                  <p><strong>SIRET :</strong> 50083056700011</p>
                  <p><strong>N° TVA :</strong> FR66603090631</p>
                  <p><strong>Gérant :</strong> William Boscher</p>
                  <p><strong>Siège social :</strong> 23 rue de la Porte d'Aubervilliers, 75018 Paris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 text-center">
                <CardContent className="p-8">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Notre Équipe
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">William Boscher</h3>
                    <p className="text-red-600 font-semibold">Gérant</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Leadership et Excellence</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Sous la direction de William Boscher, Fuel 2000 Transports a construit sa réputation sur l'excellence du service 
                      et la satisfaction client. Son expertise technique et sa vision stratégique ont permis à l'entreprise de rester 
                      à la pointe de l'innovation dans le secteur du fioul domestique.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Notre équipe de professionnels qualifiés partage cette même passion pour l'excellence, garantissant à nos clients 
                      un service irréprochable et des conseils experts pour tous leurs besoins en combustible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Certifications & Qualité
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Nos Certifications</h3>
                  </div>
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Leaf className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Engagement Environnemental</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Fioul à faible teneur en soufre pour réduire les émissions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Camions aux normes Euro 6 pour un transport plus propre</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Programme de recyclage des cuves et équipements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Conseil en efficacité énergétique</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default About;
