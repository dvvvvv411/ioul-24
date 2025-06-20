
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQRapides = () => {
  const faqs = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Nous livrons sous 2 à 4 jours ouvrés dans toute l'Île-de-France. Pour les commandes urgentes, contactez-nous directement."
    },
    {
      question: "À partir de quelle quantité la livraison est-elle gratuite ?",
      answer: "La livraison est offerte à partir de 3000 litres. En dessous, des frais de livraison de 39€ s'appliquent."
    },
    {
      question: "Dans quelles zones livrez-vous ?",
      answer: "Nous couvrons toute l'Île-de-France : Paris (75) et tous les départements limitrophes (77, 78, 91, 92, 93, 94, 95)."
    },
    {
      question: "Quelle est la différence entre fioul standard et premium ?",
      answer: "Le fioul premium contient des additifs anti-corrosion qui protègent votre installation et optimisent le rendement de votre chaudière."
    },
    {
      question: "Comment puis-je payer ma commande ?",
      answer: "Nous acceptons les virements bancaires, chèques et espèces à la livraison. Un devis détaillé vous sera fourni avant toute commande."
    },
    {
      question: "Proposez-vous un service d'urgence ?",
      answer: "Oui, pour les dépannages urgents, appelez-nous au 01 84 60 78 93. Nous ferons notre maximum pour vous livrer dans les plus brefs délais."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream to-orange-25">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              FAQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Rapides</span>
            </h2>
            <p className="text-lg text-gray-600">Réponses aux questions les plus fréquentes</p>
          </div>

          <div className="bg-white rounded-3xl cozy-shadow p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/faq" 
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
            >
              Voir toutes les questions fréquentes
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQRapides;
