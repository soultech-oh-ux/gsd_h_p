import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <Card className="h-full border-2 border-amber-100 hover:border-amber-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-100/50">
          <CardHeader>
            <div className="mb-4 p-3 w-fit rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
            <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {description && (
              <CardDescription className="text-slate-600 font-medium leading-relaxed">
                {description}
              </CardDescription>
            )}
            
            <div className="pt-2 flex items-center text-sm font-semibold text-amber-600 group-hover:translate-x-1 transition-transform">
              바로가기 <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
