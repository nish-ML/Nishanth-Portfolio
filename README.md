# Nishanth M M - Portfolio

A modern, premium dark-themed portfolio showcasing AI/ML projects, skills, and professional experience.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with React + Vite
- 🎨 **Premium Dark Theme** - Professional design with blue gradient accents
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- ♿ **Accessible** - WCAG compliant with proper focus states
- 🎯 **Resume-Based Content** - All information directly from resume

## 🎨 Design System

### Color Palette
- **Background**: #0F172A (Slate 950)
- **Primary**: #2563EB (Blue 600)
- **Secondary**: #38BDF8 (Cyan 400)
- **Text**: White & Gray shades

### Typography
- Modern, clean sans-serif font stack
- Bold headings with gradient effects
- Smooth animations and transitions

## 📦 Tech Stack

### Core
- React 19
- Vite 8
- Tailwind CSS 4

### Animations
- Framer Motion
- GSAP
- Lenis (Smooth Scroll)

### Icons
- React Icons

## 🛠️ Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── about/
│   │   └── About.jsx
│   ├── achievements/
│   │   └── Achievements.jsx
│   ├── certificates/
│   │   └── Certificates.jsx
│   ├── contact/
│   │   └── Contact.jsx
│   ├── experience/
│   │   └── Experience.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── hero/
│   │   └── Hero.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── LoaderScreen.jsx
│   ├── projects/
│   │   └── Projects.jsx
│   └── skills/
│       └── Skills.jsx
├── data/
│   ├── portfolio.js     # Personal info, skills, experience, etc.
│   └── projects.js      # Project details
├── hooks/
│   ├── useGsapReveal.js
│   └── useLenisSmoothScroll.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 📝 Content Management

All content is managed through two main files:

### `src/data/portfolio.js`
Contains:
- Navigation links
- Personal information (name, title, contact details)
- Education details
- About section content
- Skills by category
- Work experience
- Certifications
- Achievements

### `src/data/projects.js`
Contains:
- Project details
- Features
- Tech stack
- Images
- Links

## 🎯 Sections

1. **Hero** - Introduction with profile image and CTA buttons
2. **About** - Personal introduction and education details
3. **Skills** - Animated skill cards organized by category
4. **Projects** - Featured projects with details and tech stack
5. **Experience** - Professional timeline with responsibilities
6. **Certifications** - Professional certifications and courses
7. **Achievements** - Notable accomplishments and recognitions
8. **Contact** - Contact information and social links
9. **Footer** - Quick links and copyright

## 🎨 Customization

### Update Personal Information
Edit `src/data/portfolio.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  // ... other details
};
```

### Update Projects
Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    // ... other details
  },
];
```

### Change Colors
Edit `src/index.css`:
```css
:root {
  --bg-primary: #0F172A;
  --primary: #2563EB;
  --secondary: #38BDF8;
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Build: `npm run build`
2. Deploy `dist` folder to `gh-pages` branch

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading for images
- Code splitting with Vite
- Optimized animations
- Smooth scroll implementation
- Fast page load times

## 🎭 Animations

- **Framer Motion**: Component animations, page transitions
- **GSAP**: Advanced scroll animations
- **Lenis**: Smooth scrolling
- **CSS**: Gradient effects, hover states

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nishanth M M**
- Email: nish010906@gmail.com
- LinkedIn: [nishanth-m-m-2a0834327](https://linkedin.com/in/nishanth-m-m-2a0834327)
- GitHub: [@nish-ML](https://github.com/nish-ML)

## 🙏 Acknowledgments

- React Team
- Vite Team
- Framer Motion
- Tailwind CSS
- GSAP
- React Icons

---

**Made with ❤️ using React + Vite**
