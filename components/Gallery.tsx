import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using Picsum for placeholders, but styled to look "techy" via CSS filters if real images aren't available
  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/800?random=2", // Portrait
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
    "https://picsum.photos/600/800?random=6", // Portrait
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div 
            key={index}
            className={`relative group overflow-hidden rounded-xl cursor-pointer border border-white/5 ${index === 1 || index === 5 ? 'md:row-span-2' : ''}`}
            onClick={() => setSelectedImage(src)}
          >
            <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src={src} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
              <span className="text-white font-display text-lg">Event Highlights</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          />
        </div>
      )}
    </div>
  );
};
