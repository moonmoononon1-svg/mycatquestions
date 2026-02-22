import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-[80vh] bg-cream pt-[120px] pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[700px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="font-mono text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight lg:leading-[64px] tracking-tight text-text-primary uppercase"
          >
            Clear Answers for, Everyday Cat Quirks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="mt-6 text-lg leading-7 text-text-secondary max-w-[620px]"
          >
            Your go-to resource for everyday cat behavior, health, and happiness.
            We turn your daily feline questions into actionable, easy-to-understand advice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="mt-8 flex flex-wrap gap-4"
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
              Browse
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
