import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";
import { Heart } from "lucide-react";

export const ProposalSection = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Desde o dia em que te conheci, tudo ficou melhor, mais alegre, e a vida faz mais sentido. E agora eu quero te perguntar...";

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYes = () => {
    setShowConfetti(true);
    setAnswered(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={['#FF6B9D', '#E0B0FF', '#FF385C', '#FFB6C1', '#DDA0DD']}
        />
      )}

      <div className="max-w-4xl w-full text-center">
        {!answered ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-2xl md:text-3xl text-foreground mb-8 min-h-[120px] font-medium">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-gradient mb-12">
                Quer namorar comigo? 💖
              </h2>

              <div className="flex gap-6 justify-center items-center flex-wrap">
                <Button
                  onClick={handleYes}
                  size="lg"
                  className="text-2xl px-12 py-8 bg-gradient-romantic hover:shadow-romantic transition-smooth"
                >
                  💕 Sim!
                </Button>

                <Button
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  size="lg"
                  variant="outline"
                  className="text-2xl px-12 py-8 transition-bounce"
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  }}
                >
                  🙈 Não
                </Button>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Heart className="w-32 h-32 mx-auto text-primary fill-primary animate-pulse-heart" />
            
            <h2 className="text-5xl md:text-7xl font-bold text-gradient">
              Agora somos oficialmente namorados! 💑
            </h2>
            
            <p className="text-3xl md:text-4xl font-romantic text-foreground">
              Te amo mais que tudo 💗
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap text-4xl mt-8">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>❤️</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💕</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>💗</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💝</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
