
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventData {
  id: number;
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
}

const events: EventData[] = [
  {
    id: 1,
    title: "Annual Education Drive",
    description: "Providing school supplies and resources to underprivileged students.",
    extendedDescription: "Our annual education drive aims to bridge the educational gap by providing essential learning resources, including books, stationery, and digital tools, to children from underprivileged backgrounds. This initiative helps ensure that every child has access to quality educational materials.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Teacher Training Workshop",
    description: "Enhancing teaching skills for volunteer educators in our programs.",
    extendedDescription: "Our teacher training workshops equip volunteer educators with modern teaching methodologies, classroom management techniques, and child psychology principles. These sessions enhance the quality of education delivered in our programs and create a more engaging learning environment for children.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Community Health Camp",
    description: "Free health check-ups and awareness sessions for community members.",
    extendedDescription: "Our community health camps provide free medical consultations, basic health check-ups, and medications to community members who lack access to healthcare facilities. The camps also include health awareness sessions on various topics like nutrition, hygiene, and disease prevention.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80"
  }
];

const EventsSlider = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    setExpandedEvent(null);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    setExpandedEvent(null);
  };

  const toggleEventDetails = (eventId: number) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };

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

  const currentEvent = events[currentEventIndex];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Events</h2>

        <div 
          ref={sectionRef} 
          className="section-visible max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={currentEvent.image} 
                alt={currentEvent.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-3 text-eklavya-blue">{currentEvent.title}</h3>
              <p className="text-gray-700 mb-6">{currentEvent.description}</p>
              
              <Button 
                onClick={() => toggleEventDetails(currentEvent.id)}
                variant="outline" 
                className="mb-4 border-eklavya-blue text-eklavya-blue hover:bg-eklavya-blue hover:text-white transition-all"
              >
                {expandedEvent === currentEvent.id ? 'See Less' : 'See More'}
              </Button>
              
              {expandedEvent === currentEvent.id && (
                <div className="animate-fade-in">
                  <p className="text-gray-700 mb-4">{currentEvent.extendedDescription}</p>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="text-gray-700 hover:text-eklavya-blue transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-eklavya-blue transition-colors">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between p-4 bg-gray-100">
            <Button 
              onClick={prevEvent} 
              variant="ghost" 
              className="text-eklavya-blue hover:bg-eklavya-blue hover:text-white"
            >
              <ChevronLeft size={20} />
              <span className="ml-1">Previous</span>
            </Button>
            <Button 
              onClick={nextEvent} 
              variant="ghost" 
              className="text-eklavya-blue hover:bg-eklavya-blue hover:text-white"
            >
              <span className="mr-1">Next</span>
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;
