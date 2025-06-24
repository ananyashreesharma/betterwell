# Deployment Guide - Vercel

This guide will help you deploy your BetterWellness application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Node.js**: Make sure you have Node.js installed locally

## Step 1: Prepare Your Repository

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Make sure these files are in your repository**:
   - `vercel.json` (configuration file)
   - `package.json` (root level)
   - `client/package.json`
   - `Server/package.json`

## Step 2: Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/build`
   - **Install Command**: `npm run install-all`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

## Step 3: Configure Environment Variables

In your Vercel dashboard, go to your project settings and add these environment variables:

```
NODE_ENV=production
PORT=3000
```

## Step 4: Update API URLs

After deployment, you'll get a URL like `https://your-app-name.vercel.app`. Update these files with your actual URL:

1. **Server/App.js** - Update CORS origins
2. **All client components** - Update API_BASE_URL

Replace `your-app-name.vercel.app` with your actual Vercel domain.

## Step 5: Database Considerations

**Important**: SQLite databases don't persist on Vercel's serverless functions. For production, consider:

1. **MongoDB Atlas** (Recommended):
   - Sign up at [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create a free cluster
   - Update your database connection

2. **PostgreSQL with Vercel**:
   - Use Vercel Postgres addon
   - Update your database schema

## Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test all features:
   - User registration/login
   - Blog creation/viewing
   - Find support page
   - Navigation

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check that all dependencies are in package.json
   - Ensure build scripts are correct

2. **API Errors**:
   - Verify CORS settings
   - Check API URLs are updated
   - Ensure database is accessible

3. **Database Issues**:
   - SQLite won't work on Vercel
   - Switch to MongoDB Atlas or PostgreSQL

### Getting Help:

- Check Vercel deployment logs
- Review function logs in Vercel dashboard
- Test locally with `npm run build`

## Post-Deployment

1. **Set up custom domain** (optional)
2. **Configure analytics** (optional)
3. **Set up monitoring** (optional)
4. **Enable automatic deployments** from GitHub

## Security Notes

- Never commit sensitive data (API keys, passwords)
- Use environment variables for all secrets
- Enable HTTPS (automatic on Vercel)
- Consider adding rate limiting for production

Your app should now be live at `https://your-app-name.vercel.app`! 🚀 