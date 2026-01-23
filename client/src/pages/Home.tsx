import { motion } from "framer-motion";
import { Fingerprint, Building2, TrendingUp, Sparkles, Brain, Share2 } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "IBAQ 지문적성검사",
    description: "뇌과학, 해부학, 유전학에 의한 과학적 통계로 분석하는 자기이해보고서입니다. 당신의 고유한 잠재력을 발견하세요.",
    link: "https://padlet.com/kgoh9191/ibaq-a35pekdzzdjplgc4",
    icon: <Fingerprint className="w-8 h-8" />,
    delay: 0.2
  },
  {
    title: "부동산 분석 AI",
    description: "빅데이터 기반의 부동산 시장 분석 및 예측 리포트를 제공합니다. 스마트한 투자를 위한 AI 파트너를 만나보세요.",
    link: "https://padlet.com/kgoh9191/ai-1s7bvfo7q735shhh",
    icon: <Building2 className="w-8 h-8" />,
    delay: 0.4
  },
  {
    title: "경제, 주식 분석 AI",
    description: "글로벌 경제 동향과 주식 시장을 실시간으로 분석하여 인사이트를 제공합니다. 데이터 기반의 투자 전략을 세우세요.",
    link: "https://padlet.com/kgoh9191/ai-3ygrakl00l1bh7w3",
    icon: <TrendingUp className="w-8 h-8" />,
    delay: 0.6
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section with Gold Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 text-slate-900 pb-20 pt-24 lg:pt-32">
        
        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center p-2 mb-6 bg-white/20 backdrop-blur-md rounded-full px-6 border border-white/30 text-amber-900 font-semibold shadow-sm"
            >
              <Sparkles className="w-4 h-4 mr-2 text-amber-800" />
              <span>미래를 여는 AI 기술</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-slate-900"
            >
              AI 지식공유
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-800/90 mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              과학적 통계와 최신 AI 기술을 통해<br className="hidden md:block" /> 
              자기 이해부터 투자 분석까지, 새로운 통찰력을 제공합니다.
            </motion.p>
          </div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-4 -mt-10 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 mt-12 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <div className="flex justify-center items-center mb-6 space-x-2">
            <Brain className="w-6 h-6 text-amber-500" />
            <span className="font-bold text-slate-700 text-lg">AI Knowledge</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} AI 지식공유. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
