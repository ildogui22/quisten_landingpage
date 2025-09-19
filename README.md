# Quisten Landing Page

A modern, responsive React landing page for Quisten - the evidence-based smoking cessation mobile app.

## Features

- 🎨 **Modern Design**: Inspired by Riley app with calming wellness aesthetics
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ♿ **Accessible**: WCAG 2.1 AA compliant with proper semantic HTML
- ⚡ **Fast Performance**: Lightweight with optimized assets
- 🎭 **Interactive**: Smooth animations and engaging user interactions
- 🎯 **Conversion-Focused**: Strategic CTAs and social proof

## Design System

Built with Quisten's therapeutic design system:
- **Colors**: Calming wellness palette (#8BC34A green, #4A90E2 blue, #F8F8F8 background)
- **Typography**: Inter (headings) + Nunito Sans (body) for therapeutic reading experience
- **Components**: Card-based design with soft shadows and rounded corners
- **Gradients**: Subtle gradients inspired by Riley app for visual appeal

## Sections

1. **Hero**: Compelling headline with phone mockup and CTA buttons
2. **Features**: Interactive showcase of cue exposure therapy, mindfulness, audio support, and progress tracking
3. **How It Works**: Timeline component showing 4-step journey to freedom
4. **Testimonials**: Social proof with rotating testimonials and success metrics
5. **Download**: App store buttons, pricing plans, and final conversion CTA
6. **Footer**: Links, newsletter signup, social media, and compliance badges

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

1. Navigate to the landing page directory:
```bash
cd landing_page
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

The app will run on `http://localhost:3000`

### Building for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## Project Structure

```
landing_page/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Download.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Colors
Update CSS custom properties in `src/styles/variables.css`:
```css
:root {
  --wellness-accent: #8BC34A;
  --wellness-blue: #4A90E2;
  --wellness-bg: #F8F8F8;
  /* ... */
}
```

### Typography
Fonts are loaded from Google Fonts in `public/index.html`. Update font families in `variables.css`.

### Content
Component content can be easily updated by modifying the data objects within each component file.

## Performance

- Uses CSS custom properties for consistent theming
- Implements intersection observers for scroll animations
- Optimized images and minimal JavaScript bundle
- Mobile-first responsive design

## Accessibility

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

Private - Quisten Team Only

## Contact

For questions about this landing page, contact the Quisten development team.