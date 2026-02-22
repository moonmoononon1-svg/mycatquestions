# CatWise - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
- `button` - Primary and secondary buttons
- `card` - Testimonial cards, feature cards
- `navigation-menu` - Main navigation
- `separator` - Divider lines

### Third-Party Components
- None required - custom implementations preferred for this design

### Custom Components
1. `Navbar` - Fixed navigation with scroll behavior
2. `Hero` - Large typography hero section
3. `FeaturedTestimonial` - Two-column testimonial card
4. `TrustBanner` - Logo/trust indicator row
5. `FeatureBlock` - Alternating feature sections
6. `TestimonialsGrid` - Grid of testimonial cards
7. `TeamGrid` - Team member cards
8. `CTASection` - Call-to-action section
9. `Footer` - Multi-column footer
10. `ScrollReveal` - Reusable scroll animation wrapper

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load stagger | Framer Motion | AnimatePresence + staggerChildren | Medium |
| Scroll reveal (fade + slide) | Framer Motion | useInView + motion.div | Medium |
| Navbar scroll background | React hooks | useState + scroll listener | Low |
| Button hover fill | CSS/Tailwind | group-hover + pseudo-element | Low |
| Card hover lift | CSS/Tailwind | hover:translate-y + transition | Low |
| Link underline grow | CSS/Tailwind | after pseudo-element + scale | Low |
| Logo grayscale hover | CSS/Tailwind | filter + transition | Low |
| Image zoom on hover | CSS/Tailwind | hover:scale + overflow-hidden | Low |
| Staggered grid reveal | Framer Motion | variants + staggerChildren | Medium |

## Animation Library Choices

**Primary: Framer Motion**
- Best for React component animations
- Built-in scroll detection (useInView)
- Stagger animations with variants
- AnimatePresence for mount/unmount

**Secondary: CSS/Tailwind**
- Simple hover states
- Transitions
- Transform animations

## Project File Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── navigation-menu.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedTestimonial.tsx
│   │   ├── TrustBanner.tsx
│   │   ├── FeatureBlock.tsx
│   │   ├── TestimonialsGrid.tsx
│   │   ├── TeamGrid.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollReveal.tsx
│   ├── sections/
│   │   └── (sections if needed for organization)
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
│       ├── testimonial-1.jpg
│       ├── vet-1.jpg
│       ├── vet-2.jpg
│       ├── vet-3.jpg
│       └── vet-4.jpg
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "@radix-ui/react-navigation-menu": "^1.x"
  }
}
```

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#FAF9F7',
        'background-beige': '#F5F3EF',
        foreground: '#1A1A1A',
        'text-secondary': '#4A4A4A',
        'text-muted': '#6B6B6B',
        border: '#E5E5E5',
      },
      fontFamily: {
        mono: ['Space Mono', 'Courier New', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

## Responsive Breakpoints

- Desktop: 1200px+ (default)
- Tablet: 768px - 1199px (md:)
- Mobile: < 768px (sm:)

## Performance Considerations

1. Use `will-change: transform` on animated elements
2. Lazy load images below the fold
3. Use CSS transforms instead of layout properties
4. Implement `prefers-reduced-motion` support
5. Optimize images before adding to public folder
