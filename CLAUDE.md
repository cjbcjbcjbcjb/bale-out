# Bale Out

Static web game, no build step. GitHub Pages serves it from the `gh-pages` branch at
https://cjbcjbcjbcjb.github.io/bale-out/ (Pages switched on automatically when that branch was pushed;
these sessions cannot change Pages settings through the API).

- Keep `main` and `gh-pages` identical. After committing to `main`, run `git push origin main main:gh-pages`.
- `index.html` holds the whole game, with the sprite data inlined as JSON.
- `sw.js` serves cached files first and refreshes them in the background, so a phone picks up a change on
  the second launch after it deploys. Add any new file to its `ASSETS` list.
- The font is Silkscreen under the SIL Open Font License; keep `fonts/OFL.txt` with it.
