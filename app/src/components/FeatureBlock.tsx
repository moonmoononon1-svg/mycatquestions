import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Stethoscope, LineChart, Brain, AlertCircle } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Get Answers from Real Veterinarians',
    description: 'Skip the guesswork and conflicting online advice. Our network of licensed veterinarians and feline behaviorists provide evidence-based guidance tailored to your cat\'s unique situation.',
    link: 'Meet our veterinary team',
    imagePosition: 'right',
  },
  {
    icon: LineChart,
    title: 'Track Your Cat\'s Health Journey',
    description: 'Keep all your cat\'s health records, questions, and answers in one place. Monitor trends, track symptoms, and share comprehensive history with your local vet.',
    link: 'See how tracking works',
    imagePosition: 'left',
  },
  {
    icon: Brain,
    title: 'Understand Your Cat\'s Behavior',
    description: 'From litter box issues to aggression, our behaviorists help you decode what your cat is trying to tell you. Get personalized training plans and behavioral modification strategies.',
    link: 'Explore behavior solutions',
    imagePosition: 'right',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Guidance When You Need It',
    description: 'Not sure if it\'s an emergency? Our vets help you assess urgency and guide you on next steps. Peace of mind, available 24/7.',
    link: 'Learn about emergency support',
    imagePosition: 'left',
  },
];

function FeatureItem({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isImageLeft = feature.imagePosition === 'left';

  return (
    <div 
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
        index !== features.length - 1 ? 'mb-24 md:mb-32' : ''
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.7, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className={isImageLeft ? 'md:order-2' : 'md:order-1'}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-cream-dark mb-6">
          <feature.icon className="w-6 h-6 text-text-primary" />
        </div>

        <h3 className="font-mono text-xl md:text-2xl font-semibold text-text-primary mb-4">
          {feature.title}
        </h3>

        <p className="text-text-secondary leading-relaxed mb-6">
          {feature.description}
        </p>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:opacity-70 transition-opacity duration-150 group/link"
        >
          {feature.link}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </motion.div>

      {/* Visual Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.7, 
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className={isImageLeft ? 'md:order-1' : 'md:order-2'}
      >
        <div className="aspect-[4/3] bg-cream-dark border border-border flex items-center justify-center">
          <feature.icon className="w-16 h-16 text-text-muted/30" />
        </div>
      </motion.div>
    </div>
  );
}

export function FeatureBlock() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {features.map((feature, index) => (
          <FeatureItem key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
