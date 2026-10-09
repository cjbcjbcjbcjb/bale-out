# Bale Out

Static web game, no build step. GitHub Pages serves it from the `gh-pages` branch at
https://cjbcjbcjbcjb.github.io/bale-out/ (Pages switched on automatically when that branch was pushed;
these sessions cannot change Pages settings through the API).

- Keep `main` and `gh-pages` identical. After committing to `main`, run `git push origin main main:gh-pages`.
- `index.html` holds the whole game, with the sprite data inlined as JSON.
- `sw.js` serves cached files first and refreshes them in the background. Bump `CACHE` in `sw.js` with every
  release: the new worker takes over and the page reloads itself the next time the title screen is showing.
  Without a bump, phones only pick up a change on the second launch. Add any new file to its `ASSETS` list.
- The font is Silkscreen under the SIL Open Font License; keep `fonts/OFL.txt` with it.

## Scores

- Saved in `localStorage` under `bale-out-v1` (format v2): `board` (this device's top 5 with names),
  `remote` (shared board last fetched), `outbox` (entries not yet uploaded), `names`, `pending` (the running
  score of an unfinished show, saved after every landing and offered for a name on the next launch),
  `seeded` (this device's board has been queued for upload once).
- `SYNC_URL` near the top of the game script is the Firebase Realtime Database address for the shared
  Hall of Fame. Empty means scores stay on each device. The database rules are in `firebase-rules.json`
  (anyone can read and append scores; nothing can be changed or deleted). Uploads are plain POSTs confirmed
  by reading the entry back by `id`; reads fall back to JSONP, so it works without CORS.
- These cloud sessions can't reach Firebase or github.io from the shell; verify the live site with WebFetch.
