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

## Modes

- `G.mode` is `show` (Stunt Show), `flash` (Flash Forward), `drunk` (Drunk Mode), `free` (Free Flight) or
  `attract` (the demo behind the title menu). `scored()` is true for the first three.
- Flash Forward is the Stunt Show drawn in full color. `renderHD()` (the "Flash Forward" section of the game
  script) draws vector art straight onto the screen canvas at device resolution, and `hdBuild()` caches the
  scenery, clouds and hay cart for the current screen size. Each game starts in the 1-bit renderer and switches
  after `FLASH_AT` ticks in `flashForward()`; with Reduce Motion on, it skips the white flash and confetti.
- The color art uses the same world units, positions and hit boxes as the sprites (`CLOUD_SHAPES` repeats the
  circles the cloud sprites and their slow-fall masks come from), so a change to a sprite's size or position needs
  the matching change in the `hd*` drawing functions.

## Scores

- Saved in `localStorage` under `bale-out-v1` (format v2): `board` (this device's top 5 with names),
  `remote` (shared board last fetched), `lboard`/`lremote` (the same for the Lush Hall of Fame),
  `outbox` (entries not yet uploaded), `names`, `pending` (the running score of an unfinished show, with
  `k: "lush"` for Drunk Mode, saved after every landing and offered for a name on the next launch),
  `seeded` (this device's board has been queued for upload once).
- Two boards share one database path: Drunk Mode entries have ids starting `lush-`; everything else (Stunt Show
  and Flash Forward) is the main Hall of Fame. `pullBoard` fetches the top 200 by score and splits them.
- Drunk Mode uses `RIGS.long` (cart 50% longer, sprite `cart_long`) and `drunkStep()` for the tipsy horse;
  four of five stuntmen moves you up a level.
- `SYNC_URL` near the top of the game script is the Firebase Realtime Database address for the shared
  Hall of Fame: https://bale-out-default-rtdb.europe-west1.firebasedatabase.app (Firebase project
  `bale-out` in Chris's Google account). Empty means scores stay on each device. The database rules are in `firebase-rules.json`
  (anyone can read and append scores; nothing can be changed or deleted). Uploads are plain POSTs confirmed
  by reading the entry back by `id`; reads fall back to JSONP, so it works without CORS.
- These cloud sessions can't reach Firebase or github.io from the shell; verify the live site with WebFetch.
