
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, Euro } from "lucide-react";

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

  const calculatePrice = () => {
    const selectedProduct = fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products];
    const basePrice = liters * selectedProduct.pricePerLiter;
    const deliveryFee = liters >= fiouelConfig.delivery.freeDeliveryThreshold ? 0 : fiouelConfig.delivery.deliveryFee;
    const totalPrice = basePrice + deliveryFee;
    setCalculatedPrice(totalPrice);
  };

  const handleOrder = async () => {
    console.log("Commande:", { postalCode, liters, fuelType, price: calculatedPrice });
    // Ici on créerait le token et redirigerait vers checkout
    alert("Redirection vers le checkout...");
  };

  return (
    <section className="bg-gradient-to-br from-red-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Fioul domestique - 
                <span className="text-red-600"> Livraison rapide</span> en Île-de-France
              </h1>
              <p className="text-xl text-gray-600">
                Prix compétitifs • Livraison 24h • Qualité garantie
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Livraison 24h</h3>
                  <p className="text-sm text-gray-600">Partout en Île-de-France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <Euro className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Prix compétitifs</h3>
                  <p className="text-sm text-gray-600">Meilleurs tarifs du marché</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Qualité certifiée</h3>
                  <p className="text-sm text-gray-600">Fioul de première qualité</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service 24/7</h3>
                  <p className="text-sm text-gray-600">Support client permanent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Price Calculator */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="bg-red-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Calculateur de Prix</CardTitle>
              <p className="text-center text-red-100">Obtenez votre devis instantané</p>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* Postal Code */}
              <div className="space-y-2">
                <Label htmlFor="postal" className="text-gray-700 font-medium">Code postal</Label>
                <Input
                  id="postal"
                  type="text"
                  placeholder="Ex: 75001"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {/* Liters */}
              <div className="space-y-2">
                <Label htmlFor="liters" className="text-gray-700 font-medium">
                  Quantité en litres ({fiouelConfig.limits.minLiters}-{fiouelConfig.limits.maxLiters}L)
                </Label>
                <Input
                  id="liters"
                  type="number"
                  min={fiouelConfig.limits.minLiters}
                  max={fiouelConfig.limits.maxLiters}
                  value={liters}
                  onChange={(e) => setLiters(Number(e.target.value))}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {/* Fuel Type */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-medium">Type de fioul</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
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
                      <label htmlFor="standard" className="font-medium text-gray-900 cursor-pointer">
                        Fioul Standard - {fiouelConfig.products.standard.pricePerLiter}€/L
                      </label>
                      <p className="text-sm text-gray-600">{fiouelConfig.products.standard.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
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
                      <label htmlFor="premium" className="font-medium text-gray-900 cursor-pointer">
                        Fioul Premium - {fiouelConfig.products.premium.pricePerLiter}€/L
                      </label>
                      <p className="text-sm text-gray-600">{fiouelConfig.products.premium.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculatePrice}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3"
              >
                Calculer le prix
              </Button>

              {/* Price Display */}
              {calculatedPrice > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Prix du fioul:</span>
                    <span>{(liters * fiouelConfig.products[fuelType as keyof typeof fiouelConfig.products].pricePerLiter).toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison:</span>
                    <span>
                      {liters >= fiouelConfig.delivery.freeDeliveryThreshold ? (
                        <span className="text-green-600 font-semibold">Gratuite!</span>
                      ) : (
                        `${fiouelConfig.delivery.deliveryFee}€`
                      )}
                    </span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-red-600">{calculatedPrice.toFixed(2)}€</span>
                  </div>
                  
                  {liters < fiouelConfig.delivery.freeDeliveryThreshold && (
                    <p className="text-sm text-blue-600">
                      Livraison gratuite à partir de {fiouelConfig.delivery.freeDeliveryThreshold}L
                    </p>
                  )}
                </div>
              )}

              {/* Order Button */}
              {calculatedPrice > 0 && (
                <Button 
                  onClick={handleOrder}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold text-lg"
                >
                  Commander maintenant
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
