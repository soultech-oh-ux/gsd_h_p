import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resources = [
  {
    title: "복음과 AI디지털 목회",
    icon: Cross,
    url: "https://padlet.com/kgoh9191/ai-mnvyvpebq4iq4rbq",
    embedUrl: "https://padlet.com/embed/kgoh9191/ai-mnvyvpebq4iq4rbq"
  },
  {
    title: "사회복지 행정서류",
    icon: FileText,
    url: "https://padlet.com/kgoh9191/ai-8fvz98xu171hivz6",
    embedUrl: "https://padlet.com/embed/kgoh9191/ai-8fvz98xu171hivz6"
  },
  {
    title: "교육 프로그램",
    icon: BookOpen,
    url: "https://padlet.com/kgoh9191/ai-tohcnjocsr8f5t6n",
    embedUrl: "https://padlet.com/embed/kgoh9191/ai-tohcnjocsr8f5t6n"
  }
];

const PadletSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeResource = resources[activeIndex];

  return (
    <section id="community" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
            Community & Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            AI 지식 공유 게시판
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            다양한 분야의 최신 AI 자료와 노하우를 공유합니다.
            원하시는 주제를 선택하여 확인해보세요.
          </p>
          
          {/* Tab Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Button
                  key={index}
                  variant={activeIndex === index ? "default" : "outline"}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    activeIndex === index ? "ring-2 ring-primary/20 ring-offset-2" : "hover:border-primary/50"
                  )}
                >
                  <Icon className="mr-2 w-4 h-4" />
                  {resource.title}
                </Button>
              );
            })}
          </div>

          <div className="flex justify-center mb-8">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
              <a 
                href={activeResource.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                {activeResource.title} 새 창으로 열기
              </a>
            </Button>
          </div>
        </div>

        <motion.div
          key={activeResource.embedUrl}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[16/9] md:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-border bg-muted"
        >
          <iframe 
            src={activeResource.embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            title={activeResource.title}
            sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-presentation allow-top-navigation allow-popups-to-escape-sandbox allow-modals"
            loading="lazy"
          />
          
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] rounded-xl" />
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-muted/30 -skew-y-3 z-0 origin-top-left transform translate-y-24" />
    </section>
  );
};

export default PadletSection;
