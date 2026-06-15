# Program Guardian - Quick Start Guide

## 🎯 Two Ways to Deploy

### Option 1: Standalone HTML (Recommended for First Time)
**Perfect for:** Local demos, quick testing, sharing with developers

```powershell
# Run this command in PowerShell:
.\build-standalone.ps1

# Then open the generated file:
start program-guardian-standalone.html
```

**That's it!** The file opens in your browser and works immediately. No server, no npm, no build tools needed.

### Option 2: GitLab Pages (Recommended for Sharing)
**Perfect for:** Permanent URL, stakeholder access, team collaboration

#### Step 1: Complete the app.js file
Open `app.js` and copy the content from `remixed-b3e53bf6.tsx` (lines 4-1385) into the TODO section.

#### Step 2: Commit and push
```bash
git add .
git commit -m "Deploy Program Guardian to GitLab Pages"
git push origin main
```

#### Step 3: Access your site
Your site will be live at: `https://[your-username].gitlab.io/front-end`

Wait 2-3 minutes for the first deployment to complete.

---

## 📁 What Was Created

### For Standalone HTML:
- ✅ `build-standalone.ps1` - Automated build script
- ✅ `program-guardian-standalone.html` - Complete working demo (generated)

### For GitLab Pages:
- ✅ `.gitlab-ci.yml` - Auto-deployment configuration
- ✅ `index.html` - Entry point
- ✅ `app.js` - Application code (needs completion)

### Documentation:
- ✅ `README.md` - Project overview
- ✅ `DEPLOYMENT.md` - Detailed deployment guide
- ✅ `QUICKSTART.md` - This file

---

## 🚀 Recommended Workflow

1. **Test locally first:**
   ```powershell
   .\build-standalone.ps1
   start program-guardian-standalone.html
   ```

2. **If it works, deploy to GitLab Pages:**
   - Complete `app.js` with the same code
   - Commit and push
   - Share the GitLab Pages URL

3. **Make changes:**
   - Edit `remixed-b3e53bf6.tsx`
   - Rebuild standalone: `.\build-standalone.ps1`
   - Update `app.js` with same changes
   - Push to GitLab

---

## 💡 Tips

- **Standalone HTML** is self-contained - you can email it, put it on a network drive, or open it directly
- **GitLab Pages** auto-deploys on every push to `main` branch
- Both use the exact same source code from `remixed-b3e53bf6.tsx`
- The app is 100% client-side - no backend needed

---

## ❓ Troubleshooting

**Standalone HTML shows blank page?**
- Check browser console (F12) for errors
- Ensure you ran `build-standalone.ps1` successfully
- Try a different browser (Chrome, Edge, Firefox)

**GitLab Pages shows 404?**
- Wait 5-10 minutes after first push
- Check CI/CD pipeline completed successfully
- Verify you're pushing to `main` branch

**Build script fails?**
- Ensure `remixed-b3e53bf6.tsx` exists in the same directory
- Run PowerShell as Administrator if needed

---

## 📞 Next Steps

1. ✅ Run `.\build-standalone.ps1`
2. ✅ Open `program-guardian-standalone.html` in browser
3. ✅ Explore the demo (War Room, Team Chat, Dashboard Cards)
4. ✅ Share with your team!

For detailed information, see:
- [DEPLOYMENT.md](DEPLOYMENT.md) - Full deployment guide
- [README.md](README.md) - Project documentation
- [Codebase Analysis](.windsurf/plans/codebase-analysis-f3e667.md) - Technical deep dive
