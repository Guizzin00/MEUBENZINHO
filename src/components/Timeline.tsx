import { motion } from "framer-motion";
import { Calendar, Heart, Star, Sparkles } from "lucide-react";

const timelineEvents = [
  {
    icon: Sparkles,
    date: "JULHO DE 2025",
    title: "Mês em que eu me apaixonei",
    description: "Me apaixonei e deixei acontecer, melhor escolha da minha vida ! 💖 ",
  },
  {
    icon: Star,
    date: "05 DE AGOSTO DE 2025",
    title: "Primeiro Encontro",
    description: "O dia em que tudo começou ✨",
  },
  {
    icon: Heart,
    date: "AGOSTO DE 2025",
    title: "Primeira Vez que Disse 'Te Amo'",
    description: "As palavras mais verdadeiras do meu coração 💕",
  },
  {
    icon: Calendar,
    date: "Hoje",
    title: "O Dia do Pedido",
    description: "O começo oficial da nossa história 💖",
  },
];

export const Timeline = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Nossa Linha do Tempo
          </h2>
          <p className="text-xl text-muted-foreground font-romantic">
            Cada momento que nos trouxe até aqui
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-romantic" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Ícone */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-romantic rounded-full flex items-center justify-center shadow-romantic z-10">
                  <event.icon className="w-8 h-8 text-white" />
                </div>

                {/* Conteúdo */}
                <div
                  className={`ml-24 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-romantic transition-smooth">
                    <p className="text-sm text-primary font-semibold mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
