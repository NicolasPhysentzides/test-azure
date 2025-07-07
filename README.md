# Azure Test App

A simple Next.js web application for testing Azure hosting.

## Features

- ✅ **Counter Test** - Simple click counter to test React state
- ✅ **Form Test** - Basic form submission to test user interaction
- ✅ **Status Display** - Shows app is running and ready
- ✅ **Azure Ready** - Configured for Azure App Service deployment

## Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Test the App

1. **Counter**: Click the "Click me!" button to increment the counter
2. **Form**: Enter your name and submit to see a welcome message
3. **Status**: Check that all status indicators are green

## Deploy to Azure

1. Push code to GitHub/Azure DevOps
2. Create Azure App Service (Node.js 18 LTS)
3. Connect repository in Deployment Center
4. Deploy automatically

See [azure-deploy.md](./azure-deploy.md) for detailed instructions.

## Files

- `app/page.js` - Main app page
- `azure-deploy.md` - Deployment guide
- `.deployment` - Azure configuration
