'use client';

import { Zap, Crown, Flame, Star, Play, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleNavigateToLoja = () => {
    router.push('/loja');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header - Otimizado para mobile */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Flame className="w-6 h-6 text-orange-500" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                BrainRot Store
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Compacto para mobile */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
            <Zap className="w-3 h-3" />
            <span>EXCLUSIVO • LIMITADO</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Seja o mais
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent block">
              ENGRAÇADO
            </span>
            do servidor
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Os brainrots mais engraçados que vão fazer todo mundo <span className="text-orange-400 font-bold">morrer de rir</span> e querer ser seu amigo 😂
          </p>

          <div className="flex flex-col items-center gap-2 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              <span>Mais de 10 mil pessoas já compraram</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Funciona em qualquer servidor</span>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section - Compacto */}
      <section className="py-12 px-4 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Veja como funciona na prática 👇
            </h2>
            <p className="text-gray-400">
              Assista e descubra por que todo mundo quer esses brainrots
            </p>
          </div>

          {/* Video Player - Menor para mobile */}
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl mb-8">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-orange-600 transition-colors cursor-pointer">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <p className="text-gray-400 text-sm">Clique para assistir</p>
              </div>
            </div>
          </div>

          {/* CTA Button após o vídeo */}
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                <Flame className="w-3 h-3" />
                <span>OFERTA POR TEMPO LIMITADO</span>
              </div>
            </div>
            
            <button 
              onClick={handleNavigateToLoja}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center space-x-3 border-2 border-yellow-400"
            >
              <Crown className="w-6 h-6" />
              <span>VER LOJINHA</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-400 mt-3">
              ⚡ Você recebe na hora • 🔥 Já são mais de 5 mil pessoas felizes
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works - Simplificado */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Por que todo mundo quer? 🤔
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Você vira o centro das atenções</h3>
              <p className="text-gray-400 text-sm">
                Todo mundo vai querer saber onde você conseguiu esses brainrots
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">São únicos e exclusivos</h3>
              <p className="text-gray-400 text-sm">
                Brainrots que 99% dos players nunca viram antes
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Diversão garantida</h3>
              <p className="text-gray-400 text-sm">
                Você vai ser a pessoa mais engraçada da turma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Reduzido para mobile */}
      <section className="py-12 px-4 bg-gray-800/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Veja o que a galera está falando 🗣️
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-800 p-4 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">MatheusGamer2009</p>
                  <div className="flex text-yellow-400 text-xs">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "Cara, esses brainrots são demais! Todo mundo no servidor fica perguntando onde eu peguei 😂"
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  L
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">LucasProPlayer</p>
                  <div className="flex text-yellow-400 text-xs">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "Virei uma lenda no meu servidor! A galera não para de rir quando uso 💀"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Otimizado para mobile */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Pronto para ser o mais divertido? 👑
          </h2>
          
          <p className="text-lg text-gray-300 mb-6">
            Clique no botão e veja nossa coleção exclusiva de brainrots
          </p>

          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
              <Flame className="w-3 h-3" />
              <span>ÚLTIMAS VAGAS DISPONÍVEIS</span>
            </div>
          </div>

          <button 
            onClick={handleNavigateToLoja}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center space-x-2"
          >
            <span>VER OS BRAINROTS AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-gray-500 mt-4">
            🔒 Acesso instantâneo • ⚡ Entrega imediata
          </p>
        </div>
      </section>

      {/* Footer - Compacto */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-500">
          <p className="text-sm">&copy; 2024 BrainRot Store. Feito com ❤️ para a comunidade gamer.</p>
        </div>
      </footer>
    </div>
  );
}