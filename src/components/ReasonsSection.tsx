import { motion } from "framer-motion";
import { Heart, MessageCircle, Sparkles, Smile, Star, Sun } from "lucide-react";

const reasons = [
  {
    icon: Smile,
    text: "Seu sorriso ilumina meu dia",
  },
  {
    icon: MessageCircle,
    text: "Você me entende até no silêncio",
  },
  {
    icon: Heart,
    text: "Você é o meu lugar favorito no mundo",
  },
  {
    icon: Sparkles,
    text: "Cada momento com você é mágico",
  },
  {
    icon: Star,
    text: "Você me faz querer ser uma pessoa melhor",
  },
  {
    icon: Sun,
    text: "Você trouxe luz para minha vida",
  },
];

export const ReasonsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Por que te amo
          </h2>
          <p className="text-xl text-muted-foreground font-romantic">
            Existem infinitos motivos, mas aqui estão alguns...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-romantic transition-smooth"
            >
              <div className="bg-gradient-romantic w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-center text-lg font-medium text-foreground">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
