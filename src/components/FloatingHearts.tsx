import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: number;
  opacity: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
      size: 20 + Math.random() * 30,
      opacity: 0.1 + Math.random() * 0.3,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: heart.left,
            bottom: '-50px',
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
            opacity: heart.opacity,
          }}
        >
          <Heart
            size={heart.size}
            className="text-primary fill-primary"
            style={{
              filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.5))',
            }}
          />
        </div>
      ))}
    </div>
  );
};
