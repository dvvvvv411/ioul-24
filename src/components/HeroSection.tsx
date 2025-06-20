
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, Euro, Star, Loader2 } from "lucide-react";

const fiouelConfig = {
  shopId: "acefaf14-6b4c-41bd-b172-133b27b9983f",
  backendUrl: "https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1",
  checkoutUrl: "https://checkout.fioul-24.fr/checkout",
  products: {
    standard: {
      id: "standard_heizoel",
      name: "Fioul Standard",
      pricePerLiter: 0.70,
      description: "Fioul de qualité pour usage domestique"
    },
    premium: {
      id: "premium_heizoel", 
      name: "Fioul Premium",
      pricePerLiter: 0.73,
      description: "Fioul haut de gamme avec additifs"
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
  const [isCalculating, setIsCalculating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculatePrice = async () => {
    setIsCalculating(true);
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const selectedProduct = fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products];
    const basePrice = liters * selectedProduct.pricePerLiter;
    const deliveryFee = liters >= fiouelConfig.delivery.freeDeliveryThreshold ? 0 : fiouelConfig.delivery.deliveryFee;
    const totalPrice = basePrice + deliveryFee;
    setCalculatedPrice(totalPrice);
    setIsCalculating(false);
  };

  const handleOrder = async () => {
    console.log("Commande:", { postalCode, liters, fuelType, price: calculatedPrice });
    alert("Redirection vers le checkout...");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmVmMWY3IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gold-200 rounded-full px-4 py-2 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Leader en Île-de-France depuis 1995</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fioul domestique
                <span className="block text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Livraison Express
                </span>
                <span className="text-3xl lg:text-4xl text-gray-600 font-normal">
                  en Île-de-France
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-red-600">Prix compétitifs</span> • 
                <span className="font-semibold text-green-600"> Livraison 24h</span> • 
                <span className="font-semibold text-blue-600"> Qualité garantie</span>
              </p>
            </div>

            {/* Features with Enhanced Design */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-full shadow-lg">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Livraison 24h</h3>
                  <p className="text-sm text-gray-600">Partout en Île-de-France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full shadow-lg">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Prix compétitifs</h3>
                  <p className="text-sm text-gray-600">Meilleurs tarifs du marché</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Qualité certifiée</h3>
                  <p className="text-sm text-gray-600">Norme NF EN 590</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Service 24/7</h3>
                  <p className="text-sm text-gray-600">Support client permanent</p>
                </div>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-lg" data-aos="pulse">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold">Commandez avant 15h pour une livraison demain !</span>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Glassmorphism Price Calculator */}
          <div className="relative" data-aos="fade-left">
            {/* Glassmorphism Card */}
            <Card className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none"></div>
              
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhZGllbnQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPjwvc3ZnPg==')] opacity-30"></div>
                <div className="relative">
                  <CardTitle className="text-2xl text-center flex items-center justify-center space-x-2">
                    <Euro className="w-6 h-6" />
                    <span>Calculateur de Prix</span>
                  </CardTitle>
                  <p className="text-center text-red-100 mt-2">Obtenez votre devis instantané</p>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 space-y-6 relative">
                {/* Postal Code */}
                <div className="space-y-2">
                  <Label htmlFor="postal" className="text-gray-700 font-medium flex items-center space-x-2">
                    <span>Code postal</span>
                  </Label>
                  <Input
                    id="postal"
                    type="text"
                    placeholder="Ex: 75001"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="bg-white/70 backdrop-blur-sm border-gray-300 focus:border-red-500 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Liters */}
                <div className="space-y-2">
                  <Label htmlFor="liters" className="text-gray-700 font-medium">
                    Quantité en litres ({fiouelConfig.limits.minLiters.toLocaleString('fr-FR')}-{fiouelConfig.limits.maxLiters.toLocaleString('fr-FR')}L)
                  </Label>
                  <Input
                    id="liters"
                    type="number"
                    min={fiouelConfig.limits.minLiters}
                    max={fiouelConfig.limits.maxLiters}
                    value={liters}
                    onChange={(e) => setLiters(Number(e.target.value))}
                    className="bg-white/70 backdrop-blur-sm border-gray-300 focus:border-red-500 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Fuel Type with Enhanced Design */}
                <div className="space-y-3">
                  <Label className="text-gray-700 font-medium">Type de fioul</Label>
                  <div className="space-y-3">
                    <div className={`flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                      fuelType === "standard" 
                        ? "border-red-500 bg-red-50/70 backdrop-blur-sm" 
                        : "border-gray-200 bg-white/50 backdrop-blur-sm hover:border-red-300"
                    }`}>
                      <input
                        type="radio"
                        id="standard"
                        name="fuelType"
                        value="standard"
                        checked={fuelType === "standard"}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="text-red-600 focus:ring-red-500"
                      />
                      <div className="flex-1">
                        <label htmlFor="standard" className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                          <span>Fioul Standard</span>
                          <span className="text-red-600 font-bold">{fiouelConfig.products.standard.pricePerLiter.toFixed(2)}€/L</span>
                        </label>
                        <p className="text-sm text-gray-600">{fiouelConfig.products.standard.description}</p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                      fuelType === "premium" 
                        ? "border-red-500 bg-red-50/70 backdrop-blur-sm" 
                        : "border-gray-200 bg-white/50 backdrop-blur-sm hover:border-red-300"
                    }`}>
                      <input
                        type="radio"
                        id="premium"
                        name="fuelType"
                        value="premium"
                        checked={fuelType === "premium"}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="text-red-600 focus:ring-red-500"
                      />
                      <div className="flex-1">
                        <label htmlFor="premium" className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                          <span>Fioul Premium</span>
                          <span className="text-red-600 font-bold">{fiouelConfig.products.premium.pricePerLiter.toFixed(2)}€/L</span>
                        </label>
                        <p className="text-sm text-gray-600">{fiouelConfig.products.premium.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculate Button with Loading State */}
                <Button 
                  onClick={calculatePrice}
                  disabled={isCalculating}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  {isCalculating ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Calcul en cours...</span>
                    </div>
                  ) : (
                    "Calculer le prix"
                  )}
                </Button>

                {/* Enhanced Price Display */}
                {calculatedPrice > 0 && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-sm border-2 border-green-200 rounded-xl p-6 space-y-3 shadow-lg" data-aos="zoom-in">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Prix du fioul:</span>
                      <span className="font-semibold">{(liters * fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products].pricePerLiter).toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Livraison:</span>
                      <span>
                        {liters >= fiouelConfig.delivery.freeDeliveryThreshold ? (
                          <span className="text-green-600 font-bold">Gratuite! 🎉</span>
                        ) : (
                          `${fiouelConfig.delivery.deliveryFee}€`
                        )}
                      </span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-gray-900">Total:</span>
                      <span className="font-bold text-2xl bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                        {calculatedPrice.toFixed(2)}€
                      </span>
                    </div>
                    
                    {liters < fiouelConfig.delivery.freeDeliveryThreshold && (
                      <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                        💡 Livraison gratuite à partir de {fiouelConfig.delivery.freeDeliveryThreshold.toLocaleString('fr-FR')}L
                      </p>
                    )}
                  </div>
                )}

                {/* Enhanced Order Button */}
                {calculatedPrice > 0 && (
                  <Button 
                    onClick={handleOrder}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Truck className="w-5 h-5" />
                      <span>Commander maintenant</span>
                    </div>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
