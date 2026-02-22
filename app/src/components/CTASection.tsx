import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-cream py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
        >
          Your Cat Deserves the Best Care
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-text-secondary text-lg max-w-xl mx-auto mb-10"
        >
          Join thousands of cat parents who trust CatWise for expert advice and peace of mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button 
            className="font-mono text-sm uppercase tracking-wider bg-text-primary text-white hover:bg-text-secondary px-8 py-6 transition-all duration-200"
          >
            Ask a Question
          </Button>
          <Button 
            variant="outline"
            className="font-mono text-sm uppercase tracking-wider border-text-primary text-text-primary hover:bg-text-primary hover:text-white px-8 py-6 transition-all duration-200"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
