import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set date to 30 days from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Particles (Simulated) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
          National Level Technical Symposium
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-6 tracking-tighter leading-tight">
          TEC<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">FEST'26</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light">
          "Innovate. Integrate. Inspire."
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300 mb-12">
           <div className="flex items-center gap-2">
             <Calendar className="w-5 h-5 text-purple-400" />
             <span className="font-medium">March 15-16, 2026</span>
           </div>
           <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-600"></div>
           <div className="flex items-center gap-2">
             <MapPin className="w-5 h-5 text-cyan-400" />
             <span className="font-medium">Tagore Engineering College, Chennai</span>
           </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-display font-bold text-white mb-1">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToRegister}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            <span className="relative z-10 flex items-center">
              Register Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full z-20"></div>
          </button>
          
          <button 
            onClick={scrollToEvents}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors"
          >
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};