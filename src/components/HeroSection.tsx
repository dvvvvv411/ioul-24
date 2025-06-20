
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Heart, Shield, Phone, Users, Star, AlertCircle } from "lucide-react";

const fiouelConfig = {
  shopId: "acefaf14-6b4c-41bd-b172-133b27b9983f",
  backendUrl: "https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1",
  checkoutUrl: "https://checkout.fioul-24.fr/checkout",
  products: {
    standard: {
      id: "standard_heizoel",
      name: "Fioul Confort",
      pricePerLiter: 0.70,
      description: "Pour votre confort quotidien"
    },
    premium: {
      id: "premium_heizoel", 
      name: "Fioul Premium",
      pricePerLiter: 0.73,
      description: "Le meilleur pour votre foyer"
    }
  },
  delivery: {
    freeDeliveryThreshold: 3000,
    deliveryFee: 39
  },
  limits: {
    minLiters: 1000,
    maxLiters: 20000
  }
};

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Animation complete, restart after 7 seconds
      const restartTimer = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 7000);
      return () => clearTimeout(restartTimer);
    }
  }, [currentIndex, text]);

  return (
    <span className="block text-red-600">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  const [postalCode, setPostalCode] = useState("");
  const [liters, setLiters] = useState(1000);
  const [fuelType, setFuelType] = useState("standard");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Validate postal code
    if (!postalCode.trim()) {
      newErrors.postalCode = "Le code postal est requis";
    } else if (!/^\d{5}$/.test(postalCode.trim())) {
      newErrors.postalCode = "Code postal invalide (5 chiffres requis)";
    }

    // Validate liters
    if (liters < fiouelConfig.limits.minLiters) {
      newErrors.liters = `Minimum ${fiouelConfig.limits.minLiters}L requis`;
    } else if (liters > fiouelConfig.limits.maxLiters) {
      newErrors.liters = `Maximum ${fiouelConfig.limits.maxLiters}L autorisé`;
    }

    // Validate calculated price
    if (calculatedPrice <= 0) {
      newErrors.price = "Veuillez calculer le prix avant de commander";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePrice = () => {
    const selectedProduct = fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products];
    const basePrice = liters * selectedProduct.pricePerLiter;
    const deliveryFee = liters >= fiouelConfig.delivery.freeDeliveryThreshold ? 0 : fiouelConfig.delivery.deliveryFee;
    const totalPrice = basePrice + deliveryFee;
    setCalculatedPrice(totalPrice);
    
    // Clear price error if it exists
    if (errors.price) {
      setErrors(prev => ({ ...prev, price: "" }));
    }
  };

  const handleOrder = async () => {
    console.log("Starting order process...");
    
    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedProduct = fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products];
      const deliveryFee = liters >= fiouelConfig.delivery.freeDeliveryThreshold ? 0 : fiouelConfig.delivery.deliveryFee;

      // Transform request body to match backend expectations
      const orderData = {
        shop_id: fiouelConfig.shopId,
        product: selectedProduct.id,
        liters: liters,
        price_per_liter: selectedProduct.pricePerLiter,
        delivery_fee: deliveryFee,
        total_amount: calculatedPrice
      };

      console.log("Order data:", orderData);

      // Create order token
      const response = await fetch(`${fiouelConfig.backendUrl}/create-order-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Backend response:", data);

      // Expect token from backend, not URL
      if (data.token) {
        // Construct checkout URL in frontend
        const checkoutUrl = `${fiouelConfig.checkoutUrl}?token=${data.token}`;
        console.log("Redirecting to checkout:", checkoutUrl);
        
        // Redirect to checkout page in new tab
        window.open(checkoutUrl, '_blank');
      } else {
        throw new Error('No token received from backend');
      }

    } catch (error) {
      console.error('Order submission failed:', error);
      alert('Une erreur est survenue lors de la création de votre commande. Veuillez réessayer ou nous contacter.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      {/* Warm background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Warm, welcoming content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Entreprise familiale depuis 2009</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Votre foyer mérite le
                <TypingAnimation text=" meilleur fioul" />
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Commandez en toute confiance • Livraison soignée • Service personnalisé
              </p>
            </div>

            {/* Warm features with family touch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl gentle-hover">
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-2xl">
                  <Home className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Livraison 2-4 jours</h3>
                  <p className="text-sm text-gray-600">Livraison soignée partout en Île-de-France</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl gentle-hover">
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-2xl">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service personnalisé</h3>
                  <p className="text-sm text-gray-600">Nos experts vous conseillent</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl gentle-hover">
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-2xl">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Satisfaction garantie</h3>
                  <p className="text-sm text-gray-600">Ou remboursé, promis</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl gentle-hover">
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-2xl">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Équipe familiale</h3>
                  <p className="text-sm text-gray-600">À votre service depuis 15 ans</p>
                </div>
              </div>
            </div>

            {/* Warm CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33184607893" className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                <span>Appelez William directement</span>
              </a>
              <button className="inline-flex items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Besoin d'aide? Parlons-en!
              </button>
            </div>
          </div>

          {/* Right side - Improved Price Calculator with better contrast */}
          <Card className="cozy-shadow border-0 bg-white backdrop-blur-sm organic-border price-calculator-section">
            <CardHeader className="warm-gradient text-white organic-border rounded-b-none">
              <CardTitle className="text-2xl text-center font-medium">Découvrez nos prix</CardTitle>
              <p className="text-center text-red-50 font-light">Devis personnalisé en quelques clics</p>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* Postal Code */}
              <div className="space-y-3">
                <Label htmlFor="postal" className="text-gray-700 font-medium flex items-center space-x-2">
                  <Home className="w-4 h-4 text-red-600" />
                  <span>Votre code postal</span>
                </Label>
                <Input
                  id="postal"
                  type="text"
                  placeholder="Ex: 75001"
                  value={postalCode}
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                    if (errors.postalCode) {
                      setErrors(prev => ({ ...prev, postalCode: "" }));
                    }
                  }}
                  className={`border-gray-300 focus:border-red-400 focus:ring-red-400/20 rounded-xl bg-gray-50 ${errors.postalCode ? 'border-red-500' : ''}`}
                />
                {errors.postalCode && (
                  <div className="flex items-center space-x-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.postalCode}</span>
                  </div>
                )}
              </div>

              {/* Liters */}
              <div className="space-y-3">
                <Label htmlFor="liters" className="text-gray-700 font-medium">
                  Quantité souhaitée ({fiouelConfig.limits.minLiters}-{fiouelConfig.limits.maxLiters}L)
                </Label>
                <Input
                  id="liters"
                  type="number"
                  min={fiouelConfig.limits.minLiters}
                  max={fiouelConfig.limits.maxLiters}
                  value={liters}
                  onChange={(e) => {
                    setLiters(Number(e.target.value));
                    if (errors.liters) {
                      setErrors(prev => ({ ...prev, liters: "" }));
                    }
                  }}
                  className={`border-gray-300 focus:border-red-400 focus:ring-red-400/20 rounded-xl bg-gray-50 ${errors.liters ? 'border-red-500' : ''}`}
                />
                {errors.liters && (
                  <div className="flex items-center space-x-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.liters}</span>
                  </div>
                )}
              </div>

              {/* Fuel Type - Improved contrast */}
              <div className="space-y-4">
                <Label className="text-gray-700 font-medium">Choisissez votre fioul</Label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="radio"
                      id="standard"
                      name="fuelType"
                      value="standard"
                      checked={fuelType === "standard"}
                      onChange={(e) => setFuelType(e.target.value)}
                      className="peer hidden"
                    />
                    <label htmlFor="standard" className="flex items-center space-x-4 p-4 border-2 rounded-xl cursor-pointer transition-all peer-checked:border-red-400 peer-checked:bg-red-50 hover:bg-gray-50 border-gray-200 bg-gray-50">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400 peer-checked:border-red-500 peer-checked:bg-red-500 relative">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {fiouelConfig.products.standard.name} - {fiouelConfig.products.standard.pricePerLiter}€/L
                        </div>
                        <p className="text-sm text-gray-600">{fiouelConfig.products.standard.description}</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="radio"
                      id="premium"
                      name="fuelType"
                      value="premium"
                      checked={fuelType === "premium"}
                      onChange={(e) => setFuelType(e.target.value)}
                      className="peer hidden"
                    />
                    <label htmlFor="premium" className="flex items-center space-x-4 p-4 border-2 rounded-xl cursor-pointer transition-all peer-checked:border-red-400 peer-checked:bg-red-50 hover:bg-gray-50 border-gray-200 bg-gray-50">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400 peer-checked:border-red-500 peer-checked:bg-red-500 relative">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {fiouelConfig.products.premium.name} - {fiouelConfig.products.premium.pricePerLiter}€/L
                        </div>
                        <p className="text-sm text-gray-600">{fiouelConfig.products.premium.description}</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculatePrice}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-xl font-medium transition-all duration-300 gentle-hover"
              >
                Calculer mon devis personnalisé
              </Button>

              {/* Price validation error */}
              {errors.price && (
                <div className="flex items-center space-x-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.price}</span>
                </div>
              )}

              {/* Price Display - Fixed text contrast */}
              {calculatedPrice > 0 && (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 space-y-3">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Votre devis personnalisé</h3>
                    <p className="text-sm text-gray-800">Aucun frais caché, promis</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">Prix du fioul:</span>
                    <span className="font-semibold text-gray-900">{(liters * fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products].pricePerLiter).toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">Livraison:</span>
                    <span className="font-semibold">
                      {liters >= fiouelConfig.delivery.freeDeliveryThreshold ? (
                        <span className="text-green-700 font-bold">Offerte!</span>
                      ) : (
                        <span className="text-gray-900">{fiouelConfig.delivery.deliveryFee}€</span>
                      )}
                    </span>
                  </div>
                  <hr className="border-orange-300" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span className="text-gray-900">Total:</span>
                    <span className="text-red-700 text-xl">{calculatedPrice.toFixed(2)}€</span>
                  </div>
                  
                  {liters < fiouelConfig.delivery.freeDeliveryThreshold && (
                    <p className="text-sm text-orange-800 font-medium text-center bg-orange-100 p-3 rounded-lg border border-orange-300">
                      Livraison offerte à partir de {fiouelConfig.delivery.freeDeliveryThreshold}L
                    </p>
                  )}
                </div>
              )}

              {/* Order Button - Warm and inviting */}
              {calculatedPrice > 0 && (
                <Button 
                  onClick={handleOrder}
                  disabled={isSubmitting}
                  className="w-full warm-gradient hover:shadow-lg text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Préparation de votre commande..." : "Commandez maintenant"}
                </Button>
              )}

              {/* Trust message */}
              <div className="text-center mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <Heart className="inline w-4 h-4 text-red-500 mr-1" />
                  Plus de 10 000 familles nous font confiance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
