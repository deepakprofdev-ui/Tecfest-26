import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
             {subtitle && (
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block">
                {title}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
