import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-romantic.jpg";

interface HeroSectionProps {
  onContinue: () => void;
}

export const HeroSection = ({ onContinue }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-20 h-20 mx-auto mb-8 text-primary fill-primary animate-pulse-heart" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Oi, amor...
          </h1>
          
          <p className="text-2xl md:text-4xl font-romantic mb-4 text-foreground">
            Tenho algo muito importante pra te dizer
          </p>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            💌
          </p>

          <Button
            onClick={onContinue}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-romantic hover:shadow-romantic transition-smooth"
          >
            Clique aqui 💖
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
