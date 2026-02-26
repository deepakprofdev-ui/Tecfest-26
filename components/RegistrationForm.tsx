import React, { useState } from 'react';
import { TECH_EVENTS, NON_TECH_EVENTS } from '../constants';
import { CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const RegistrationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
    event: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Access environment variables with fallbacks for immediate functionality
      // This ensures the app works even if the build environment doesn't inject .env vars correctly
      const env = (import.meta as any).env || {};
      
      const serviceId = env.VITE_EMAIL_SERVICE || 'service_qelcwkf';
      const templateId = env.VITE_EMAIL_TEMPLATE || 'template_qunwjy4';
      const publicKey = env.VITE_EMAIL_PUBLIC || 'g54TyTbjUt099u_G9';

      if (!serviceId || !templateId || !publicKey) {
         throw new Error("Missing EmailJS environment variables");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          college: formData.college,
          phone: formData.phone,
          event: formData.event,
        },
        publicKey
      );

      setSuccess(true);
    } catch (error) {
      alert("Failed to send confirmation email. Please check your configuration.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (success) {
    return (
      <div className="glass-panel p-10 rounded-2xl border border-green-500/30 text-center max-w-lg mx-auto">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
        <p className="text-gray-400 mb-6">
          Thank you for registering for TECFEST'26. A confirmation email has been sent to {formData.email}.
        </p>
        <button 
          onClick={() => {
            setSuccess(false);
            setFormData({ name: '', college: '', email: '', phone: '', event: '' });
          }}
          className="text-cyan-400 hover:text-cyan-300 font-medium"
        >
          Register for another event
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">College Name</label>
            <input 
              required
              type="text" 
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Tagore Engineering College"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
            <input 
              required
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-400 mb-2">Select Event</label>
           <div className="relative">
             <select 
               required
               name="event"
               value={formData.event}
               onChange={handleChange}
               className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
             >
               <option value="" disabled>Choose an event to participate</option>
               <optgroup label="Technical Events">
                 {TECH_EVENTS.map(e => <option key={e.id} value={e.title}>{e.title}</option>)}
               </optgroup>
               <optgroup label="Non-Technical Events">
                 {NON_TECH_EVENTS.map(e => <option key={e.id} value={e.title}>{e.title}</option>)}
               </optgroup>
             </select>
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
               <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
             </div>
           </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" /> Processing...
            </>
          ) : (
            'Complete Registration'
          )}
        </button>
      </form>
    </div>
  );
};