import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  site: [
    { label: 'Pricing', href: '#' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Resources', href: '#resources' },
  ],
  services: [
    { label: 'Health Questions', href: '#' },
    { label: 'Behavior Consulting', href: '#' },
    { label: 'Nutrition Advice', href: '#' },
    { label: 'Emergency Guidance', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: "Careers", href: '#', badge: "We're hiring!" },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  social: [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'Facebook', href: '#', icon: Facebook },
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Site */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-4">
              Site
            </h4>
            <ul className="space-y-3">
              {footerLinks.site.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-2"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-xs text-text-primary bg-cream-dark px-2 py-0.5">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary hover:border-text-primary transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-text-muted">
            © 2026 CatWise. All rights reserved.
          </p>
          <a 
            href="/" 
            className="font-mono text-lg font-bold text-text-primary tracking-tight"
          >
            CatWise
          </a>
        </div>
      </div>
    </footer>
  );
}
