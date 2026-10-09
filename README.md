# Bale Out

Fly the copter, let go of the stuntman, and land him in the hay wagon.

Play it at **https://cjbcjbcjbcjb.github.io/bale-out/**

## Put it on your iPhone home screen

1. Open the link above in Safari.
2. Tap Share, then **Add to Home Screen**, then **Add**.
3. Open it from the new icon. It runs full screen, and after the first launch it works offline.

## Scoring

A stuntman who lands in the hay scores the level number times the height of the drop. If he fell through a cloud on
the way down, he also earns a cloud bonus for every moment he spent inside it, but only if he still lands in the hay.

## High scores

The top five Stunt Show scores go in a Hall of Fame, each with the name of whoever set it. Scores are saved after
every landing, so closing the app mid-game doesn't lose them. When `SYNC_URL` in `index.html` points at a Firebase
Realtime Database (rules in `firebase-rules.json`), the Hall of Fame is shared by every device that plays.

## Controls

- **Phone:** drag the FLY pad (or the game screen) to fly. Tap DROP, or tap the screen, to let go.
- **Computer:** the mouse is the flight stick. Click to drop. Arrow keys and the space bar also work. P pauses, M mutes.

## Credits

A tribute to StuntCopter, the 1986 Macintosh game by Duane Blehm (HomeTown Software). The rules follow his
released source code; the art, sound and code here are new. The pixel font is Silkscreen by Jason Kottke,
used under the SIL Open Font License (see `fonts/OFL.txt`).
