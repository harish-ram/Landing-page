# Cloud Cost Optimizer - Landing Page

A modern, responsive SaaS landing page for Cloud Cost Optimizer, built with React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Modern SaaS UI**: Clean, professional design with blue/teal color scheme
- **Smooth Animations**: Framer Motion animations throughout for engaging interactions
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: Semantic HTML and accessible components

## Sections Included

1. **Navbar** - Fixed navigation with smooth scroll links and mobile menu
2. **Hero Section** - Eye-catching headline with interactive dashboard mockup
3. **Cloud Logos** - AWS, GCP, Azure provider logos with hover effects
4. **Features** - Four key features with icons and descriptions
5. **How It Works** - Three-step process visualization
6. **Savings Calculator** - Interactive slider to calculate potential savings
7. **Testimonials** - Three client testimonials with ratings
8. **Pricing** - Three pricing tiers with feature comparison
9. **Footer** - Comprehensive footer with links and social media

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Production Build

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CloudLogos.jsx
│   ├── Features.jsx
│   ├── HowItWorks.jsx
│   ├── Calculator.jsx
│   ├── Testimonials.jsx
│   ├── Pricing.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: '#0099FF',
  secondary: '#00D4FF',
  dark: '#0F1419',
}
```

### Content

Update content directly in component files:
- Headlines and descriptions in each section
- Pricing information in `Pricing.jsx`
- Features list in `Features.jsx`
- Testimonials in `Testimonials.jsx`

### Brand

Replace the logo placeholder in `Navbar.jsx` with your actual logo:
```jsx
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
  {/* Your logo here */}
</div>
```

## Performance

- **Gzip Size**: ~88KB (JavaScript), ~4.35KB (CSS)
- **Optimizations**: Code splitting, lazy loading images, CSS minification
- **Lighthouse Ready**: Optimized for performance, accessibility, and SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For questions or issues, please open an issue on GitHub.
