# BounceSteps Admin Portal

Admin dashboard for BounceSteps platform management, deployed on Netlify.

## Tech Stack
- React 18
- Vite
- TailwindCSS
- React Router
- Axios

## Environment Variables
Create a `.env` file with:
```
VITE_API_URL=your-backend-api-url
```

## Installation
```bash
npm install
```

## Running Locally
```bash
npm run dev
```

## Building for Production
```bash
npm run build
```

## Deployment to Netlify
1. Connect this repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables in Netlify dashboard

## Admin Features
- User management
- Provider management
- Service approval and moderation
- Booking oversight
- Analytics dashboard
- Payment management
- System configuration

## Authentication
Admin portal requires admin role authentication through the backend API.

## CORS Configuration
Ensure backend allows requests from admin portal domain:
```javascript
app.use(cors({
  origin: [
    "https://bouncesteps-frontend.netlify.app",
    "https://bouncesteps-admin.netlify.app"
  ]
}));
```

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Admin page components
├── contexts/      # React contexts
├── hooks/         # Custom hooks
├── utils/         # Utility functions
└── styles/        # Global styles
```
