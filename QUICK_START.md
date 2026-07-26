# Quick Start Guide 🚀

## View Your New Portfolio

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🎨 What You'll See

### Hero Section
- **Giant yellow "NISHANTH" text** in the background
- **Your photo** in the center (currently showing full outfit)
- **Stats on left**: Projects, Years of Experience
- **Characteristics on right**: Creative, Reliable, etc.
- **Yellow CTA buttons**: "Book a Call" and "About Me"

### Color Theme
- **Light beige backgrounds** (#cdc5b4, #f5f1e8)
- **White section backgrounds**
- **Bold black borders** (2px)
- **Neon yellow accents** (#e8ff2e)
- **Dark text** for readability

### All Sections
✅ About - Clean white with stat cards
✅ Skills - Icon-based category cards
✅ Projects - Large project showcases
✅ Experience - Timeline with yellow accents
✅ Achievements - Animated counters
✅ Certificates - Award badges
✅ Contact - Two-column form + info
✅ Footer - Complete site navigation

## ⚡ Quick Customization

### Update Your Photo
Replace: `src/assets/images/profile.jpeg.jpeg`
- Use a full-body photo (or head-to-waist)
- PNG with transparent background works best
- Minimum 800px width recommended

### Update Your Info

**Portfolio Data** (`src/data/portfolio.js`):
```javascript
// Update skills, experience, certificates, achievements
export const skills = [...]; // Your skills
export const experience = [...]; // Your experience
export const certificates = [...]; // Your certs
```

**Projects Data** (`src/data/projects.js`):
```javascript
// Update with your real projects
export const projects = [
  {
    title: 'Your Project',
    category: 'AI/ML/Web',
    description: 'What it does...',
    stack: ['React', 'Python', ...],
    link: 'https://github.com/...',
    demo: 'https://...',
  },
];
```

**Contact Info** (`src/components/contact/Contact.jsx`):
```javascript
// Update these lines (around line 8-10)
{ icon: FiMail, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
{ icon: FiMapPin, label: 'Location', value: 'Your City, Country', href: '#' },
```

**Social Links** (Multiple files):
- Update GitHub, LinkedIn, Twitter links
- Search for "https://github.com" and replace with your links

## 🎯 Color Customization (Optional)

If you want to change the yellow accent color:

**Find and replace in all files:**
- `#e8ff2e` → Your color (e.g., `#ff6b6b` for red)
- `bg-[#e8ff2e]` → `bg-[#yourcolor]`

**Recommended accent colors:**
- Neon Green: `#39ff14`
- Hot Pink: `#ff1744`
- Electric Blue: `#00e5ff`
- Orange: `#ff9800`

## 📦 Build for Production

### Create Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy
Your `dist` folder contains the production files. Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag `dist` folder to Netlify
- **GitHub Pages**: Push to `gh-pages` branch

## 🐛 Troubleshooting

### Issue: Portfolio doesn't load
**Solution**: Clear cache and restart dev server
```bash
npm run dev -- --force
```

### Issue: Images not showing
**Solution**: Check image paths in `src/assets/images/`

### Issue: Animations not smooth
**Solution**: Check if hardware acceleration is enabled in browser

### Issue: Styles look broken
**Solution**: Ensure Tailwind CSS is properly configured
```bash
npm install -D tailwindcss postcss autoprefixer
```

## 📱 Testing Checklist

- [ ] Test on mobile (< 640px width)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Check all links work
- [ ] Verify all sections scroll smoothly
- [ ] Test contact form (if configured)
- [ ] Check loading animation
- [ ] Verify images load properly
- [ ] Test dark mode (if browser prefers)
- [ ] Check accessibility (tab navigation)

## 🎨 Advanced Customization

### Change Background Colors
**Hero background**: `bg-[#cdc5b4]` in Hero.jsx
**Section backgrounds**: `bg-white`, `bg-[#f5f1e8]` in each section

### Change Typography
Update `src/index.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Adjust Spacing
- Padding: `py-32` (8rem vertical padding)
- Margins: `mb-16` (4rem bottom margin)
- Gaps: `gap-8` (2rem between items)

## 💡 Pro Tips

1. **Image Optimization**: Use https://tinypng.com/ to compress images
2. **Font Loading**: Consider using system fonts for faster load
3. **Performance**: Lazy load images below the fold
4. **SEO**: Update meta tags in `index.html`
5. **Analytics**: Add Google Analytics or Plausible

## 🚀 Next Steps

1. **Personalize content** with your real information
2. **Update photos** with high-quality images
3. **Test thoroughly** on multiple devices
4. **Deploy** to a hosting platform
5. **Share** your new portfolio!

## Need Help?

- Check the `DESIGN_UPDATES.md` for detailed changes
- Review component files for structure
- Test changes incrementally
- Keep backups before major modifications

**Enjoy your new professional portfolio! 🎉**
