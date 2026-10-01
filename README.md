# Windsor Park · Blessed Thanksgiving

A mobile-first, church-friendly Wi-Fi prank: one URL, ten randomly selected posters, and a different poster on refresh when browser storage is available.

## Public URL

https://retlaw.github.io/windsor-park-thanksgiving-wifi/

Use this single address for your QR code. Guests need internet access; this is a humorous webpage, not a Wi-Fi login.

## Edit the messages

Edit `variants.js`. Add or remove an object in `window.THANKSGIVING_VARIANTS`. Give each object a unique, stable `id`, a `theme` (plum, forest, rust, or midnight), and `label`, `kicker`, `headline`, `body`, and `punchline` text. Keep commas between objects. The shared “Blessed Thanksgiving” wording is in `index.html`.

The last poster ID is stored locally to avoid immediate repeats on refresh; no personal information is collected. If storage is blocked, the page still works, and the button avoids immediate repeats during that visit. One variant works on its own; an empty list leaves the default poster visible.

## Hosting

Static HTML/CSS/JavaScript: no dependencies, accounts for guests, analytics, backend, or paid services.
GitHub Settings → Pages → Deploy from a branch → main → / (root).
The `.nojekyll` file disables unnecessary Jekyll processing. Changes published to main are picked up by Pages.

## Local preview

Serve this directory using any static file server, or open index.html directly.

## Image posters
The fellowship poster uses assets/fellowship.jpg. To add another image variant, include image (a relative path) and imageAlt (a complete accessible description) alongside the usual text fields. Text fields also provide a fallback if the image cannot load.

The thanking poster uses assets/thanking.jpg and appears alongside the fellowship version.
