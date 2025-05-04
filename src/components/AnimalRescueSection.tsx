
import { useEffect, useRef } from 'react';

const AnimalRescueSection = () => {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Animal Rescue</h2>
        
        <div 
          ref={sectionRef} 
          className="section-visible max-w-5xl mx-auto bg-eklavya-blue bg-opacity-5 rounded-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6 md:p-10">
              <h3 className="text-2xl font-bold mb-4 text-eklavya-blue">We Care For All</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Beyond our focus on education, Eklavya is deeply committed to animal welfare. 
                Our rescue initiatives provide care, shelter, and medical attention to injured 
                and abandoned animals in our community. We believe in nurturing compassion for 
                all living beings as part of our holistic approach to social responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through dedicated volunteers and partnerships with local veterinarians, 
                we've successfully rehabilitated numerous animals and found forever homes 
                for many. Join us in our mission to create a more humane environment for 
                our animal friends.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=900&q=80" 
                alt="Animal Rescue" 
                className="w-full h-full object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalRescueSection;
