
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-eklavya-blue pb-2">About Eklavya</h3>
            <p className="text-gray-400 mb-4">
              An NGO dedicated to providing free primary education to needy children in underprivileged areas.
            </p>
            <img 
              src="/lovable-uploads/5e1dba39-fd0d-4bb3-94b9-79324e705f4c.png" 
              alt="Eklavya Logo" 
              className="h-16"
            />
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-eklavya-blue pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-eklavya-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#vision" className="hover:text-eklavya-blue transition-colors">Vision</a>
              </li>
              <li>
                <a href="#events" className="hover:text-eklavya-blue transition-colors">Events</a>
              </li>
              <li>
                <a href="#donate" className="hover:text-eklavya-blue transition-colors">Donate</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-eklavya-blue pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-eklavya-blue" />
                <a href="mailto:contact@eklavya.org" className="hover:text-eklavya-blue transition-colors">
                  contact@eklavya.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-eklavya-blue" />
                <a href="tel:+910123456789" className="hover:text-eklavya-blue transition-colors">
                  +91 0123 456 789
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-eklavya-blue pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-eklavya-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-eklavya-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-eklavya-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Eklavya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
