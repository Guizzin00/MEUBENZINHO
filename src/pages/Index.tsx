import { useRef } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { FallingPetals } from "@/components/FallingPetals";
import { MusicPlayer } from "@/components/MusicPlayer";
import { HeroSection } from "@/components/HeroSection";
import { DaysCounter } from "@/components/DaysCounter";
import { GallerySection } from "@/components/GallerySection";
import { Timeline } from "@/components/Timeline";
import { ReasonsSection } from "@/components/ReasonsSection";
import { LoveLetter } from "@/components/LoveLetter";
import { PromisesSection } from "@/components/PromisesSection";
import { QuizSection } from "@/components/QuizSection";
import { ProposalSection } from "@/components/ProposalSection";

const Index = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <FloatingHearts />
      <FallingPetals />
      <MusicPlayer />
      
      <HeroSection onContinue={scrollToGallery} />
      
      <div className="py-20">
        <DaysCounter />
      </div>
      
      <div ref={galleryRef}>
        <GallerySection />
      </div>
      
      <Timeline />
      
      <ReasonsSection />
      
      <LoveLetter />
      
      <PromisesSection />
      
      <QuizSection />
      
      <ProposalSection />
      
      <footer className="py-12 text-center bg-gradient-subtle border-t border-border">
        <p className="text-2xl text-foreground font-romantic mb-2">
          Feito com todo o amor do mundo 💘
        </p>
        <p className="text-lg text-muted-foreground">
          Por alguém que te ama muito ❤️
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          {new Date().getFullYear()} - O ano em que tudo começou
        </p>
      </footer>
    </div>
  );
};

export default Index;
