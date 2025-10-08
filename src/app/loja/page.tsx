'use client';

import { ArrowLeft, Crown, Zap, Flame, Gem } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LojaPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  const secretBrainrots = [
    { id: 1, title: "⚫BRAINROT SECRETO DE 1M/S💸 A 2M/S💸⚫", price: "R$ 15,00", originalPrice: "R$ 16,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/a475f3dd-f9de-4e68-9176-78a64e56e7e4.png" },
    { id: 2, title: "⚫BRAINROT SECRETO DE 2M/S💸 A 5M/S💸⚫", price: "R$ 25,00", originalPrice: "R$ 27,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/9a409aa9-9ab6-4007-9d0a-34e7cdd8184a.png" },
    { id: 3, title: "⚫BRAINROT SECRETO DE 5M/S💸 A 10M/S💸⚫", price: "R$ 35,00", originalPrice: "R$ 38,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/ba034fc0-2530-49e3-94a3-835dbcdc679d.png" },
    { id: 4, title: "⚫BRAINROT SECRETO DE 10M/S💸 A 20M/S💸⚫", price: "R$ 49,90", originalPrice: "R$ 54,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/9c8cbd29-ae65-48c0-a6a2-4239add4261f.png" },
    { id: 5, title: "⚫BRAINROT SECRETO DE 30M/S💸 A 60M/S💸⚫", price: "R$ 69,90", originalPrice: "R$ 76,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/379c8200-c023-44b1-ad63-9a705c42f30b.png" },
    { id: 6, title: "⚫BRAINROT SECRETO DE 75M/S💸 A 100M/S💸⚫", price: "R$ 89,90", originalPrice: "R$ 98,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/6638779d-ff29-4648-babe-9de3825f5765.png" },
    { id: 7, title: "⚫BRAINROT SECRETO DE 100M/S💸 A 150M/S💸⚫", price: "R$ 129,90", originalPrice: "R$ 142,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/b45a0bc4-8764-4317-8e2a-a03ef92e2dc9.png" },
    { id: 8, title: "⚫BRAINROT SECRETO DE 150M/S💸 A 200M/S💸⚫", price: "R$ 179,90", originalPrice: "R$ 197,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/d5dbc573-5332-48ad-bef1-6708a543228d.png" },
    { id: 9, title: "⚫BRAINROT SECRETO DE 250M/S💸 A 450M/S💸⚫", price: "R$ 279,90", originalPrice: "R$ 307,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/59cbad80-791b-4616-bd64-3b89922037fd.png" },
    { id: 10, title: "⚫BRAINROT SECRETO DE 500M/S💸⚫", price: "R$ 499,90", originalPrice: "R$ 549,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/f1897c35-00de-4337-b208-09f6aaac818e.png" },
    { id: 11, title: "⚫BRAINROT SECRETO DE 1B+/S💸⚫", price: "R$ 1.299,90", originalPrice: "R$ 1.429,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/51654594-83f6-45c4-aa71-ae7bbed3490f.png" }
  ];

  const brainrots = [
    { id: 1, title: "🍝SPHAGETTI TUALETTI🍝 - 60M/S💸", price: "R$ 149,90", originalPrice: "R$ 164,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/e9f1f8ec-22c2-4571-a5b1-0a31db7cd455.png" },
    { id: 2, title: "🦈LOS BROS🏏 - 24M/S💸", price: "R$ 79,90", originalPrice: "R$ 87,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/7ee015ad-c3e7-4f99-85d5-5de127539f6f.png" },
    { id: 3, title: "🌮 🚲TACORITA BICICLETA🚲🌮  - 16.5M/S", price: "R$ 69,90", originalPrice: "R$ 76,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/7574cf36-85c6-43e0-b52e-6f243b2dca17.png" },
    { id: 4, title: "🪸LOS COMBINASIONAS🪸 - 15M/S💸", price: "R$ 49,90", originalPrice: "R$ 54,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/1d0a35eb-28e9-4e0c-b6f2-6751b6a8af3b.png" },
    { id: 5, title: "🏫ESOK SEKOLAH🏫 - 30M/S💸", price: "R$ 59,90", originalPrice: "R$ 65,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/e11cf652-4b89-4f73-a2f5-b264b30ea3cb.png" },
    { id: 6, title: "🫧CHICLETEIRA BICICLETEIRA🫧 - 3.5M/S💸", price: "R$ 49,90", originalPrice: "R$ 54,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/d9f9c5e8-9578-4c87-bb1a-d89801c944bb.png" },
    { id: 7, title: "🌶CHILLIN CHILI🌶 - 30M/S", price: "R$ 99,99", originalPrice: "R$ 109,99", image: "https://cdn.centralcart.com.br/stores/9331/packages/6702e7ef-36de-4ce1-8b94-c9d8e8e94111.png" },
    { id: 8, title: "🔷LOS 67🔷- 22.5M/S", price: "R$ 49,90", originalPrice: "R$ 54,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/6d781be9-60ef-4cf4-a0b1-1699d7470e89.png" },
    { id: 9, title: "🔷67🔷 - 7.5M/S💸", price: "R$ 35,00", originalPrice: "R$ 38,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/9766746d-d6ac-4a75-adef-f27d3007b2f5.png", outOfStock: true },
    { id: 10, title: "⬛SECRET LUCKY BLOCK⬛", price: "R$ 29,90", originalPrice: "R$ 32,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/d90486b0-31b1-45b0-837d-e38a33cad79e.png" },
    { id: 11, title: "🐒DUL DUL DUL🐒", price: "R$ 12,90", originalPrice: "R$ 14,19", image: "https://cdn.centralcart.com.br/stores/9331/packages/815d4dcf-afb7-4899-8132-d62c146e1a00.png" },
    { id: 12, title: "💀LOS HOTSPOTSITOS💀 - 20M/S💸", price: "R$ 79,90", originalPrice: "R$ 87,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/062ee3d0-cca9-4c09-b43b-144ffc21b669.png" },
    { id: 13, title: "🫧LOS CHICLETEIRAS🫧 - 7M/S💸", price: "R$ 99,90", originalPrice: "R$ 109,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/e559df18-587d-4192-bcfb-ff5ae1c9fecc.png" },
    { id: 14, title: "📱CELULARCINI VICIOSINI📱 - 22,5M/S💸", price: "R$ 119,90", originalPrice: "R$ 131,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/e73690d4-3d7d-444a-958d-987c46320cb1.png" },
    { id: 15, title: "🪸LA GRANDE COMBINASION🪸- 10M/S💸", price: "R$ 59,90", originalPrice: "R$ 65,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/b7da714d-185e-4cfe-a3a4-cbf4e0e5bc13.png" },
    { id: 16, title: "🪸LA EXTINCT GRANDE🪸- 23.5M/S💸", price: "R$ 79,90", originalPrice: "R$ 87,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/486526c3-816c-4538-8e2e-e68892e695e2.png" },
    { id: 17, title: "🗿EXTINCT MATTEO🗿- 625K/S💸", price: "R$ 9,90", originalPrice: "R$ 10,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/bab419a6-bec6-4e21-85a6-864f4a361ae5.png" },
    { id: 18, title: "🐙GRAIPUSS MEDUSI🐙 - 1M/S💸", price: "R$ 20,00", originalPrice: "R$ 22,00", image: "https://cdn.centralcart.com.br/stores/9331/packages/c270b14b-76b9-44d9-84a2-2e7091c5bb65.png" },
    { id: 19, title: "🪐LA VACCA SATURNO🪐-250K/S💸", price: "R$ 10,00", originalPrice: "R$ 11,00", image: "https://cdn.centralcart.com.br/stores/9331/packages/e4da7c22-6aa4-4f6d-971b-71e06ceac5cc.png" },
    { id: 20, title: "🦈LOS TRALALERITOS🦈 - 500K/S💸", price: "R$ 15,00", originalPrice: "R$ 16,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/0192bdd8-f3b3-4302-ad24-584a619ede84.png" },
    { id: 21, title: "🌮NOOO MY HOTSPOT🌮 - 1.5M/S💸", price: "R$ 39,90", originalPrice: "R$ 43,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/e3eacd81-f30c-42c3-8e0b-10f1e0b14535.png" },
    { id: 22, title: "☕LAS SIS☕ - 17,5M/S💸", price: "R$ 79,90", originalPrice: "R$ 87,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/1ad2948a-636d-41e5-b044-e07260707af2.png" },
    { id: 23, title: "🪸LA SECRET COMBINASION🪸 - 125M/S", price: "R$ 400,00", originalPrice: "R$ 440,00", image: "https://cdn.centralcart.com.br/stores/9331/packages/3dc098df-f318-4d7e-bb5e-cdd34498c4c1.png" },
    { id: 24, title: "🧂GARAMA AND MADUNDUNG🧂 - 50M/S💸", price: "R$ 325,00 a R$ 699,00", originalPrice: "R$ 357,50 a R$ 768,90", image: "https://cdn.centralcart.com.br/stores/9331/packages/9ea0bb3f-02ed-43dc-93bb-8dc98fa933f5.png" },
    { id: 25, title: "🐉DRAGON CANNELONI🐉 - 100M/S💸", price: "R$ 1.250,00", originalPrice: "R$ 1.375,00", image: "https://cdn.centralcart.com.br/stores/9331/packages/17b5420a-c524-47d0-ad9c-6d25deaf8be5.png" },
    { id: 26, title: "💠KETUPAT KEPAT💠 - 35M/S💸", price: "R$ 199,90", originalPrice: "R$ 219,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/770bebda-2875-443b-8c79-1f5f8293bcc0.png" },
    { id: 27, title: "🦖NUCLEARO DINOSSAURO🦖 - 15M/S💸", price: "R$ 249,90", originalPrice: "R$ 274,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/1c3d9f82-4503-453d-8bcc-68de0d6f0dbf.png" },
    { id: 28, title: "🦈TRALALEDON🦈 - 27.5M/S💸", price: "R$ 249,90", originalPrice: "R$ 274,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/01d0e4ad-c189-427d-9df6-0e93f944933a.png" },
    { id: 29, title: "🍅KETCHURU AND MUSTURU🍅 - 42.5M/S💸", price: "R$ 299,90", originalPrice: "R$ 329,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/e37e9a4b-d3dc-463a-9e43-f651d868eaa2.png" },
    { id: 30, title: "🌮TACO LUCKY BLOCK🌮", price: "R$ 7,90", originalPrice: "R$ 8,69", image: "https://cdn.centralcart.com.br/stores/9331/packages/6ee62276-ad48-47e9-af6d-7dbeb631180e.png" },
    { id: 31, title: "🌮LOS NOOO MY HOTSPOTSITOS🌮 - 5M/S💸", price: "R$ 34,90", originalPrice: "R$ 38,39", image: "https://cdn.centralcart.com.br/stores/9331/packages/253fd6e0-f0ba-4be3-aafc-4804adae80c5.png" },
    { id: 32, title: "📱POT HOTSPOT📱 - 2.5M/S💸", price: "R$ 25,00", originalPrice: "R$ 27,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/b186d57d-159d-45ba-bbd3-830f639abc68.png" },
    { id: 33, title: "🪸La Karkerkar Combinasion🪑 - 600K/S💸", price: "R$ 25,00", originalPrice: "R$ 27,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/c7253b74-d406-4470-8d34-0067633f897b.png" },
    { id: 34, title: "⌨️GUERRIRO DIGITALE⌨️ - 550K/S💸", price: "R$ 15,00", originalPrice: "R$ 16,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/801b60bd-cf62-42bd-b3ac-a174e073a9e6.png" },
    { id: 35, title: "🎀🦈LAS TRALALERITAS🦈🎀- 650K/S💸", price: "R$ 9,90", originalPrice: "R$ 10,89", image: "https://cdn.centralcart.com.br/stores/9331/packages/3e1f5b42-2448-4db2-9dc2-f676248aaa34.png" },
    { id: 36, title: "📄JOB JOB JOB SAHUR📄 - 700K/S💸", price: "R$ 15,00", originalPrice: "R$ 16,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/a62e54ea-614d-4e1e-a9a5-3041b886ee70.png" },
    { id: 37, title: "🐐BLACKHOLE GOAT🐐 -  400K/S💸", price: "R$ 12,00", originalPrice: "R$ 13,20", image: "https://cdn.centralcart.com.br/stores/9331/packages/d00b9dc0-f725-4b15-a3a8-8c2d26cf6340.png" },
    { id: 38, title: "🪑KARKERKAR KURKUR🪑 - 275K/S💸", price: "R$ 12,00", originalPrice: "R$ 13,20", image: "https://cdn.centralcart.com.br/stores/9331/packages/43d453ee-3ca2-4bd2-9e40-748cf18d3b05.png" },
    { id: 39, title: "⚫X5 BRAINROT SECRETOS⚫- (ALEATORIO) 250K/S💸A 10M/S💸", price: "R$ 25,00", originalPrice: "R$ 27,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/54615902-6d71-409c-ba94-ab79f94a8cda.png" },
    { id: 40, title: "⚫X3 BRAINROT SECRETOS⚫- (ALEATORIO) 250K/S💸A 10M/S💸", price: "R$ 15,00", originalPrice: "R$ 16,50", image: "https://cdn.centralcart.com.br/stores/9331/packages/46602b99-0ae0-4a88-9c5d-49e93a1b5a90.png" },
    { id: 41, title: "⚫X1 BRAINROT SECRETO⚫(ALEATORIO) 250K/S💸A 10M/S💸", price: "R$ 8,00", originalPrice: "R$ 8,80", image: "https://cdn.centralcart.com.br/stores/9331/packages/f644b326-82b1-4fce-9ca1-6ce78d2d2c97.png" },
    { id: 42, title: "🔴X6 BRAINROT GOD🔴(ALEATORIO) 10K/S💸A 1M/S💸", price: "R$ 6,50", originalPrice: "R$ 7,15", image: "https://cdn.centralcart.com.br/stores/9331/packages/7280b8a8-0021-4645-9b7b-ed2645b8d4ad.png", outOfStock: true }
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {brainrots.map((brainrot) => (
              <div key={brainrot.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300 border border-gray-700 hover:scale-[1.01] flex flex-col">
                <div className="relative overflow-hidden">
                  {brainrot.outOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/60 text-white text-sm sm:text-base font-semibold">
                      ESTOQUE ESGOTADO
                    </div>
                  )}
                  <img
                    src={brainrot.image}
                    alt={brainrot.title}
                    className={`w-full h-auto object-contain transition-transform duration-300 ${brainrot.outOfStock ? 'blur-sm opacity-60' : 'group-hover:scale-105'}`}
                  />
                </div>

                <div className="flex flex-col gap-4 p-2 sm:p-4 flex-1">
                  <p className="text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2">
                    {brainrot.title}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-xs sm:text-sm flex-1">
                      <p className="text-white/50 line-through">{brainrot.originalPrice}</p>
                      <p className="text-base sm:text-xl font-black text-orange-400">{brainrot.price}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 px-2 h-8 sm:h-10 text-xs whitespace-nowrap sm:text-base font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md transition-all">
                      🛒 Comprar agora
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secret Brainrot Section */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold inline-block relative after:content-[''] after:block after:mt-2 after:w-full after:h-1 after:bg-orange-500 after:rounded-full mb-4 sm:mb-8">
            BRAINROT SECRET ALEATORIO
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {secretBrainrots.map((brainrot) => (
              <div key={brainrot.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300 border border-gray-700 hover:scale-[1.01] flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={brainrot.image}
                    alt={brainrot.title}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-4 p-2 sm:p-4 flex-1">
                  <p className="text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2">
                    {brainrot.title}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-xs sm:text-sm flex-1">
                      <p className="text-white/50 line-through">{brainrot.originalPrice}</p>
                      <p className="text-base sm:text-xl font-black text-orange-400">{brainrot.price}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 px-2 h-8 sm:h-10 text-xs whitespace-nowrap sm:text-base font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md transition-all">
                      🛒 Comprar agora
                    </button>
                  </div>
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