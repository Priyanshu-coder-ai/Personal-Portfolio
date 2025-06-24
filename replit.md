# Portfolio Application

## Overview

This is a full-stack portfolio application built with React and Express, showcasing a personal portfolio website with modern design and interactive features. The application features a responsive design with dark/light theme support, contact form functionality, and a comprehensive showcase of skills, projects, and experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Context for theme management, TanStack Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful APIs with structured error handling
- **Development**: Hot reload with Vite integration in development mode

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User management schema with Zod validation
- **Storage**: In-memory storage implementation with interface for future database integration
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Frontend Components
- **Theme System**: Light/dark mode toggle with persistent storage
- **Portfolio Sections**: Hero, About, Education, Skills, Projects, Experience, Contact
- **UI Library**: Comprehensive set of reusable components (buttons, forms, cards, etc.)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Backend Services
- **Contact Form API**: Handles form submissions with validation
- **Static File Serving**: Serves built frontend assets in production
- **Development Server**: Vite integration for hot module replacement

### Shared Resources
- **Schema Definitions**: Shared TypeScript types and Zod schemas
- **Type Safety**: End-to-end type safety between client and server

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Response Handling**: Structured JSON responses with error handling
4. **State Management**: Client updates UI based on server responses
5. **Theme Persistence**: Theme preferences stored in localStorage

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets

### Development Tools
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and development server
- **ESBuild**: Production bundling for server code

### Form and Data Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **TanStack Query**: Server state management

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Production**: Single node process serves both API and static files

### Environment Configuration
- **Development**: Runs on port 5000 with hot reload
- **Production**: Configurable port with optimized builds
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Replit Integration
- **Modules**: Configured for Node.js 20, web development, and PostgreSQL 16
- **Deployment**: Autoscale deployment target with build commands
- **Development**: Integrated with Replit's development environment

## Changelog
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.