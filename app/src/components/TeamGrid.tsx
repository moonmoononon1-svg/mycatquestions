import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Dr. Jennifer Martinez',
    role: 'DVM, Feline Specialist',
    image: '/images/vet-1.jpg',
  },
  {
    name: 'Dr. Robert Kim',
    role: 'DVM, Veterinary Behaviorist',
    image: '/images/vet-2.jpg',
  },
  {
    name: 'Dr. Sarah Williams',
    role: 'DVM, Internal Medicine',
    image: '/images/vet-3.jpg',
  },
  {
    name: 'Dr. Michael Torres',
    role: 'DVM, Emergency Medicine',
    image: '/images/vet-4.jpg',
  },
];

export function TeamGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Veterinary Experts
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Board-certified professionals dedicated to feline health
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center group"
            >
              <div className="relative overflow-hidden mb-4 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-mono text-sm font-semibold text-text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-text-muted">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
