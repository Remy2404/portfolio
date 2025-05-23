# Cyberpunk 2077-Inspired Portfolio Theme

This portfolio features a comprehensive Cyberpunk 2077-inspired UI design system with the following features:

## 🎨 Color Scheme
- **Neon Pink (`#FF2A6D`)** - Primary accent color for buttons, highlights
- **Electric Blue (`#05D9E8`)** - Secondary accent for text and details
- **Dark Purple (`#1A0033`)** - Main background color
- **Cyber Yellow (`#F9F002`)** - Warning/highlight elements
- **Matrix Green (`#00FF41`)** - Terminal text and code elements

## 🚀 Key Features

### Glowing Neon Effects
- Text shadows for neon text effects
- Box shadows for highlighting elements
- Animated glowing effects

### Cyberpunk Terminal Animations
- Typewriter effect in the hero section
- Animated scanlines across interfaces
- Terminal-style text displays

### Interactive Elements
- Scale and glow animations on hover
- Custom animated buttons with corner brackets
- Card hover animations

### Skill Visualization
- Gradient progress bars
- Animated width transitions
- Hover-expandable details

### CRT Monitor Effects
- Subtle flicker animations
- Grid line backgrounds
- Scanline overlays

## 🧩 Components
The theme includes these custom Cyberpunk-styled components:

- `CyberButton` - Stylized buttons with corner brackets
- `CyberCard` - Cards with glowing borders and hover effects
- `CyberTerminal` - Terminal-like text displays
- `CyberBadge` - Status indicators and tags

## 💻 Usage
Import any of the components from `CyberpunkElements.tsx`:

```jsx
import { CyberButton, CyberCard } from './components/CyberpunkElements';

// Use in your components
<CyberButton variant="primary">ACTIVATE</CyberButton>

<CyberCard glowColor="blue">
  <div className="p-6">Card content</div>
</CyberCard>
```

## 🎮 Utility Classes
The theme provides several utility classes:

- `.cyberpunk-glitch` - Text glitch effect
- `.cyberpunk-crt` - CRT monitor effect with scanlines
- `.cyberpunk-pixelated-border` - Pixelated border decoration
- `.cyberpunk-matrix-bg` - Matrix-style falling code effect
- `.bg-noise` - Digital noise background texture

## 📋 Implementation
This theme is implemented using:
- TailwindCSS for styling
- Framer Motion for animations
- React/TypeScript for components
