import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cat, Star, Clock, Award, Heart, Shield } from 'lucide-react';

const trustIndicators = [
  { icon: Cat, label: '10,000+', sublabel: 'Cats Helped' },
  { icon: Star, label: '500+', sublabel: '5-Star Reviews' },
  { icon: Clock, label: '24hr', sublabel: 'Avg Response' },
  { icon: Award, label: 'Board-Certified', sublabel: 'Veterinarians' },
  { icon: Heart, label: 'Feline', sublabel: 'Specialists' },
  { icon: Shield, label: 'Money-Back', sublabel: 'Guarantee' },
];

export function TrustBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="bg-cream py-12 px-6 border-y border-border" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xs uppercase tracking-wider text-text-muted mb-8"
        >
          Trusted by Cat Parents Worldwide
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col items-center gap-2 group"
            >
              <item.icon className="w-6 h-6 text-text-muted group-hover:text-text-primary transition-colors duration-200" />
              <div className="text-center">
                <p className="font-mono text-sm font-semibold text-text-primary">
                  {item.label}
                </p>
                <p className="text-xs text-text-muted">
                  {item.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
