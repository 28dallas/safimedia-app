# EventConnect - Event Professional Marketplace

A modern, responsive web application connecting clients with top event professionals including photographers, planners, caterers, and more.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Categories**: Browse professionals by category (photography, planning, catering, etc.)
- **Featured Professionals**: Showcase top-rated service providers
- **Client Testimonials**: Real reviews and ratings
- **Professional Profiles**: Detailed profiles with portfolios and pricing

## Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS for responsive design
- **Routing**: React Router for navigation
- **Images**: Unsplash for placeholder images
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eventconnect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   ├── HeroSection.js  # Hero section with CTA
│   ├── ServicesSection.js # Service categories grid
│   ├── FeaturedProfessionals.js # Professional profiles
│   ├── TestimonialsSection.js # Client reviews
│   ├── CTASection.js   # Call-to-action section
│   └── Footer.js       # Footer with links
├── pages/              # Page components
│   └── Homepage.js     # Main homepage
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Colors
The app uses a blue color scheme defined in `tailwind.config.js`. You can customize the colors by modifying the color palette.

### Content
All content is currently placeholder data. Replace with real data by:
1. Updating the data arrays in each component
2. Replacing Unsplash image URLs with actual images
3. Adding real professional profiles and testimonials

### Styling
The app uses Tailwind CSS utility classes. Custom styles are defined in `src/index.css` using Tailwind's `@layer` directive.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

## Future Enhancements

- User authentication and profiles
- Professional dashboard
- Booking and payment system
- Real-time messaging
- Advanced search and filtering
- Mobile app development

## License

This project is licensed under the MIT License.