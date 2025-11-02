import { motion } from "framer-motion";
import { Heart, Home, Plane, BookHeart, Sparkles, Users } from "lucide-react";

const promises = [
  {
    icon: Heart,
    title: "Te amar todos os dias",
    description: "Nos bons e nos difíceis momentos",
  },
  {
    icon: Plane,
    title: "Viajar o mundo juntos",
    description: "Criar memórias em cada canto do planeta",
  },
  {
    icon: Home,
    title: "Construir nosso lar",
    description: "Um lugar cheio de amor e felicidade",
  },
  {
    icon: BookHeart,
    title: "Crescer juntos",
    description: "Apoiar seus sonhos e compartilhar os meus",
  },
  {
    icon: Users,
    title: "Ser seu melhor amigo",
    description: "Estar ao seu lado sempre que precisar",
  },
  {
    icon: Sparkles,
    title: "Fazer você sorrir",
    description: "Trazer alegria para cada dia nosso",
  },
];

export const PromisesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Minhas Promessas
          </h2>
          <p className="text-xl text-muted-foreground font-romantic">
            Tudo que prometo fazer por nós
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-romantic transition-smooth text-center"
            >
              <div className="bg-gradient-romantic w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-romantic">
                <promise.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {promise.title}
              </h3>
              <p className="text-muted-foreground">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
