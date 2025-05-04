
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        ref={heroRef} 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80)', 
          filter: 'brightness(0.6)'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tight animate-fade-in [animation-delay:300ms]">
            "HANDS THAT CARE"
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium mt-4 opacity-90 animate-fade-in [animation-delay:600ms]">
            NURTURING EXCELLENCE, INSPIRING TOMORROW
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="opacity-75"
        >
          <path d="M7 13l5 5 5-5"/>
          <path d="M7 7l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
