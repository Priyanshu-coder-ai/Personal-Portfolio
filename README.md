# Priyanshu Mishra - Portfolio Website

A fully responsive, professional personal portfolio website showcasing skills, projects, education, and contact information with modern design and interactive animations.

## Features

- **Modern Design**: Clean, professional layout with gradient text effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Animations**: 
  - Bubble effects on all buttons (hover and click)
  - Zoom effects on column elements
  - Smooth scroll animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Contact Form**: Functional contact form with backend validation
- **Project Showcase**: Featured projects with technology stacks
- **Skills Display**: Organized by categories (Frontend, Backend, Tools, APIs)

## Technologies Used

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Wouter for routing
- TanStack Query for state management
- Radix UI components
- Lucide React icons

### Backend
- Node.js with Express
- TypeScript
- Zod for validation
- In-memory storage (ready for database integration)

### Development Tools
- Vite for build and development
- ESBuild for server bundling
- Hot module replacement

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
|   |   ├── assets/       # has all the images and logo
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions and query client
│   │   └── hooks/        # Custom React hooks
├── server/               # Backend Express application
├── shared/               # Shared types and schemas
└── README.md
```

## Key Components

- **Navigation**: Responsive navbar with smooth scroll navigation
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Background information and skill highlights
- **Education Section**: Academic and professional training
- **Skills Section**: Technical skills organized by category
- **Projects Section**: Featured projects with live demos and source code
- **Experience Section**: Professional experience timeline
- **Contact Section**: Contact form and social links
- **Footer**: Site navigation and copyright information

## Special Effects

### Bubble Effects
All buttons feature expanding bubble animations on hover and click, created with CSS pseudo-elements and smooth transitions.

### Zoom Effects
Column elements (skills, projects, about cards) scale up smoothly when hovered, providing interactive feedback to users.

## Deployment

The application is configured for Replit deployment with optimized builds for both frontend and backend.

## Contact Information

- **Email**: priyanshumishra4070@gmail.com
- **GitHub**: [@Priyanshu-coder-ai](https://github.com/Priyanshu-coder-ai)
- **Portfolio**: Live demo available

---

Built with ❤️ by Priyanshu Mishra