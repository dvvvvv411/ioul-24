
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ShoppingCart, Clock } from 'lucide-react';

const StickyOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex-1 border-red-600 text-red-600 hover:bg-red-50"
          >
            <Phone className="w-5 h-5 mr-2" />
            Appeler
          </Button>
          <Button 
            size="lg" 
            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Commander
          </Button>
        </div>
        <div className="flex items-center justify-center mt-2 text-xs text-orange-600">
          <Clock className="w-3 h-3 mr-1" />
          Livraison demain si commandé avant 15h
        </div>
      </div>
    </div>
  );
};

export default StickyOrderButton;
