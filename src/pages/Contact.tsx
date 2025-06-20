
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <Header />
      
      {/* Hero Section - Increased size */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-8">
            <Phone className="w-5 h-5 text-red-500 fill-current" />
            <span className="text-base font-medium text-gray-700">Nous sommes là pour vous</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Rapide</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une équipe familiale à votre écoute pour tous vos besoins en fioul
          </p>
        </div>
      </section>

      {/* Section 1: Contact Information & Quick Contact - Increased size */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">notre équipe</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-10 mb-16">
              {/* Téléphone */}
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-10 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Téléphone</h3>
                  <p className="text-3xl font-bold text-red-600 mb-3">01 84 60 78 93</p>
                  <p className="text-gray-600 text-base flex items-center justify-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Lundi-Vendredi 8h-18h
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-10 text-center">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
                  <p className="text-2xl font-bold text-red-600 mb-3">info@fioul-24.fr</p>
                  <p className="text-gray-600 text-base">Réponse sous 2h</p>
                </CardContent>
              </Card>

              {/* Horaires */}
              <Card className="bg-white/90 backdrop-blur-sm cozy-shadow border-0 organic-border">
                <CardContent className="p-10 text-center">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Horaires</h3>
                  <div className="text-gray-700 text-base space-y-2">
                    <p><strong>Lundi-Vendredi:</strong> 8h-18h</p>
                    <p><strong>Samedi:</strong> 9h-12h</p>
                    <p className="text-red-600 font-semibold"><strong>Urgences:</strong> 24h/24</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appel rapide */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 cozy-shadow border-0 organic-border">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Besoin d'un devis urgent ?</h3>
                <p className="text-gray-700 text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  Appelez-nous directement pour un traitement prioritaire de votre demande. 
                  Notre équipe familiale vous accompagne avec le sourire !
                </p>
                <a 
                  href="tel:+33184607893" 
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold text-xl gentle-hover"
                >
                  <Phone className="w-6 h-6 mr-3" />
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
