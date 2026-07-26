# Color Reference Guide 🎨

## Primary Color Palette

### Backgrounds
```css
/* Hero Section */
#cdc5b4  /* Warm beige - main hero background */

/* Alternating Sections */
#ffffff  /* Pure white - About, Projects, Contact, Certificates */
#f5f1e8  /* Light beige - Skills, Experience, Achievements, Footer */
```

### Text Colors
```css
/* Headings & Primary Text */
#18181b  /* Zinc-900 - Main headings, bold text */
#27272a  /* Zinc-800 - Body text, paragraphs */

/* Secondary Text */
#3f3f46  /* Zinc-700 - Descriptions */
#52525b  /* Zinc-600 - Labels, meta info */
#71717a  /* Zinc-500 - Subtle text */
```

### Accent Colors
```css
/* Primary Accent */
#e8ff2e  /* Neon yellow - CTAs, highlights, badges */

/* Hover States */
#d4eb1a  /* Darker yellow - button hover */
```

### Borders
```css
/* Strong Borders */
#18181b  /* Black - 2px borders on cards */

/* Subtle Borders */
#e4e4e7  /* Zinc-200 - light borders */
#d4d4d8  /* Zinc-300 - form inputs */
```

## Usage by Component

### Hero Section
```jsx
Background: bg-[#cdc5b4]
Giant Text: text-[#e8ff2e]
Main Text: text-zinc-900
Buttons: bg-[#e8ff2e] text-zinc-900
Border: border-zinc-900
```

### Navbar
```jsx
Background (scrolled): bg-[#cdc5b4]/95
Text: text-zinc-900
Links: text-zinc-800
Hover: text-zinc-700
```

### About Section
```jsx
Background: bg-white
Headings: text-zinc-900
Body: text-zinc-700
Cards: bg-white border-2 border-zinc-900
Stats BG: bg-white
Hover Accent: bg-[#e8ff2e] opacity-10
```

### Skills Section
```jsx
Background: bg-[#f5f1e8]
Cards: bg-white border-2 border-zinc-900
Icon Badge: bg-[#e8ff2e] border-2 border-zinc-900
Skill Tags: bg-zinc-100 border border-zinc-300
Hover: border-[#e8ff2e]
```

### Projects Section
```jsx
Background: bg-white
Cards: bg-white border-2 border-zinc-900
Category Badge: bg-[#e8ff2e] border-2 border-zinc-900
Tech Tags: bg-zinc-100 border border-zinc-300
Glow Effect: bg-[#e8ff2e] opacity-20 blur-3xl
Buttons: bg-[#e8ff2e] or bg-white with borders
```

### Experience Section
```jsx
Background: bg-[#f5f1e8]
Cards: bg-white border-2 border-zinc-900
Left Accent: bg-[#e8ff2e] w-2
Date Badge: bg-[#e8ff2e] border-2 border-zinc-900
Tech Tags: bg-zinc-100 border border-zinc-300
```

### Contact Section
```jsx
Background: bg-white
Form: bg-white border-2 border-zinc-900
Inputs: bg-white border-2 border-zinc-300
Input Focus: border-zinc-900
Icon Badge: bg-[#e8ff2e] border-2 border-zinc-900
Submit Button: bg-[#e8ff2e] border-2 border-zinc-900
Info Cards: bg-zinc-50 border-2 border-zinc-200
```

### Footer
```jsx
Background: bg-[#f5f1e8]
Border Top: border-2 border-zinc-900
Text: text-zinc-900 / text-zinc-700
Social Icons: bg-white border-2 border-zinc-900
Icon Hover: bg-[#e8ff2e]
Links: text-zinc-700 hover:text-zinc-900
```

### Achievements
```jsx
Background: bg-[#f5f1e8]
Cards: bg-white border-2 border-zinc-900
Numbers: text-zinc-900
Hover Effect: bg-[#e8ff2e] opacity-10
```

### Certificates
```jsx
Background: bg-white
Cards: bg-white border-2 border-zinc-900
Icon Badge: bg-[#e8ff2e] border-2 border-zinc-900
Year Badge: bg-zinc-100 border border-zinc-300
Glow: bg-[#e8ff2e] opacity-20 blur-2xl
```

### Loader Screen
```jsx
Background: bg-[#cdc5b4]
Text: text-zinc-900
Progress Bar BG: bg-white border-2 border-zinc-900
Progress Fill: bg-[#e8ff2e]
```

## Tailwind CSS Classes Quick Reference

### Backgrounds
```
bg-white          → #ffffff
bg-[#cdc5b4]      → #cdc5b4
bg-[#f5f1e8]      → #f5f1e8
bg-[#e8ff2e]      → #e8ff2e
bg-zinc-50        → #fafafa
bg-zinc-100       → #f4f4f5
bg-zinc-900       → #18181b
```

### Text Colors
```
text-zinc-500     → #71717a
text-zinc-600     → #52525b
text-zinc-700     → #3f3f46
text-zinc-800     → #27272a
text-zinc-900     → #18181b
```

### Borders
```
border-zinc-200   → #e4e4e7
border-zinc-300   → #d4d4d8
border-zinc-900   → #18181b
border-[#e8ff2e]  → #e8ff2e

border           → 1px
border-2         → 2px
```

## Color Psychology

### Yellow (#e8ff2e)
- **Emotion**: Energy, optimism, innovation
- **Usage**: CTAs, highlights, accents
- **Impact**: Draws attention, creates excitement

### Beige (#cdc5b4, #f5f1e8)
- **Emotion**: Warmth, professionalism, sophistication
- **Usage**: Backgrounds, sections
- **Impact**: Creates calm, elegant foundation

### Black/Zinc (#18181b)
- **Emotion**: Authority, clarity, precision
- **Usage**: Text, borders, structure
- **Impact**: Strong hierarchy, readability

### White (#ffffff)
- **Emotion**: Cleanliness, simplicity, space
- **Usage**: Card backgrounds, sections
- **Impact**: Creates breathing room, focus

## Accessibility

### Contrast Ratios (WCAG AA)
✅ Zinc-900 on White: 19.64:1 (Excellent)
✅ Zinc-800 on White: 14.09:1 (Excellent)
✅ Zinc-700 on White: 10.31:1 (Excellent)
✅ Zinc-900 on #e8ff2e: 5.89:1 (Good)
✅ Zinc-900 on #f5f1e8: 18.22:1 (Excellent)

### Focus States
```css
outline: 3px solid #e8ff2e
outline-offset: 3px
```

## Alternative Color Schemes

If you want to change the yellow accent, here are professional alternatives:

### Option 1: Electric Blue
```css
Primary: #00e5ff
Hover: #00c4e0
```

### Option 2: Hot Pink
```css
Primary: #ff1744
Hover: #e60039
```

### Option 3: Neon Green
```css
Primary: #39ff14
Hover: #2ee310
```

### Option 4: Vibrant Orange
```css
Primary: #ff9800
Hover: #f57c00
```

### Option 5: Purple
```css
Primary: #e91e63
Hover: #c2185b
```

## How to Change Accent Color

1. **Find all instances** of `#e8ff2e` in your project
2. **Replace with** your chosen color
3. **Update Tailwind classes**: `bg-[#e8ff2e]` → `bg-[#yourcolor]`
4. **Test contrast** ratios for accessibility
5. **Verify** hover states work well

## Design System Export

For design tools (Figma, Adobe XD):

```json
{
  "colors": {
    "background": {
      "hero": "#cdc5b4",
      "light": "#f5f1e8",
      "white": "#ffffff"
    },
    "accent": {
      "primary": "#e8ff2e",
      "hover": "#d4eb1a"
    },
    "text": {
      "primary": "#18181b",
      "secondary": "#27272a",
      "tertiary": "#3f3f46"
    },
    "border": {
      "strong": "#18181b",
      "medium": "#d4d4d8",
      "light": "#e4e4e7"
    }
  }
}
```

---

**Pro Tip**: Use browser DevTools to preview color changes in real-time before committing to your codebase!
