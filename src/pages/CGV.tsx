
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";

const CGV = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Conditions Générales de Vente</h1>
          <p className="text-xl">Conditions applicables à la livraison de fioul domestique</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-8">
              
              {/* Préambule */}
              <div>
                <p className="text-gray-700 mb-6">
                  Les présentes conditions générales de vente s'appliquent à toutes les commandes 
                  de fioul domestique passées auprès de Fuel 2000 Transports Sàrl. 
                  Toute commande implique l'acceptation sans réserve des présentes conditions.
                </p>
              </div>

              {/* Article 1 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 1 - Objet et domaine d'application</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Les présentes conditions générales régissent exclusivement les ventes de fioul domestique 
                    et services associés réalisées par Fuel 2000 Transports Sàrl auprès de particuliers 
                    et professionnels en Île-de-France.
                  </p>
                  <p>
                    Toute condition contraire ne pourra être opposée sauf accord exceptionnel, 
                    exprès et écrit de notre part.
                  </p>
                </div>
              </div>

              {/* Article 2 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 2 - Commandes et confirmation</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>2.1 Passation de commande :</strong> Les commandes peuvent être passées par téléphone 
                    au +33 1 84 60 78 93 ou via notre site internet.
                  </p>
                  <p>
                    <strong>2.2 Confirmation :</strong> Toute commande fait l'objet d'une confirmation écrite 
                    (email ou SMS) précisant les quantités, prix et délais de livraison.
                  </p>
                  <p>
                    <strong>2.3 Minimum de commande :</strong> La quantité minimale de commande est fixée à 500 litres.
                  </p>
                </div>
              </div>

              {/* Article 3 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 3 - Prix et modalités de paiement</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>3.1 Prix :</strong> Les prix sont exprimés en euros TTC et peuvent varier 
                    selon les cours du marché. Le prix applicable est celui en vigueur au jour de la commande.
                  </p>
                  <p>
                    <strong>3.2 Modalités de paiement :</strong> Le règlement s'effectue à la livraison 
                    par chèque, espèces (dans la limite légale) ou virement bancaire.
                  </p>
                  <p>
                    <strong>3.3 TVA :</strong> La TVA applicable est de 20% pour les livraisons de fioul domestique.
                  </p>
                </div>
              </div>

              {/* Article 4 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 4 - Livraison et transfert de risques</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>4.1 Zone de livraison :</strong> Nos livraisons s'effectuent exclusivement 
                    en Île-de-France dans un rayon de 50 km autour de Paris.
                  </p>
                  <p>
                    <strong>4.2 Délais :</strong> Les livraisons sont effectuées sous 24 à 48h ouvrées, 
                    sauf demande de livraison express (supplément applicable).
                  </p>
                  <p>
                    <strong>4.3 Transfert de risques :</strong> Le transfert de propriété et des risques 
                    s'opère au moment du dépotage dans la cuve du client.
                  </p>
                  <p>
                    <strong>4.4 Accès :</strong> Le client doit s'assurer que l'accès à la cuve soit praticable 
                    pour notre véhicule de livraison (maximum 3,5 tonnes).
                  </p>
                </div>
              </div>

              {/* Article 5 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 5 - Qualité du fioul</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>5.1 Conformité :</strong> Le fioul livré est conforme aux normes européennes 
                    EN 14214 et répond aux spécifications techniques en vigueur.
                  </p>
                  <p>
                    <strong>5.2 Contrôle qualité :</strong> Chaque livraison fait l'objet d'un contrôle qualité. 
                    Les caractéristiques du produit sont mentionnées sur le bon de livraison.
                  </p>
                  <p>
                    <strong>5.3 Réclamations :</strong> Toute réclamation relative à la qualité doit être 
                    formulée dans les 48h suivant la livraison.
                  </p>
                </div>
              </div>

              {/* Article 6 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 6 - Responsabilité et garanties</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>6.1 Responsabilité :</strong> Notre responsabilité est limitée au remplacement 
                    du produit défectueux ou au remboursement de la quantité non conforme.
                  </p>
                  <p>
                    <strong>6.2 Assurance :</strong> Nous disposons d'une assurance responsabilité civile 
                    professionnelle couvrant nos activités de transport et livraison.
                  </p>
                  <p>
                    <strong>6.3 Limitation :</strong> Notre responsabilité ne saurait être engagée en cas 
                    de dommages indirects ou de perte d'exploitation.
                  </p>
                </div>
              </div>

              {/* Article 7 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 7 - Force majeure</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Aucune partie ne sera tenue responsable de tout retard ou manquement dans l'exécution 
                    de ses obligations résultant d'événements de force majeure tels que définis par 
                    la jurisprudence française.
                  </p>
                  <p>
                    Sont notamment considérés comme cas de force majeure : grèves, intempéries, 
                    restrictions de circulation, rupture d'approvisionnement des raffineries.
                  </p>
                </div>
              </div>

              {/* Article 8 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Article 8 - Droit applicable et juridiction</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>8.1 Droit applicable :</strong> Les présentes conditions sont soumises au droit français.
                  </p>
                  <p>
                    <strong>8.2 Juridiction :</strong> En cas de litige, et après recherche d'une solution amiable, 
                    les tribunaux de Paris seront seuls compétents.
                  </p>
                  <p>
                    <strong>8.3 Médiation :</strong> Conformément à la réglementation, le consommateur peut 
                    recourir gratuitement au service de médiation de la consommation.
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Conditions générales de vente en vigueur au 1er janvier 2024.
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

export default CGV;
