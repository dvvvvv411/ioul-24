
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Phone, FileText, Droplets, Wrench, Euro } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Livraison de fioul domestique",
      description: "Livraison rapide et fiable de fioul domestique de qualité supérieure, conforme aux normes européennes. Service disponible 7j/7.",
      features: ["Livraison sous 24h", "Fioul premium disponible", "Flexible quantities", "Prix compétitifs"],
      price: "À partir de 0.95€/L"
    },
    {
      icon: Phone,
      title: "Dépannage d'urgence 24h/24",
      description: "Service d'urgence disponible 24h/24 et 7j/7 pour tous vos besoins en fioul. Intervention rapide garantie.",
      features: ["Disponibilité 24h/24", "Intervention rapide", "Équipe expérimentée", "Service prioritaire"],
      price: "À partir de 150€"
    },
    {
      icon: FileText,
      title: "Contrats d'approvisionnement",
      description: "Contrats personnalisés pour assurer votre approvisionnement régulier en fioul avec des tarifs préférentiels.",
      features: ["Tarifs préférentiels", "Livraison programmée", "Facturation simplifiée", "Suivi personnalisé"],
      price: "Devis sur mesure"
    },
    {
      icon: Droplets,
      title: "Nettoyage de cuves",
      description: "Service professionnel de nettoyage et maintenance de vos cuves à fioul pour garantir la qualité de votre combustible.",
      features: ["Nettoyage complet", "Inspection technique", "Certificat de conformité", "Maintenance préventive"],
      price: "À partir de 300€"
    },
    {
      icon: Wrench,
      title: "Maintenance chauffage",
      description: "Service complet de maintenance et réparation de vos systèmes de chauffage au fioul par nos techniciens qualifiés.",
      features: ["Techniciens certifiés", "Entretien préventif", "Réparations rapides", "Garantie pièces"],
      price: "À partir de 120€"
    },
    {
      icon: Euro,
      title: "Conseils et devis gratuits",
      description: "Nos experts vous conseillent gratuitement sur vos besoins en fioul et vous proposent des solutions adaptées.",
      features: ["Conseil personnalisé", "Devis détaillé", "Étude de consommation", "Optimisation des coûts"],
      price: "Gratuit"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour tous vos besoins en fioul domestique en Île-de-France
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
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
                        <Button className="bg-red-600 hover:bg-red-700">
                          Demander un devis
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

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour discuter de vos besoins spécifiques et obtenir un devis sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Appeler maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default Services;
