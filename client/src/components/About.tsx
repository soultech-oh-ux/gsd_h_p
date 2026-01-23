import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import labInterior from "@/assets/lab-interior.png";

const About = () => {
  const highlights = [
    "최첨단 AI 알고리즘 연구",
    "대규모 데이터 처리 및 분석",
    "산업 맞춤형 솔루션 개발",
    "글로벌 AI 파트너십"
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={labInterior} 
                alt="AI Research Lab" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">10+</span>
                </div>
                <div>
                  <p className="font-bold text-lg">년의 연구 경험</p>
                  <p className="text-sm text-muted-foreground">AI 분야 전문성</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              기술의 한계를 넘어 <br />
              <span className="text-primary">새로운 가능성</span>을 엽니다
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              굿씨드 AI연구소는 인공지능 기술의 실용화와 고도화를 목표로 설립되었습니다. 
              우리는 복잡한 문제를 해결하고, 비즈니스 가치를 창출하며, 
              사회에 긍정적인 영향을 미치는 AI 솔루션을 연구합니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
