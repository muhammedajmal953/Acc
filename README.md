# ACC Website

A modern, Gen-Z styled progressive website for the ACC team - Friends who build, vibe & grow.

## 🚀 Features

- **Modern React Architecture** - Built with Vite for lightning-fast development
- **Gen-Z Aesthetic** - Bold colors, gradients, glassmorphism, and smooth animations
- **Framer Motion Animations** - Page transitions, hover effects, and micro-interactions
- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark Mode** - Beautiful dark theme with neon accents
- **Interactive Components** - Magnetic hover effects, card tilts, animated links

## 📦 Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── PageTransition.jsx
│   └── ScrollToTop.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Members.jsx
│   └── MemberDetails.jsx
├── data/           # Static data
│   └── members.js
├── App.jsx         # Main app component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## 🎨 Customization

### Adding Members

Edit `src/data/members.js` to add or modify team members. Each member object should include:

- `id` - Unique identifier
- `name` - Full name
- `nickname` - Display nickname
- `role` - Job title/role
- `image` - Profile image URL
- `bio` - Biography text
- `skills` - Array of skill strings
- `funFacts` - Array of fun fact strings
- `social` - Object with social media links

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Color scheme can be customized in Tailwind config

### Animations

Animation variants and timing can be adjusted in individual components using Framer Motion.

## 🌐 Pages

- **/** - Home page with animated hero section
- **/about** - Team story, timeline, and values
- **/members** - Grid of all team members
- **/members/:id** - Individual member detail page

## 📝 Notes

- Uses DiceBear API for placeholder profile images
- All social links are placeholder URLs - update with real links
- Fully responsive and touch-friendly
- Optimized for modern browsers

## 🎯 Future Enhancements

- PWA support
- Theme toggle (light/dark)
- Lazy loading for images
- SEO optimization
- Loading states
- Error boundaries

---

Made with ❤️ by the ACC team
