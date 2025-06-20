
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-xl">Protection de vos données personnelles - Conforme RGPD</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-8">
              
              {/* Introduction */}
              <div>
                <p className="text-gray-700 mb-6">
                  Fuel 2000 Transports Sàrl s'engage à protéger la confidentialité de vos données personnelles 
                  conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                  "Informatique et Libertés" modifiée.
                </p>
              </div>

              {/* Responsable du traitement */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Responsable :</strong> Fuel 2000 Transports Sàrl</p>
                  <p><strong>Représentant légal :</strong> William Boscher, Gérant</p>
                  <p><strong>Adresse :</strong> 23 rue de la Porte d'Aubervilliers, 75018 Paris</p>
                  <p><strong>Contact DPO :</strong> info@fioul-24.fr</p>
                </div>
              </div>

              {/* Données collectées */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Données personnelles collectées</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>2.1 Données de commande :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nom, prénom</li>
                    <li>Adresse de livraison</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse email</li>
                    <li>Informations de paiement</li>
                  </ul>
                  
                  <p><strong>2.2 Données de navigation :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                  </ul>
                </div>
              </div>

              {/* Finalités */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Vos données personnelles sont traitées pour :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Gérer vos commandes et livraisons</li>
                    <li>Assurer le service client</li>
                    <li>Gérer la facturation et les paiements</li>
                    <li>Respecter nos obligations légales</li>
                    <li>Améliorer nos services (avec votre consentement)</li>
                    <li>Vous informer de nos offres (avec votre consentement)</li>
                  </ul>
                </div>
              </div>

              {/* Base légale */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Le traitement de vos données repose sur :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Exécution du contrat :</strong> traitement de votre commande</li>
                    <li><strong>Obligation légale :</strong> facturation, comptabilité</li>
                    <li><strong>Intérêt légitime :</strong> amélioration de nos services</li>
                    <li><strong>Consentement :</strong> communications marketing</li>
                  </ul>
                </div>
              </div>

              {/* Conservation */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Durée de conservation</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Vos données sont conservées pendant :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Données de commande :</strong> 10 ans (obligations comptables)</li>
                    <li><strong>Données client :</strong> 3 ans après la dernière commande</li>
                    <li><strong>Données de prospection :</strong> 3 ans après le dernier contact</li>
                    <li><strong>Cookies :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </div>

              {/* Destinataires */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Vos données peuvent être transmises à :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Notre équipe interne (livraison, facturation)</li>
                    <li>Prestataires de paiement sécurisé</li>
                    <li>Comptable externe (obligations légales)</li>
                    <li>Autorités compétentes (sur demande légale)</li>
                  </ul>
                  <p>Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.</p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Utilisation des cookies</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>7.1 Types de cookies utilisés :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Cookies essentiels :</strong> fonctionnement du site</li>
                    <li><strong>Cookies analytiques :</strong> mesure d'audience</li>
                    <li><strong>Cookies fonctionnels :</strong> préférences utilisateur</li>
                  </ul>
                  
                  <p><strong>7.2 Gestion des cookies :</strong></p>
                  <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté 
                  avant leur dépôt. Cette configuration peut limiter certaines fonctionnalités du site.</p>
                </div>
              </div>

              {/* Droits */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Droit d'accès :</strong> connaître les données vous concernant</li>
                    <li><strong>Droit de rectification :</strong> corriger vos données</li>
                    <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                    <li><strong>Droit à la limitation :</strong> limiter le traitement</li>
                    <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                    <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
                  </ul>
                  
                  <p className="mt-4">
                    <strong>Pour exercer vos droits :</strong> contactez-nous à info@fioul-24.fr 
                    en précisant votre demande et en joignant une copie de votre pièce d'identité.
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. Sécurité des données</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Nous mettons en œuvre des mesures de sécurité appropriées :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Chiffrement SSL des données transmises</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Sauvegardes sécurisées régulières</li>
                    <li>Formation du personnel à la protection des données</li>
                  </ul>
                </div>
              </div>

              {/* Réclamations */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">10. Réclamations</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Si vous estimez que le traitement de vos données personnelles constitue une violation 
                    du RGPD, vous pouvez introduire une réclamation auprès de la CNIL :
                  </p>
                  <p>
                    <strong>CNIL :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                    <strong>Téléphone :</strong> 01 53 73 22 22<br />
                    <strong>Site web :</strong> www.cnil.fr
                  </p>
                </div>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">11. Modifications</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Cette politique de confidentialité peut être modifiée à tout moment. 
                    La version en vigueur est celle présente sur notre site internet.
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Dernière mise à jour : 1er janvier 2024
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default PolitiqueConfidentialite;
