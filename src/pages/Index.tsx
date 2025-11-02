import { useState, useRef } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { ProposalSection } from "@/components/ProposalSection";

const Index = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <FloatingHearts />
      
      <HeroSection onContinue={scrollToGallery} />
      
      <div ref={galleryRef}>
        <GallerySection />
      </div>
      
      <ReasonsSection />
      
      <ProposalSection />
      
      <footer className="py-8 text-center bg-gradient-subtle">
        <p className="text-lg text-muted-foreground font-romantic">
          Feito com todo o amor do mundo 💘
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Por alguém que te ama muito ❤️
        </p>
      </footer>
    </div>
  );
};

export default Index;
