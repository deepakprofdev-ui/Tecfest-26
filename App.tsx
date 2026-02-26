import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { EventCard } from './components/EventCard';
import { Leaderboard } from './components/Leaderboard';
import { RegistrationForm } from './components/RegistrationForm';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { TECH_EVENTS, NON_TECH_EVENTS, SCHEDULE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <Hero />

      {/* About Section */}
      <Section id="about" title="About The Event" subtitle="Who We Are">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              TECFEST'26 is the flagship national-level technical symposium organized by Tagore Engineering College. It is a convergence of brilliant minds, innovative ideas, and cutting-edge technology.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to provide a platform for students to showcase their technical prowess, learn from industry experts, and compete with the best talent across the nation. With a vision to "Innovate, Integrate, and Inspire," we aim to bridge the gap between academic learning and industrial application.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="text-white font-bold text-2xl">20+</h4>
                <span className="text-gray-500 text-sm">Events</span>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-white font-bold text-2xl">1000+</h4>
                <span className="text-gray-500 text-sm">Participants</span>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-white font-bold text-2xl">₹50K</h4>
                <span className="text-gray-500 text-sm">Prize Pool</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
             <img 
               src="https://picsum.photos/800/600?random=10" 
               alt="Tagore Engineering College Campus" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </Section>

      {/* Events Section */}
      <Section id="events" title="Technical Events" subtitle="Showcase Your Skills" className="bg-black/40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="mt-24 mb-8 text-center">
          <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm block mb-4">
             Fun & Games
          </span>
          <h2 className="text-4xl font-display font-bold text-white">
            Non-Technical Events
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {NON_TECH_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      {/* Leaderboard Section */}
      <Section id="leaderboard" title="Live Leaderboard" subtitle="Top Performers">
        <Leaderboard />
      </Section>

      {/* Schedule Section */}
      <Section id="schedule" title="Event Schedule" subtitle="Timeline" className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
         <div className="max-w-4xl mx-auto">
           <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pb-4">
             {SCHEDULE.map((item, index) => (
               <div key={item.id} className="relative pl-8 md:pl-0 md:flex md:gap-12 group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full border border-white/20 transition-all duration-300 group-hover:scale-150 ${
                    item.category === 'Morning' ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.6)]'
                  }`}></div>
                  
                  {/* Time (Left on Desktop) */}
                  <div className="md:w-1/2 md:text-right md:pr-12 mb-2 md:mb-0">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                       item.category === 'Morning' ? 'bg-cyan-900/30 text-cyan-400' : 'bg-purple-900/30 text-purple-400'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                  
                  {/* Event (Right on Desktop) */}
                  <div className="md:w-1/2 md:pl-12">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{item.event}</h4>
                  </div>
               </div>
             ))}
           </div>
         </div>
      </Section>

      {/* Registration Section */}
      <Section id="register" title="Get Your Pass" subtitle="Registration">
        <RegistrationForm />
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Gallery" subtitle="Past Memories">
        <Gallery />
      </Section>

      <Footer />
    </div>
  );
};

export default App;
