#!/bin/bash

# Deploy BounceSteps Admin Portal to Production
echo "🚀 Deploying BounceSteps Admin Portal to Production..."

# Set production environment variables
export VITE_API_URL="https://api.bouncesteps.com"
export VITE_API_BASE_URL="https://api.bouncesteps.com"
export VITE_NODE_ENV="production"
export VITE_GOOGLE_CLIENT_ID="392429231515-psehkvr2jtfapv4cp0r1tolpe0l6em21.apps.googleusercontent.com"

# Build the project
echo "📦 Building project with production environment variables..."
npm run build:production

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Deployment complete!"