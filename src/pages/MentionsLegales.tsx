
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
          <p className="text-xl">Informations légales et éditorial</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-8">
              
              {/* Éditeur du site */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Raison sociale :</strong> Fuel 2000 Transports Sàrl</p>
                  <p><strong>Siège social :</strong> 23 rue de la Porte d'Aubervilliers, 75018 Paris, France</p>
                  <p><strong>SIREN :</strong> 500830567</p>
                  <p><strong>SIRET :</strong> 50083056700011</p>
                  <p><strong>N° TVA intracommunautaire :</strong> FR66603090631</p>
                  <p><strong>Gérant :</strong> William Boscher</p>
                  <p><strong>Téléphone :</strong> +33 1 84 60 78 93</p>
                  <p><strong>Email :</strong> contact@fioul-24.fr</p>
                </div>
              </div>

              {/* Directeur de publication */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de publication</h2>
                <p className="text-gray-700">
                  <strong>Responsable de la publication :</strong> William Boscher, gérant
                </p>
              </div>

              {/* Hébergement */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Hébergeur :</strong> Lovable</p>
                  <p><strong>Site web :</strong> lovable.dev</p>
                </div>
              </div>

              {/* Activité */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Activité de l'entreprise</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Secteur d'activité :</strong> Commerce de combustibles et carburants</p>
                  <p><strong>Code APE :</strong> 4671Z - Commerce de gros de combustibles et de produits annexes</p>
                  <p><strong>Activité principale :</strong> Livraison de fioul domestique en Île-de-France</p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Le contenu du site internet fioul-24.fr (textes, images, logos, graphismes, etc.) 
                    est protégé par le droit d'auteur et appartient à Fuel 2000 Transports Sàrl ou 
                    à ses partenaires.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout 
                    ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                    est interdite, sauf autorisation écrite préalable.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser 
                    le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                  </p>
                  <p>
                    Pour plus d'informations sur l'utilisation des cookies, consultez notre 
                    <a href="/politique-confidentialite" className="text-red-600 hover:underline"> politique de confidentialité</a>.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    Pour toute question concernant le site ou ces mentions légales, 
                    vous pouvez nous contacter :
                  </p>
                  <p><strong>Email :</strong> contact@fioul-24.fr</p>
                  <p><strong>Téléphone :</strong> +33 1 84 60 78 93</p>
                  <p><strong>Adresse :</strong> 23 rue de la Porte d'Aubervilliers, 75018 Paris</p>
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

export default MentionsLegales;
