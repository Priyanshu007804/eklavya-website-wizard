
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import EventsSlider from '@/components/EventsSlider';
import StatsSection from '@/components/StatsSection';
import AnimalRescueSection from '@/components/AnimalRescueSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <EventsSlider />
      <StatsSection />
      <AnimalRescueSection />
      <Footer />
    </div>
  );
};

export default Index;
