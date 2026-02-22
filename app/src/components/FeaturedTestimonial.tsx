import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function FeaturedTestimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-cream px-6 pb-16" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          className="border border-border bg-white overflow-hidden"
        >
          <div className="grid md:grid-cols-[40%_60%] gap-0">
            {/* Image */}
            <div className="relative overflow-hidden group">
              <img
                src="/images/testimonial-1.jpg"
                alt="Sarah Johnson with her cat Luna"
                className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-mono text-xl md:text-2xl font-semibold text-text-primary mb-4">
                Luna's Health Turned Around with CatWise
              </h3>
              
              <blockquote className="text-text-secondary leading-relaxed mb-6">
                "When Luna stopped eating, I was terrified. Within 4 hours, Dr. Martinez 
                helped me identify the issue and guided me through the next steps. CatWise 
                literally saved my cat's life."
              </blockquote>

              <div className="mb-6">
                <p className="font-mono text-sm font-semibold text-text-primary">
                  Sarah Johnson
                </p>
                <p className="text-sm text-text-muted">
                  Cat Mom to Luna
                </p>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:opacity-70 transition-opacity duration-150 group/link"
              >
                Read full story
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
