# Bale Out

Fly the copter, let go of the stuntman, and land him in the hay wagon.

Play it at **https://cjbcjbcjbcjb.github.io/bale-out/**

## Put it on your iPhone home screen

1. Open the link above in Safari.
2. Tap Share, then **Add to Home Screen**, then **Add**.
3. Open it from the new icon. It runs full screen, and after the first launch it works offline.

## Modes

- **Stunt Show:** five stuntmen per level. Land all five in the hay to move up. Landing on the driver or the horse
  ends the show.
- **Flash Forward:** the same show in full color. Each game opens in the original black and white, then the screen
  flashes and everything jumps 40 years ahead. Same rules, and the scores go in the same Hall of Fame.
- **Drunk Mode:** the hay wagon is 50% longer and the horse is tipsy: he changes speed without warning and stops to
  look around. Land four of five to move up; the driver and the horse are still off limits. Scores go in their own
  Lush Hall of Fame.
- **Neon Drop:** the same show as abstract neon art. A glider drops a glowing cube into a light-catcher sliding along
  a synthwave grid, to a soundtrack synthesised live in the browser. Land in the blue basin and keep off the red core
  and drive pod. Same scoring as the Stunt Show, and the scores go in the same Hall of Fame.

## Scoring

A stuntman who lands in the hay scores the level number times the height of the drop. If he fell through a cloud on
the way down, he also earns a cloud bonus for every moment he spent inside it, but only if he still lands in the hay.

## High scores

The top five Stunt Show, Flash Forward and Neon Drop scores go in the Hall of Fame, each with the name of whoever
set it (Drunk Mode has its own Lush Hall of Fame). Scores are saved after every landing, so closing the app mid-game
doesn't lose them. When `SYNC_URL` in `index.html` points at a Firebase Realtime Database (rules in
`firebase-rules.json`), the Hall of Fame is shared by every device that plays.

## Controls

- **Phone:** drag the FLY pad (or the game screen) to fly. Tap DROP, or tap the screen, to let go.
- **Computer:** the mouse is the flight stick. Click to drop. Arrow keys and the space bar also work. P pauses, M mutes.

## Credits

A tribute to StuntCopter, the 1986 Macintosh game by Duane Blehm (HomeTown Software). The rules follow his
released source code; the art, sound and code here are new. The pixel font is Silkscreen by Jason Kottke,
used under the SIL Open Font License (see `fonts/OFL.txt`).
