'use client';

import { ArrowLeft, Star, Crown, Zap, Flame, Gem } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LojaPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  const brainrots = [
    {
      id: 1,
      title: "Pack Sigma Ultimate",
      description: "Os brainrots mais engraçados para dominar qualquer servidor",
      price: "R$ 29,90",
      originalPrice: "R$ 49,90",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      badge: "MAIS VENDIDO",
      badgeColor: "bg-red-500",
      rating: 4.9,
      sales: 1247
    },
    {
      id: 2,
      title: "Brainrot VIP Premium",
      description: "Exclusivo para quem quer ser o rei da diversão",
      price: "R$ 19,90",
      originalPrice: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
      badge: "NOVO",
      badgeColor: "bg-green-500",
      rating: 4.8,
      sales: 892
    },
    {
      id: 3,
      title: "Mega Pack Brainrot",
      description: "Combo completo com mais de 50 brainrots diferentes",
      price: "R$ 39,90",
      originalPrice: "R$ 79,90",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop",
      badge: "OFERTA",
      badgeColor: "bg-orange-500",
      rating: 4.9,
      sales: 2156
    },
    {
      id: 4,
      title: "Brainrot Starter",
      description: "Perfeito para quem está começando e quer arrasar",
      price: "R$ 14,90",
      originalPrice: "R$ 24,90",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=300&h=200&fit=crop",
      badge: "INICIANTE",
      badgeColor: "bg-blue-500",
      rating: 4.7,
      sales: 634
    },
    {
      id: 5,
      title: "Pack Lendário",
      description: "Os brainrots mais raros e engraçados do jogo",
      price: "R$ 49,90",
      originalPrice: "R$ 89,90",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      badge: "LENDÁRIO",
      badgeColor: "bg-purple-500",
      rating: 5.0,
      sales: 445
    },
    {
      id: 6,
      title: "Brainrot Supremo",
      description: "Para quem quer ser o mais divertido de todos",
      price: "R$ 34,90",
      originalPrice: "R$ 59,90",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
      badge: "SUPREMO",
      badgeColor: "bg-yellow-500",
      rating: 4.8,
      sales: 778
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header - Otimizado para mobile */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button 
              onClick={handleGoBack}
              className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold text-sm">Voltar</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <Crown className="w-6 h-6 text-orange-400" />
              <h1 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                BrainRot Store
              </h1>
            </div>
            
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Hero Section - Compacto para mobile */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            🔥 Escolha seu <span className="text-orange-400">BRAINROT</span> favorito 🔥
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Os brainrots mais engraçados do Roblox! Vire o rei da diversão! 👑
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Você recebe na hora</span>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="w-4 h-4 text-red-400" />
              <span>Mais de 5 mil pessoas felizes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Layout mais compacto e proporcional */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {brainrots.map((brainrot) => (
              <div key={brainrot.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300 border border-gray-700 hover:scale-[1.02]">
                {/* Image with Badge */}
                <div className="relative">
                  <img 
                    src={brainrot.image} 
                    alt={brainrot.title}
                    className="w-full h-24 md:h-32 object-cover"
                  />
                  <div className={`absolute top-1 left-1 ${brainrot.badgeColor} text-white px-1.5 py-0.5 rounded-full text-xs font-bold`}>
                    {brainrot.badge}
                  </div>
                </div>

                {/* Content - Mais compacto */}
                <div className="p-3">
                  <h3 className="text-sm font-bold mb-1 text-white leading-tight line-clamp-1">{brainrot.title}</h3>
                  <p className="text-gray-400 mb-2 text-xs leading-tight line-clamp-2">{brainrot.description}</p>
                  
                  {/* Rating and Sales - Mais compacto */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-semibold">{brainrot.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{brainrot.sales} pessoas compraram</span>
                  </div>

                  {/* Price - Layout melhorado */}
                  <div className="mb-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-base md:text-lg font-bold text-orange-400">{brainrot.price}</span>
                      <div className="text-green-400 text-xs font-semibold">
                        {Math.round(((parseFloat(brainrot.originalPrice.replace('R$ ', '').replace(',', '.')) - parseFloat(brainrot.price.replace('R$ ', '').replace(',', '.'))) / parseFloat(brainrot.originalPrice.replace('R$ ', '').replace(',', '.'))) * 100)}% OFF
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 line-through">{brainrot.originalPrice}</span>
                  </div>

                  {/* Buy Button - Mais compacto */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-2 rounded-lg text-xs transition-all duration-300 transform hover:scale-105 shadow-lg">
                    🚀 QUERO ESSE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Compacto */}
      <section className="bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-6">🛡️ Compra 100% segura</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h4 className="font-bold mb-2 text-sm">Você recebe na hora</h4>
              <p className="text-gray-400 text-xs">Enviamos tudo pelo Discord instantaneamente</p>
            </div>
            <div className="flex flex-col items-center">
              <Gem className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="font-bold mb-2 text-sm">Garantia total</h4>
              <p className="text-gray-400 text-xs">7 dias para testar ou devolvemos seu dinheiro</p>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="w-8 h-8 text-red-400 mb-3" />
              <h4 className="font-bold mb-2 text-sm">Ajuda sempre que precisar</h4>
              <p className="text-gray-400 text-xs">Nossa equipe está aqui para te ajudar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compacto */}
      <footer className="bg-gray-900 border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 BrainRot Store - Feito com ❤️ para a comunidade gamer</p>
        </div>
      </footer>
    </div>
  );
}