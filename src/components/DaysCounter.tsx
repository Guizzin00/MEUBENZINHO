import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export const DaysCounter = () => {
  const [days, setDays] = useState(0);
  
  const startDate = new Date("2025-07-04");

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-romantic rounded-3xl p-8 shadow-romantic text-white text-center max-w-md mx-auto"
    >
      <Calendar className="w-12 h-12 mx-auto mb-4" />
      <div className="text-6xl font-bold mb-2">{days}</div>
      <p className="text-xl font-romantic">dias juntos</p>
      <p className="text-sm mt-2 opacity-90">e contando...</p>
    </motion.div>
  );
};
