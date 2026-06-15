# Program Guardian - Deployment Guide

This guide explains how to deploy the Program Guardian demo both locally and via GitLab Pages.

## 🚀 Quick Start Options

### Option 1: Standalone HTML File (Easiest)
**Best for:** Local demos, quick sharing, no server needed

1. Open `program-guardian-demo.html` in any modern browser
2. That's it! No build tools, no npm, no server required

**Note:** The standalone HTML file needs to be completed first (see "Building the Standalone HTML" below).

### Option 2: GitLab Pages (Best for Sharing)
**Best for:** Permanent URL, stakeholder access, version control

Your site will be available at: `https://[your-username].gitlab.io/front-end`

## 📦 Building the Standalone HTML

The `program-guardian-demo.html` file is a template. To complete it:

### Manual Method:
1. Open `remixed-b3e53bf6.tsx`
2. Copy lines 4-1385 (skip the import statements at lines 1-2)
3. Open `program-guardian-demo.html`
4. Find the `// PLACEHOLDER` comment (around line 72)
5. Paste the copied code there
6. Find line with `export default function App()` and change to `function App()`
7. Save the file

### Automated Method (PowerShell):
Run the provided script:
```powershell
.\build-standalone.ps1
```

This will automatically create a complete `program-guardian-demo.html` file.

## 🌐 GitLab Pages Deployment

### Initial Setup:

1. **Prepare the app.js file:**
   - Open `app.js`
   - Copy content from `remixed-b3e53bf6.tsx` (lines 4-1385)
   - Paste it where the TODO comment indicates
   - Save the file

2. **Commit and push to GitLab:**
   ```bash
   git add .gitlab-ci.yml index.html app.js
   git commit -m "Add GitLab Pages deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to your GitLab project → CI/CD → Pipelines
   - Wait for the "pages" job to complete (usually 1-2 minutes)
   - Your site will be live at: `https://[your-username].gitlab.io/front-end`

### Updating the Site:

Any changes pushed to the `main` branch will automatically redeploy:
```bash
git add .
git commit -m "Update application"
git push origin main
```

## 📁 File Structure

```
front-end/
├── .gitlab-ci.yml              # GitLab Pages CI/CD configuration
├── index.html                  # GitLab Pages entry point
├── app.js                      # Application code (needs completion)
├── program-guardian-demo.html  # Standalone HTML (needs completion)
├── remixed-b3e53bf6.tsx        # Original React source code
├── build-standalone.ps1        # Helper script to build standalone HTML
├── DEPLOYMENT.md               # This file
└── README.md                   # Project documentation
```

## 🔧 Troubleshooting

### Standalone HTML Issues:

**Problem:** Blank page or errors in console
- **Solution:** Check browser console (F12) for errors
- Ensure you completed the code insertion step
- Verify `export default` was changed to just `function`

**Problem:** Recharts not loading
- **Solution:** Check internet connection (CDN dependencies)
- Try a different browser

### GitLab Pages Issues:

**Problem:** 404 error on GitLab Pages URL
- **Solution:** Check CI/CD pipeline completed successfully
- Verify you're on the `main` branch
- Wait 5-10 minutes after first deployment

**Problem:** Pipeline fails
- **Solution:** Check `.gitlab-ci.yml` syntax
- Ensure `index.html` and `app.js` exist in repository
- Check GitLab CI/CD logs for specific errors

## 🎯 Recommended Workflow

For developers building on this concept:

1. **Start with standalone HTML** for quick local testing
2. **Use GitLab Pages** for sharing with stakeholders
3. **Keep both updated** - they use the same source code

## 📊 What Gets Deployed

Both deployment methods include:
- ✅ Full React 18 application
- ✅ Recharts data visualizations
- ✅ All 9 AI agents with animations
- ✅ Human-in-the-loop interface
- ✅ War Room live agent coordination
- ✅ Team Chat and Direct Chat
- ✅ Customizable dashboard cards
- ✅ Multi-program support (F-35, CH-53K, THAAD, LRSO)

## 🔐 Security Note

This is a **client-side demo** with no backend. All data is:
- Generated in the browser
- Not persisted
- Reset on page refresh
- Safe to share publicly

## 📞 Support

For questions about:
- **GitLab Pages:** See [GitLab Pages Documentation](https://docs.gitlab.com/ee/user/project/pages/)
- **React/Recharts:** Check browser console for specific errors
- **Application features:** See `README.md` and codebase analysis

## 🎨 Customization

To modify the application:
1. Edit `remixed-b3e53bf6.tsx`
2. Rebuild standalone HTML (run `build-standalone.ps1`)
3. Update `app.js` with the same changes
4. Commit and push for GitLab Pages

---

**Next Steps:**
1. Complete `app.js` or `program-guardian-demo.html` (choose your deployment method)
2. Test locally by opening the HTML file
3. Deploy to GitLab Pages for sharing
4. Share the URL with your team!
