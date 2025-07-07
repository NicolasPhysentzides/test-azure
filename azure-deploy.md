# Azure Deployment Guide

This guide will help you deploy this Next.js app to Azure App Service.

## Prerequisites

1. Azure account (free tier available)
2. Git repository (GitHub, Azure DevOps, etc.)
3. Azure CLI (optional but recommended)

## Deployment Options

### Option 1: Azure Portal (Easiest)

1. **Create App Service**

   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "App Service" and select it
   - Click "Create"

2. **Configure App Service**

   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: Enter a unique name (e.g., `my-azure-test-app`)
   - **Publish**: Code
   - **Runtime stack**: Node.js 18 LTS
   - **Operating System**: Linux (recommended)
   - **Region**: Choose closest to your users
   - **App Service Plan**: Basic B1 (or Free F1 for testing)

3. **Deploy from Git**
   - In your App Service, go to "Deployment Center"
   - Choose your Git provider (GitHub, Azure DevOps, etc.)
   - Connect your repository
   - Set branch to `main` or `master`
   - Deploy

### Option 2: Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name myResourceGroup --location eastus

# Create App Service plan
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux

# Create web app
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name my-azure-test-app --runtime "NODE|18-lts"

# Configure Node.js version
az webapp config appsettings set --resource-group myResourceGroup --name my-azure-test-app --settings WEBSITE_NODE_DEFAULT_VERSION=18.17.0

# Deploy from Git
az webapp deployment source config --name my-azure-test-app --resource-group myResourceGroup --repo-url https://github.com/yourusername/your-repo.git --branch main --manual-integration
```

## Configuration

### Environment Variables

Add these to your App Service Configuration:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Build Configuration

Azure App Service will automatically:

1. Install dependencies (`npm install`)
2. Build the app (`npm run build`)
3. Start the app (`npm start`)

### Custom Build Commands (if needed)

Create a `.deployment` file in your root directory:

```
[config]
command = npm run build
```

## Testing Your Deployment

1. Visit your app URL: `https://your-app-name.azurewebsites.net`
2. Test the interactive features:
   - Click the counter button
   - Try the name input form
   - Check responsive design on mobile

## Troubleshooting

### Common Issues

1. **Build fails**: Check the build logs in Azure Portal > App Service > Deployment Center
2. **App not starting**: Check the logs in Azure Portal > App Service > Log stream
3. **Static assets not loading**: Ensure `next.config.mjs` is properly configured

### Logs

View logs in Azure Portal:

- **Build logs**: App Service > Deployment Center > Logs
- **Runtime logs**: App Service > Log stream

## Scaling

- **Free tier**: 1 GB RAM, 1 CPU core
- **Basic tier**: 1.75 GB RAM, 1 CPU core
- **Standard tier**: 1.75 GB RAM, 1 CPU core (auto-scaling available)

## Cost Optimization

- Use Free tier for testing
- Upgrade only when needed
- Consider Azure Static Web Apps for static sites
- Use Azure CDN for global distribution

## Next Steps

1. Set up custom domain
2. Configure SSL certificate
3. Set up monitoring and alerts
4. Configure backup and disaster recovery
5. Set up CI/CD pipeline

## Useful Links

- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [Next.js on Azure](https://docs.microsoft.com/en-us/azure/developer/javascript/how-to/deploy-nodejs-app-nextjs)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
