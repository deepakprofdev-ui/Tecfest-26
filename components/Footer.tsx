import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center mr-3">
                 <Terminal className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-wider">
                TECFEST<span className="text-cyan-400">'26</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tagore Engineering College's premier national level technical symposium. Igniting minds, inspiring innovation.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coordinators */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide">Coordinators</h4>
            <div className="space-y-4">
              <div>
                <p className="text-cyan-400 text-sm font-semibold uppercase">Faculty Coordinator</p>
                <p className="text-gray-300">Dr. S. Ramesh</p>
                <p className="text-gray-500 text-sm">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm font-semibold uppercase">Student Coordinator</p>
                <p className="text-gray-300">Arun Kumar</p>
                <p className="text-gray-500 text-sm">+91 91234 56789</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                <span className="text-gray-400 text-sm">
                  Tagore Engineering College,<br />
                  Rathinamangalam, Chennai - 600 127.
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-400 text-sm">tecfest26@tagore.edu.in</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-400 text-sm">044 - 1234 5678</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-48 bg-gray-800 border border-white/10 relative group">
            {/* Placeholder for Google Map iframe */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
               <span className="text-gray-500 flex flex-col items-center gap-2">
                 <MapPin className="w-8 h-8" />
                 View on Google Maps
               </span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5986872895237!2d80.14555831482161!3d12.93348999088078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0e1c456677%3A0x6c632833005822f7!2sTagore%20Engineering%20College!5e0!3m2!1sen!2sin!4v1628165842817!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
              className="opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2026 TECFEST. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">♥</span> by TEC Tech Team</p>
        </div>
      </div>
    </footer>
  );
};
