import { motion } from "framer-motion";
import { Brain, Network, Eye, Database, Cpu, MessageSquareText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  {
    icon: Brain,
    title: "Deep Learning",
    description: "차세대 신경망 아키텍처 연구 및 최적화 기술 개발"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "이미지 인식, 객체 탐지 및 영상 분석 솔루션"
  },
  {
    icon: MessageSquareText,
    title: "NLP & LLM",
    description: "자연어 처리 및 대규모 언어 모델 파인튜닝"
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "대용량 데이터 처리 파이프라인 구축 및 인사이트 도출"
  },
  {
    icon: Network,
    title: "Edge AI",
    description: "온디바이스 AI 경량화 및 실시간 추론 최적화"
  },
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description: "고성능 AI 연산을 위한 하드웨어 및 MLOps 환경 구축"
  }
];

const ResearchAreas = () => {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
            Core Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            주요 연구 분야
          </h2>
          <p className="text-muted-foreground text-lg">
            굿씨드 AI연구소는 다양한 산업 분야에 적용 가능한 핵심 AI 기술을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group bg-muted/10 hover:bg-muted/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <area.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-display text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
