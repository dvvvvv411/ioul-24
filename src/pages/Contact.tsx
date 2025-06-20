
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
            <Phone className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Nous sommes là pour vous</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Rapide</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une équipe familiale à votre écoute pour tous vos besoins en fioul
          </p>
        </div>
      </section>

      {/* Section 1: Contact Information & Quick Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">notre équipe</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Téléphone */}
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">01 84 60 78 93</p>
                  <p className="text-gray-600 text-sm flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Lundi-Vendredi 8h-18h
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-xl font-bold text-red-600 mb-2">info@fioul-24.fr</p>
                  <p className="text-gray-600 text-sm">Réponse sous 2h</p>
                </CardContent>
              </Card>

              {/* Horaires */}
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Horaires</h3>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p><strong>Lundi-Vendredi:</strong> 8h-18h</p>
                    <p><strong>Samedi:</strong> 9h-12h</p>
                    <p className="text-red-600 font-semibold"><strong>Urgences:</strong> 24h/24</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appel rapide */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 cozy-shadow border-0 organic-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un devis urgent ?</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Appelez-nous directement pour un traitement prioritaire de votre demande. 
                  Notre équipe familiale vous accompagne avec le sourire !
                </p>
                <a 
                  href="tel:+33184607893" 
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold text-lg gentle-hover"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Appel gratuit - 01 84 60 78 93
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default Contact;
