
import { useEffect, useRef } from 'react';

const IntroductionSection = () => {
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
        <div 
          ref={sectionRef} 
          className="l-shape-container section-visible max-w-3xl mx-auto bg-white p-10 shadow-md rounded-md"
        >
          <div className="l-shape-top-right"></div>
          <div className="l-shape-bottom-left"></div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Club</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              An NGO of Haldia Institute of Technology, marching forward with the thirst of providing free 
              primary education to needy children in underprivileged areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
