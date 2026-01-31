import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, Cross, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    title: "복음과 AI디지털 목회",
    description: "목회 현장에서 활용 가능한 AI 도구와 디지털 사역 자료를 공유합니다.",
    icon: Cross,
    url: "https://padlet.com/kgoh9191/ai-mnvyvpebq4iq4rbq",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "사회복지 행정서류",
    description: "사회복지 행정 업무 효율화를 위한 각종 서식과 AI 활용법을 제공합니다.",
    icon: FileText,
    url: "https://padlet.com/kgoh9191/ai-8fvz98xu171hivz6",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    title: "교육 프로그램",
    description: "자기주도학습 및 AI 리터러시 교육을 위한 커리큘럼과 자료실입니다.",
    icon: BookOpen,
    url: "https://padlet.com/kgoh9191/ai-tohcnjocsr8f5t6n",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

const PadletSection = () => {
  return (
    <section id="community" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
            Community & Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            AI 지식 공유 게시판
          </h2>
          <p className="text-muted-foreground text-lg">
            각 분야별 전문 자료와 노하우가 담긴 게시판으로 바로 연결됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group bg-card hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl ${resource.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${resource.color}`} />
                      </div>
                      <CardTitle className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-base">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        게시판 바로가기 <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-muted/30 -skew-y-3 z-0 origin-top-left transform translate-y-24" />
    </section>
  );
};

export default PadletSection;
