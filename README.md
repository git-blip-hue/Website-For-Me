# Website (Initial)

This is a simple static website (HTML/CSS/JS). Instructions to preview and deploy:

Preview locally:
1. Install a static server (optional) or open `index.html` in a browser.
   - Quick preview with Node: `npx serve .` or `npx http-server .`
2. Visit http://localhost:3000 (or the URL provided by the server).

Add to your repo and push (exact commands):
```bash
git checkout -b site/init
git add index.html styles.css script.js README.md .gitignore
git commit -m "Add initial static website"
git push -u origin site/init
```

Deploy options:
- GitHub Pages: enable Pages in repository settings and select branch `site/init` (or merge to `main` and select `main`).
- Or use a deployment action / GitHub Pages workflow to publish to `gh-pages` branch.
- Or host on Netlify / Vercel by connecting the repository.

Customization:
- Replace text, projects, and contact email.
- To collect real form submissions, wire the form to Formspree, Netlify Forms, or a server endpoint.