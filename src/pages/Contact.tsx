
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 84 60 78 93",
      subtitle: "Lundi-Vendredi 8h-18h"
    },
    {
      icon: AlertCircle,
      title: "Urgences 24h/24",
      content: "+33 1 84 60 78 93",
      subtitle: "Service d'urgence disponible"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fioul-24.fr",
      subtitle: "Réponse sous 2h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "23 rue de la Porte d'Aubervilliers",
      subtitle: "75018 Paris, France"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos Coordonnées
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg text-gray-800 font-semibold">
                            {info.content}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Opening Hours */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Horaires d'ouverture</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Lundi - Vendredi :</strong> 8h00 - 18h00</p>
                        <p><strong>Samedi :</strong> 9h00 - 12h00</p>
                        <p><strong>Dimanche :</strong> Fermé</p>
                        <p className="text-red-600 font-semibold mt-3">
                          <strong>Urgences :</strong> 24h/24 - 7j/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Envoyez-nous un message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" type="text" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" type="text" className="mt-1" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" className="mt-1" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input id="subject" type="text" className="mt-1" required />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        className="mt-1 min-h-[120px]" 
                        placeholder="Décrivez votre besoin ou votre question..."
                        required 
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        * Champs obligatoires. Vos données personnelles sont protégées et ne seront jamais communiquées à des tiers.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                      size="lg"
                    >
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Notre Localisation
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-0">
                {/* Placeholder for map - in a real implementation, you would integrate with a map service */}
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      23 rue de la Porte d'Aubervilliers
                    </h3>
                    <p className="text-gray-600">75018 Paris, France</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Directions */}
            <Card className="shadow-lg border-0 mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment nous trouver</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">En métro :</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ligne 7 : Porte d'Aubervilliers (5 min à pied)</li>
                      <li>• Ligne 12 : Porte de la Chapelle (10 min à pied)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">En voiture :</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Périphérique sortie Porte d'Aubervilliers</li>
                      <li>• Parking disponible sur place</li>
                    </ul>
                  </div>
                </div>
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
