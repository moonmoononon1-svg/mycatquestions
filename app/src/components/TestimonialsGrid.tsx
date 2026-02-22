import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "The behaviorist helped me understand why my cat was suddenly aggressive. Now we're best friends again!",
    author: 'Michael Chen',
    role: 'Cat Dad to Whiskers',
  },
  {
    quote: "I was spending hundreds on vet visits for minor concerns. CatWise saves me money and gives me peace of mind.",
    author: 'Emily Rodriguez',
    role: 'Cat Mom to Milo & Otis',
  },
  {
    quote: "The dietary advice completely transformed my senior cat's energy levels. She acts like a kitten again!",
    author: 'David Park',
    role: 'Cat Dad to Princess',
  },
  {
    quote: "When my cat had a reaction to medication, the vet guided me through it step by step at 2 AM.",
    author: 'Lisa Thompson',
    role: 'Cat Mom to Shadow',
  },
  {
    quote: "The health tracking feature helped my vet diagnose a chronic condition we would have missed otherwise.",
    author: 'James Wilson',
    role: 'Cat Dad to Ginger',
  },
  {
    quote: "Best investment I've made for my cats. The advice is always thorough, compassionate, and actionable.",
    author: 'Amanda Foster',
    role: 'Cat Mom to 4 rescues',
  },
];

export function TestimonialsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="bg-cream-dark py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-mono text-3xl md:text-4xl font-bold text-text-primary text-center mb-16"
        >
          Cat Parents Love CatWise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="bg-white border border-border p-8 hover:-translate-y-1 hover:border-text-primary/30 transition-all duration-300"
            >
              <blockquote className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div>
                <p className="font-mono text-sm font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:opacity-70 transition-opacity duration-150 group/link"
          >
            Read more success stories
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
