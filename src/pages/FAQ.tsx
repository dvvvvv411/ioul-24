
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Livraison et Délais",
      questions: [
        {
          question: "Quels sont vos délais de livraison ?",
          answer: "Nous garantissons une livraison sous 24h partout en Île-de-France. Pour les commandes urgentes, nous proposons un service express avec livraison dans la demi-journée."
        },
        {
          question: "Dans quelles zones livrez-vous ?",
          answer: "Nous livrons dans toute l'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95)."
        },
        {
          question: "Comment suivre ma livraison ?",
          answer: "Vous recevez un SMS avec une fenêtre de livraison de 2h. Le chauffeur vous contacte 30 minutes avant son arrivée. Vous pouvez également suivre votre commande en temps réel."
        }
      ]
    },
    {
      title: "Commande et Paiement",
      questions: [
        {
          question: "Quels sont les moyens de paiement acceptés ?",
          answer: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), virement bancaire, chèque et espèces. Le paiement peut se faire à la commande ou à la livraison selon votre préférence."
        },
        {
          question: "Quelle est la quantité minimum de commande ?",
          answer: "La quantité minimum est de 500 litres. Pour les commandes inférieures, des frais de livraison supplémentaires peuvent s'appliquer."
        },
        {
          question: "Puis-je annuler ma commande ?",
          answer: "Vous pouvez annuler votre commande jusqu'à 2h avant la livraison programmée sans frais. Au-delà, des frais d'annulation peuvent s'appliquer."
        }
      ]
    },
    {
      title: "Qualité et Conformité",
      questions: [
        {
          question: "Quelle est la qualité de votre fioul ?",
          answer: "Notre fioul domestique respecte la norme NF EN 14214 et contient moins de 10 ppm de soufre. Il est testé régulièrement pour garantir sa conformité et sa qualité optimale."
        },
        {
          question: "Délivrez-vous des certificats de qualité ?",
          answer: "Oui, nous fournissons systématiquement un bon de livraison avec les caractéristiques du produit et pouvons délivrer un certificat d'analyse sur demande."
        },
        {
          question: "Le fioul est-il garanti ?",
          answer: "Notre fioul est garanti conforme aux normes en vigueur. En cas de problème de qualité avéré, nous procédons au remplacement gratuit et à la prise en charge des éventuels dommages."
        }
      ]
    },
    {
      title: "Réglementation et Sécurité",
      questions: [
        {
          question: "Avez-vous les autorisations nécessaires ?",
          answer: "Oui, nous possédons toutes les autorisations requises : agrément transport de matières dangereuses, certification ISO 9001:2015, et assurance responsabilité civile professionnelle."
        },
        {
          question: "Que faire en cas de fuite de fioul ?",
          answer: "En cas de fuite, contactez-nous immédiatement au +33 1 84 60 78 93. Nous intervenons en urgence 24h/24 pour sécuriser la zone et procéder au nettoyage si nécessaire."
        },
        {
          question: "Quelles sont les normes de stockage ?",
          answer: "Votre cuve doit être conforme à la réglementation en vigueur : double paroi ou bac de rétention, ventilation adequée, et contrôle d'étanchéité tous les 10 ans."
        }
      ]
    },
    {
      title: "Services et Maintenance",
      questions: [
        {
          question: "Proposez-vous l'entretien des chaudières ?",
          answer: "Oui, nous proposons un service complet de maintenance et entretien de chaudières fioul par nos techniciens qualifiés. Contactez-nous pour un devis personnalisé."
        },
        {
          question: "Effectuez-vous le nettoyage de cuves ?",
          answer: "Nous proposons un service professionnel de nettoyage et dégazage de cuves. Cette opération est recommandée tous les 10 ans ou lors d'un changement de combustible."
        },
        {
          question: "Avez-vous un service client dédié ?",
          answer: "Notre service client est disponible du lundi au vendredi de 8h à 18h et le samedi de 9h à 12h. Pour les urgences, nous sommes joignables 24h/24 au +33 1 84 60 78 93."
        }
      ]
    },
    {
      title: "Environnement et Transition Énergétique",
      questions: [
        {
          question: "Le fioul est-il respectueux de l'environnement ?",
          answer: "Notre fioul à très faible teneur en soufre (< 10 ppm) réduit significativement les émissions polluantes. Nous proposons également des conseils pour optimiser votre consommation."
        },
        {
          question: "Que faire pour remplacer ma chaudière fioul ?",
          answer: "Nous vous accompagnons dans votre projet de transition énergétique : audit énergétique, conseil sur les solutions alternatives, et mise en relation avec des partenaires qualifiés."
        },
        {
          question: "Recyclez-vous les équipements usagés ?",
          answer: "Nous participons au programme de recyclage des cuves et équipements de chauffage. Nos partenaires agréés assurent la dépollution et le recyclage dans le respect de l'environnement."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Questions Fréquentes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services de livraison de fioul
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <Card key={questionIndex} className="shadow-lg border-0">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemIndex)}
                            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33184607893" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center">
              Appelez-nous maintenant
            </a>
            <a href="/contact" className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default FAQ;
