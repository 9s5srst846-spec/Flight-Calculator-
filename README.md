# Flight Planning App

An installable web app for iPhone, iPad, Android and desktop. Includes an app icon, standalone display and offline caching. The original calculator logic and aircraft data are preserved. Fonts use local system fallbacks so there are no external dependencies.

## Put it on your iPhone

This ZIP is the app's website package. It must first be hosted at an HTTPS web address; opening index.html in Files does not install the app or enable offline caching.

1. Unzip this package on a computer.
2. Upload all files inside `flight-planning-app` to the root of a GitHub repository. Keep the `icons` folder intact.
3. In the repository, open Settings → Pages. Choose Deploy from a branch, select your main branch and `/ (root)`, then Save.
4. Once deployment completes, open the published Pages address in Safari on your iPhone.
5. Wait until the home screen says **Ready for offline use**.
6. In Safari, tap Share → Add to Home Screen. Keep **Open as Web App** enabled if shown, then tap Add.
7. Open the new Flight Plan icon once while online. Test reopening it in airplane mode.

If replacing a previous app, replace its website files and increment the cache version in sw.js. Close and reopen the app to activate the downloaded update. Keep an existing GitHub custom-domain CNAME file if your repository uses one.

## Local preview

From this folder run `python3 -m http.server 8000`, then open http://localhost:8000 on the same computer. Localhost supports service-worker testing; a phone needs the published HTTPS address.

## Included files

- index.html — original calculators with app metadata and mobile layout adjustments
- manifest.webmanifest — app name, icon, start address and standalone mode
- sw.js — offline app cache
- app.js — installation help and offline readiness indicator
- icons/ — home-screen and browser icons

The app works offline after successful initial caching. Clearing browser/site storage removes the downloaded copy. Converting the package does not independently validate the original aircraft data or calculation formulas.
