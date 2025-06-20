
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Heart, Shield, Phone, Users, Star } from "lucide-react";

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

const HeroSection = () => {
  const [postalCode, setPostalCode] = useState("");
  const [liters, setLiters] = useState(1000);
  const [fuelType, setFuelType] = useState("standard");
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    const selectedProduct = fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products];
    const basePrice = liters * selectedProduct.pricePerLiter;
    const deliveryFee = liters >= fiouelConfig.delivery.freeDeliveryThreshold ? 0 : fiouelConfig.delivery.deliveryFee;
    const totalPrice = basePrice + deliveryFee;
    setCalculatedPrice(totalPrice);
  };

  const handleOrder = async () => {
    console.log("Commande:", { postalCode, liters, fuelType, price: calculatedPrice });
    alert("Nous préparons votre devis personnalisé...");
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
                <span className="block text-transparent bg-clip-text warm-gradient"> meilleur fioul</span>
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
          <Card className="cozy-shadow border-0 bg-white backdrop-blur-sm organic-border">
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
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="border-gray-300 focus:border-red-400 focus:ring-red-400/20 rounded-xl bg-gray-50"
                />
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
                  onChange={(e) => setLiters(Number(e.target.value))}
                  className="border-gray-300 focus:border-red-400 focus:ring-red-400/20 rounded-xl bg-gray-50"
                />
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

              {/* Price Display - Updated to match site colors */}
              {calculatedPrice > 0 && (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 space-y-3">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Votre devis personnalisé</h3>
                    <p className="text-sm text-gray-600">Aucun frais caché, promis</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Prix du fioul:</span>
                    <span className="font-medium">{(liters * fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products].pricePerLiter).toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Livraison:</span>
                    <span>
                      {liters >= fiouelConfig.delivery.freeDeliveryThreshold ? (
                        <span className="text-green-600 font-semibold">Offerte!</span>
                      ) : (
                        `${fiouelConfig.delivery.deliveryFee}€`
                      )}
                    </span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-red-600">{calculatedPrice.toFixed(2)}€</span>
                  </div>
                  
                  {liters < fiouelConfig.delivery.freeDeliveryThreshold && (
                    <p className="text-sm text-orange-600 text-center bg-orange-50 p-2 rounded-lg">
                      Livraison offerte à partir de {fiouelConfig.delivery.freeDeliveryThreshold}L
                    </p>
                  )}
                </div>
              )}

              {/* Order Button - Warm and inviting */}
              {calculatedPrice > 0 && (
                <Button 
                  onClick={handleOrder}
                  className="w-full warm-gradient hover:shadow-lg text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Recevez votre devis personnalisé
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
