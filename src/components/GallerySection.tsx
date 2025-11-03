import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { url } from "inspector";
import fotolinda from "@/assets/fotolinda.jpeg";
import fotolinda2 from "@/assets/fotolinda2.jpeg";
import fotolinda3 from "@/assets/fotolinda3.jpeg";
import videofofo from "@/assets/1103.gif";

const photos = [
  {
    url: fotolinda2,
    caption: "Meus dias são mais alegres com você ! 💕",
  },
  {
    url: fotolinda,
    caption: "O sorriso que mudou meu mundo 😍",
  },
  {
    url: fotolinda3,
    caption: "Roube a princesa mais linda da Disney ✨",
  },
  {
    url: videofofo,
    caption: "Nunca vai deixar de ser minha favorita TE AMO ! 🌟",
  },
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground font-romantic">
            Momentos que ficam guardados no coração
          </p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-romantic aspect-[4/3]">
            <img
              src={photos[currentIndex].url}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white text-xl md:text-2xl font-romantic text-center">
                {photos[currentIndex].caption}
              </p>
            </div>
          </div>

          <Button
            onClick={prevPhoto}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextPhoto}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
