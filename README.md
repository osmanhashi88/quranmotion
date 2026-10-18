# QuranMotion

Read the Quran page by page, like the printed Madinah mushaf, and turn pages with a wave of your hand.

QuranMotion is a web app you can install on iPhone and Android. It works offline once installed.

## What it does

- All 604 pages in the 15 line Madinah mushaf layout, in the King Fahd Complex Uthmanic Hafs font
- Full Arabic view, or Arabic with translation (English built in, 30 more languages when online)
- One tap turns on hand gestures: swipe your hand across the camera, or hold it at one side, to turn the page. The camera picture is never shown or recorded
- Full page reading: the whole mushaf page fits the screen, with the menu shown only when you tap
- Optional automatic page turns on a timer, in reading settings
- Or swipe with a finger or use the buttons, with a paper curl page turn
- Pinch or double tap to zoom, tap for full screen, White, Paper and Night page colours
- Search by surah, ayah (2:255), page or juz, plus Surah, Ayah and Juz dropdowns
- Bookmarks and a list of pages you read before

## Hand gestures

| Gesture | Action |
| --- | --- |
| Swipe your hand to your right | Next page |
| Swipe your hand to your left | Previous page |
| Hold your hand at your right side | Next page |
| Hold your hand at your left side | Previous page |


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
