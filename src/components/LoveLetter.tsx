import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoveLetter = () => {
  const [visibleText, setVisibleText] = useState("");
  const fullText = `Meu benzinho,

Olha bb não sou muito bom escrevendo cartas sempre me embaralho todo, mas essa eu estou muito confiante para escrever, nunca estive tao certo de algo na minha vida.

Cada momento ao seu lado é um presente que guardo no coração. Seu sorriso ilumina meus dias mais difíceis, você me faz sentir amado, e seu amor é o lugar mais seguro que eu conheço.

Eu não sei o que o futuro nos reserva, mas sei que quero você ao meu lado para descobrir. Quero compartilhar cada alegria, cada desafio, cada sonho, cada conquista tudo, quero que você esteja comigo em todos os momentos sejam de dor ou alegria vamos passar esses momentos juntos.

Você é meu amor, minha melhor amiga, minha pessoa favorita no mundo inteiro, a pessoa em que eu mais confio nesse mundo, você em tao pouco tempo se tornou a coisinha mais importante da minha vida inteira.

Não consigo nem imaginar ficar um dia sem você, você e a mulher da minha vida, quero te fazer feliz sempre, te amar sempre, me preocupar sempre, fazer questão sempre.

TE AMO MEU AMOR, LINDA

Com todo meu amor do mundo,
Para sempre seu ❤️`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setVisibleText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-subtle">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full"
      >
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-border relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-romantic opacity-10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-warm opacity-10 rounded-full -ml-20 -mb-20" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-romantic text-center mb-8 text-gradient">
              . Cartinha Para o Meu Amorzinho .
            </h2>
            
            <div className="space-y-4 text-foreground leading-relaxed whitespace-pre-wrap font-light text-lg">
              {visibleText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
