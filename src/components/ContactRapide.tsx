
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactRapide = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demande de contact:", formData);
    alert("Votre demande a été envoyée ! Nous vous recontactons sous 2h.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Rapide</span>
          </h2>
          <p className="text-lg text-gray-600">Nous sommes là pour vous accompagner</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-white cozy-shadow border-0 organic-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Téléphone</h3>
                    <p className="text-lg font-medium text-red-600 mb-1">01 84 60 78 93</p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Du lundi au vendredi 8h-18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white cozy-shadow border-0 organic-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-lg font-medium text-red-600 mb-1">info@fioul-24.fr</p>
                    <p className="text-gray-600">Réponse sous 2h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Besoin d'un devis urgent ?</h3>
              <p className="text-gray-700 mb-4">Appelez-nous directement pour un traitement prioritaire de votre demande.</p>
              <a href="tel:+33184607893" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Appel gratuit
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="bg-white cozy-shadow border-0 organic-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demandez votre devis gratuit</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Nom complet</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2 border-gray-300 focus:border-red-400 focus:ring-red-400/20 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-2 border-gray-300 focus:border-red-400 focus:ring-red-400/20 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Décrivez vos besoins (quantité, adresse de livraison...)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-2 w-full h-24 px-3 py-2 border border-gray-300 rounded-xl focus:border-red-400 focus:ring-red-400/20 focus:outline-none resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-3 rounded-xl font-semibold text-lg gentle-hover"
                >
                  Demandez votre devis gratuit
                </Button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                Réponse garantie sous 2h pendant les heures ouvrables
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactRapide;
