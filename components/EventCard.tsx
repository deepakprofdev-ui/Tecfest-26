import React, { useState } from 'react';
import { Event } from '../types';
import { Monitor, Cpu, Brain, Code, Gamepad2, Search, Zap, Trophy, X, Clock, Users } from 'lucide-react';

const IconMap: Record<string, React.FC<any>> = {
  Monitor, Cpu, Brain, Code, Gamepad2, Search, Zap, Trophy
};

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [showModal, setShowModal] = useState(false);
  const Icon = IconMap[event.iconName] || Monitor;

  const handleRegister = () => {
    setShowModal(false);
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div 
        className="group glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-cyan-400 transition-colors">
            {event.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {event.shortDescription}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium border-t border-white/10 pt-4">
             <span className="flex items-center gap-1">
               <Users className="w-3 h-3" /> {event.teamSize} Team
             </span>
             <span className="flex items-center gap-1">
               <Clock className="w-3 h-3" /> {event.duration}
             </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-[#111] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out]">
             {/* Header */}
             <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-6 border-b border-white/5 flex justify-between items-center">
               <div className="flex items-center gap-4">
                 <div className="p-2 bg-white/5 rounded-lg">
                   <Icon className="w-6 h-6 text-cyan-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white font-display">{event.title}</h3>
               </div>
               <button 
                 onClick={() => setShowModal(false)}
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>

             {/* Content */}
             <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
               <div className="mb-6">
                 <h4 className="text-cyan-400 font-bold mb-2 uppercase text-sm tracking-wider">Description</h4>
                 <p className="text-gray-300 leading-relaxed">{event.description}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <h4 className="text-purple-400 font-bold mb-2 uppercase text-sm tracking-wider">Details</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" /> Team Size: <span className="text-white">{event.teamSize}</span>
                      </li>
                      <li className="flex items-center gap-2">
                         <Clock className="w-4 h-4 text-gray-500" /> Duration: <span className="text-white">{event.duration}</span>
                      </li>
                    </ul>
                 </div>
                 
                 <div>
                    <h4 className="text-purple-400 font-bold mb-2 uppercase text-sm tracking-wider">Rules</h4>
                    <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
                      {event.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                 </div>
               </div>

               <div className="flex justify-end pt-4 border-t border-white/10">
                 <button 
                   onClick={handleRegister}
                   className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105"
                 >
                   Register for {event.title}
                 </button>
               </div>
             </div>
          </div>
        </div>
      )}
    </>
  );
};
