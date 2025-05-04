
import { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, School } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  label: string;
  count: number;
  delay: number;
}

const StatItem = ({ icon, label, count, delay }: StatProps) => {
  const [displayCount, setDisplayCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              animateCount();
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [delay, hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(progress * count);
      
      if (frame === totalFrames) {
        setDisplayCount(count);
        clearInterval(counter);
      } else {
        setDisplayCount(currentCount);
      }
    }, frameDuration);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-eklavya-blue mb-4">
        {icon}
      </div>
      <div 
        ref={countRef} 
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 animate-counter"
      >
        {displayCount}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
        
        <div 
          ref={sectionRef} 
          className="section-visible max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <StatItem 
            icon={<Users className="w-12 h-12" />}
            label="Total Volunteers"
            count={105}
            delay={0}
          />
          <StatItem 
            icon={<GraduationCap className="w-12 h-12" />}
            label="Total Teachers"
            count={106}
            delay={200}
          />
          <StatItem 
            icon={<School className="w-12 h-12" />}
            label="Total Students"
            count={105}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
