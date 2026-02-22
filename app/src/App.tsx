import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedTestimonial } from './components/FeaturedTestimonial';
import { TrustBanner } from './components/TrustBanner';
import { FeatureBlock } from './components/FeatureBlock';
import { TestimonialsGrid } from './components/TestimonialsGrid';
import { TeamGrid } from './components/TeamGrid';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTestimonial />
        <TrustBanner />
        <FeatureBlock />
        <TestimonialsGrid />
        <TeamGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
