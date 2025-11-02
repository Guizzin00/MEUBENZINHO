import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Check, X } from "lucide-react";

const quizQuestions = [
  {
    question: "Qual foi a primeira coisa que você notou em mim?",
    options: ["Seu sorriso", "Seus olhos", "Sua voz", "Sua personalidade"],
    correct: 0,
  },
  {
    question: "Qual é minha comida favorita?",
    options: ["Pizza", "Sushi", "Lasanha", "Hambúrguer"],
    correct: 1,
  },
  {
    question: "O que eu mais amo fazer com você?",
    options: ["Assistir filmes", "Conversar até tarde", "Viajar", "Todas as anteriores"],
    correct: 3,
  },
];

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);

    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-subtle">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            O Quanto Você Me Conhece?
          </h2>
          <p className="text-xl text-muted-foreground font-romantic">
            Vamos testar! 💝
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-border"
          >
            <div className="mb-6">
              <p className="text-sm text-primary font-semibold mb-4">
                Pergunta {currentQuestion + 1} de {quizQuestions.length}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {quizQuestions[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  variant="outline"
                  className={`w-full p-6 text-lg justify-start transition-smooth ${
                    answered
                      ? index === quizQuestions[currentQuestion].correct
                        ? "bg-green-500/20 border-green-500"
                        : index === selectedAnswer
                        ? "bg-red-500/20 border-red-500"
                        : ""
                      : "hover:bg-primary/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {answered && index === quizQuestions[currentQuestion].correct && (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    {answered && index === selectedAnswer && index !== quizQuestions[currentQuestion].correct && (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    {option}
                  </span>
                </Button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-border text-center"
          >
            <Heart className="w-24 h-24 mx-auto mb-6 text-primary fill-primary animate-pulse-heart" />
            
            <h3 className="text-4xl font-bold mb-4 text-gradient">
              Sua pontuação: {score}/{quizQuestions.length}
            </h3>
            
            <p className="text-xl text-muted-foreground mb-8 font-romantic">
              {score === quizQuestions.length
                ? "Perfeito! Você me conhece muito bem! 💕"
                : score >= quizQuestions.length / 2
                ? "Quase lá! Mas ainda vamos ter muito tempo para nos conhecer melhor! 😊"
                : "Temos muito a aprender um sobre o outro, e isso é lindo! ❤️"}
            </p>

            <Button
              onClick={resetQuiz}
              size="lg"
              className="bg-gradient-romantic hover:shadow-romantic"
            >
              Tentar Novamente
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
