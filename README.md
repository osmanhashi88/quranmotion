# QuranMotion

Read the Quran page by page, like the printed Madinah mushaf, and turn pages with a wave of your hand.

QuranMotion is a web app you can install on iPhone and Android. It works offline once installed.

## What it does

- All 604 pages in the 15 line Madinah mushaf layout, in the King Fahd Complex Uthmanic Hafs font
- Full Arabic view, or Arabic with translation (English built in, 30 more languages when online)
- Turn pages hands-free: wave your hand, use your eyes (double blink, look down or up to scroll, look to the side to turn), tilt the phone, or let pages turn on a timer. They can all run together. The camera picture is never shown or recorded
- Or swipe with a finger or use the buttons, with a paper curl page turn
- Pinch or double tap to zoom, tap for full screen, White, Paper and Night page colours
- Search by surah, ayah (2:255), page or juz, plus Surah, Ayah and Juz dropdowns
- Bookmarks and a list of pages you read before

## Hand gestures

| Gesture | Action |
| --- | --- |
| Open hand, swipe to your right | Next page |
| Open hand, swipe to your left | Previous page |
| Open hand, top of the camera | Scroll up |
| Open hand, bottom of the camera | Scroll down |
| Fist held for 1 second | Pause or resume |

| Blink twice quickly | Next page |
| Look down or up and hold | Scroll |
| Look to the side and hold | Turn the page |

The swipe direction can be flipped in settings.

## Files

- `index.html`: the whole app, including the Quran text, page layout and font, so it works offline
- `manifest.webmanifest`, `sw.js`: make it installable and offline
- `icons/`: app icons

## Run it

Serve the folder over https (any static host: Hostinger, Netlify, GitHub Pages), then open it on a phone and tap **Install app**. The camera and install button need https.

## Credits

- Quran text (Uthmani script) from The Noble Qur'an Encyclopedia and Saheeh International translation from Tanzil, via the quran-json project
- Page index from quran-meta. 15 line page layout derived from quran-madina-html (Waqf General Public License)
- KFGQPC Uthmanic Script HAFS font by the King Fahd Glorious Quran Printing Complex, included unmodified under its free licence
- Other translations from alquran.cloud. Hand tracking by Google MediaPipe
