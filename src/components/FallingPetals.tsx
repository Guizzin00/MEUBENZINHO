import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: number;
  rotation: number;
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatedPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 5}s`,
      size: 15 + Math.random() * 20,
      rotation: Math.random() * 360,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: '-50px',
            animation: `fall ${petal.animationDuration} linear infinite`,
            animationDelay: petal.animationDelay,
          }}
        >
          <div
            className="bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-60"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              transform: `rotate(${petal.rotation}deg)`,
              clipPath: 'ellipse(50% 70% at 50% 50%)',
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </div>
  );
};
