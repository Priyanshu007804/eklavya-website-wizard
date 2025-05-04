
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-8">
          <a href="#home" className="flex items-center gap-2">
            <img src="/lovable-uploads/5e1dba39-fd0d-4bb3-94b9-79324e705f4c.png" alt="Eklavya Logo" className="h-12 md:h-14" />
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-800 hover:text-eklavya-blue transition-colors font-medium">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-eklavya-blue transition-colors font-medium">
                About Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#members" className="w-full">Members</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#vision" className="w-full">Vision</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#mission" className="w-full">Mission</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-eklavya-blue transition-colors font-medium">
                Media <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#events" className="w-full">Events</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#contact-us" className="w-full">Contact Us</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <Button 
          className="bg-eklavya-blue hover:bg-eklavya-dark-blue transition-colors shadow-md hover:shadow-lg" 
          href="#donate"
        >
          Donate Us
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
