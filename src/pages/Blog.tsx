
import Header from "@/components/Header";
import CompanyFooter from "@/components/CompanyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, TrendingUp, Leaf, Settings, AlertTriangle } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Conseils chauffage",
      title: "Préparer son système de chauffage pour l'hiver 2024",
      excerpt: "Découvrez nos conseils d'experts pour optimiser votre chauffage au fioul et réduire vos factures énergétiques cet hiver.",
      author: "William Boscher",
      date: "15 Décembre 2024",
      icon: Settings,
      featured: true
    },
    {
      id: 2,
      category: "Prix du marché",
      title: "Évolution des prix du fioul domestique - Décembre 2024",
      excerpt: "Analyse détaillée des tendances tarifaires et prévisions pour les prochains mois. Comment anticiper vos achats de fioul.",
      author: "Équipe Fioul-24",
      date: "10 Décembre 2024",
      icon: TrendingUp,
      featured: false
    },
    {
      id: 3,
      category: "Environnement",
      title: "Fioul domestique : les nouvelles normes environnementales",
      excerpt: "Comprendre l'impact des nouvelles réglementations européennes sur la qualité du fioul et l'environnement.",
      author: "Service Qualité",
      date: "5 Décembre 2024",
      icon: Leaf,
      featured: false
    },
    {
      id: 4,
      category: "Urgences",
      title: "Que faire en cas de panne de chauffage en urgence ?",
      excerpt: "Guide pratique pour gérer une panne de chauffage : diagnostics rapides, solutions temporaires et quand faire appel aux professionnels.",
      author: "Service Technique",
      date: "1 Décembre 2024",
      icon: AlertTriangle,
      featured: false
    },
    {
      id: 5,
      category: "Conseils chauffage",
      title: "Optimiser sa consommation de fioul : 10 astuces efficaces",
      excerpt: "Réduisez votre consommation de fioul jusqu'à 20% avec ces conseils simples et efficaces de nos experts chauffagistes.",
      author: "William Boscher",
      date: "25 Novembre 2024",
      icon: Settings,
      featured: false
    },
    {
      id: 6,
      category: "Prix du marché",
      title: "Impact de la géopolitique sur les prix énergétiques",
      excerpt: "Analyse des facteurs géopolitiques influençant les cours du pétrole et leurs répercussions sur le prix du fioul domestique.",
      author: "Équipe Fioul-24",
      date: "20 Novembre 2024",
      icon: TrendingUp,
      featured: false
    }
  ];

  const categories = [
    { name: "Tous les articles", count: blogPosts.length },
    { name: "Conseils chauffage", count: blogPosts.filter(post => post.category === "Conseils chauffage").length },
    { name: "Prix du marché", count: blogPosts.filter(post => post.category === "Prix du marché").length },
    { name: "Environnement", count: blogPosts.filter(post => post.category === "Environnement").length },
    { name: "Urgences", count: blogPosts.filter(post => post.category === "Urgences").length }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Actualités & Conseils</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Restez informé sur les dernières actualités du fioul domestique et découvrez nos conseils d'experts
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Article à la Une
            </h2>
            <Card className="shadow-xl border-0 overflow-hidden max-w-6xl mx-auto">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-12 text-white flex items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <featuredPost.icon className="w-8 h-8" />
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg mb-6 text-white/90">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-white/80 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <Button className="bg-white text-red-600 hover:bg-gray-100">
                        Lire l'article complet
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <featuredPost.icon className="w-24 h-24 text-red-600 mx-auto mb-4" />
                      <p className="text-gray-600">Article recommandé par nos experts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg border-0 sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Catégories</h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className="w-full text-left flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="text-gray-700">{category.name}</span>
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Articles List */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Derniers Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center">
                          <post.icon className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                        Lire la suite
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Charger plus d'articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé de nos dernières actualités
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Recevez notre newsletter mensuelle avec nos conseils d'experts et les dernières tendances du marché
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3">
              S'inscrire
            </Button>
          </div>
          <p className="text-sm mt-4 text-white/80">
            Pas de spam, désabonnement possible à tout moment
          </p>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
};

export default Blog;
