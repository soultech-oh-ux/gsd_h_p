import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img
          src={heroBg}
          alt="AI Network Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Pioneering Tomorrow
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
              미래를 선도하는 <br />
              <span className="text-primary">인공지능 연구소</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              굿씨드 AI연구소는 최첨단 딥러닝 기술과 데이터 과학을 통해 
              인류의 삶을 혁신하고 더 나은 미래를 만들어갑니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-12 px-8">
                연구 분야 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80">
                문의하기
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
