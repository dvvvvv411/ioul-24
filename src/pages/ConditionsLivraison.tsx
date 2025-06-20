
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Truck, AlertTriangle } from "lucide-react";

const ConditionsLivraison = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Conditions de Livraison</h1>
          <p className="text-xl">Tout ce que vous devez savoir sur nos livraisons de fioul</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Zone de livraison */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-8 h-8 text-red-600 mt-1" />
                <h2 className="text-2xl font-bold text-gray-900">Zone de livraison</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong>Nos livraisons couvrent toute l'Île-de-France :</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• Paris (75)</li>
                    <li>• Seine-et-Marne (77)</li>
                    <li>• Yvelines (78)</li>
                    <li>• Essonne (91)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Hauts-de-Seine (92)</li>
                    <li>• Seine-Saint-Denis (93)</li>
                    <li>• Val-de-Marne (94)</li>
                    <li>• Val-d'Oise (95)</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <strong>Rayon de livraison :</strong> 50 km autour de Paris. 
                  Pour les zones plus éloignées, un supplément peut être appliqué selon la distance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Délais de livraison */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Clock className="w-8 h-8 text-red-600 mt-1" />
                <h2 className="text-2xl font-bold text-gray-900">Délais de livraison</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-red-600 text-lg mb-2">Livraison Standard</h3>
                    <p className="text-2xl font-bold mb-2">24-48h</p>
                    <p className="text-sm">Jours ouvrés</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <h3 className="font-bold text-red-600 text-lg mb-2">Livraison Express</h3>
                    <p className="text-2xl font-bold mb-2">24h</p>
                    <p className="text-sm">Supplément +30€</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h3 className="font-bold text-red-600 text-lg mb-2">Urgence</h3>
                    <p className="text-2xl font-bold mb-2">J+1</p>
                    <p className="text-sm">Sur demande</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2">Horaires de livraison :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Lundi à Vendredi : 8h00 - 18h00</li>
                    <li>• Samedi : 9h00 - 17h00</li>
                    <li>• Urgences 7j/7 : nous consulter</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modalités de réception */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Truck className="w-8 h-8 text-red-600 mt-1" />
                <h2 className="text-2xl font-bold text-gray-900">Modalités de réception</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-bold mb-3">Avant la livraison :</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Vous recevez un SMS de confirmation avec créneau de livraison</li>
                    <li>Notre chauffeur vous appelle 30 minutes avant son arrivée</li>
                    <li>Assurez-vous que l'accès à la cuve soit dégagé</li>
                    <li>Préparez les moyens de paiement convenus</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">Pendant la livraison :</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Présence obligatoire du client ou de son représentant</li>
                    <li>Vérification de la quantité livrée ensemble</li>
                    <li>Signature du bon de livraison après dépotage</li>
                    <li>Règlement selon les modalités convenues</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">Documents remis :</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Bon de livraison signé (original client)</li>
                    <li>Facture (si règlement immédiat)</li>
                    <li>Certificat de qualité du produit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conditions d'accès */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mt-1" />
                <h2 className="text-2xl font-bold text-gray-900">Conditions d'accès au site</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-green-600">✓ Accès requis :</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Largeur minimale : 3 mètres</li>
                      <li>• Hauteur libre : 3,5 mètres</li>
                      <li>• Sol porteur pour 12 tonnes</li>
                      <li>• Distance max cuve : 30 mètres</li>
                      <li>• Pas de marche arrière > 50m</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-red-600">✗ Accès impossible :</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Voies privées fermées</li>
                      <li>• Portails < 3m de large</li>
                      <li>• Terrain non stabilisé</li>
                      <li>• Pente > 15%</li>
                      <li>• Obstacles aériens</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-2">⚠️ Important :</h4>
                  <p className="text-sm text-orange-700">
                    En cas d'impossibilité d'accès non signalée, des frais de déplacement de 80€ 
                    seront facturés. Une visite préalable peut être organisée pour les sites difficiles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsabilités */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsabilités du client</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-bold mb-3">Avant la livraison :</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>S'assurer de la capacité suffisante de la cuve</li>
                    <li>Vérifier l'état et la conformité de l'installation</li>
                    <li>Dégager l'accès à la cuve (véhicules, objets)</li>
                    <li>Informer de toute difficulté d'accès</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">Pendant la livraison :</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Être présent ou désigner un représentant majeur</li>
                    <li>Indiquer précisément l'emplacement de la cuve</li>
                    <li>Surveiller le bon déroulement de la livraison</li>
                    <li>Signaler immédiatement tout problème</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">Après la livraison :</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Conserver les documents de livraison</li>
                    <li>Effectuer le règlement selon les modalités prévues</li>
                    <li>Signaler toute anomalie dans les 48h</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg mt-6">
                  <h4 className="font-bold text-red-800 mb-2">Exclusions de responsabilité :</h4>
                  <p className="text-sm text-red-700">
                    Fioul-24 ne saurait être tenu responsable des dommages résultant d'une installation 
                    défectueuse, d'un mauvais état de la cuve, ou d'instructions erronées du client.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default ConditionsLivraison;
