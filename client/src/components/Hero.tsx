import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg-future.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - contains all text */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="GOODSEED AI Research Lab"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
