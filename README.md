# Word Sounds

A browser-based phonics learning tool for early readers built with React and Vite.

## What It Does

Pick how many sounds (phonemes) a word should have (2–8), then see the word broken into individual sound tiles. Tap any tile to swap that sound for another — the app only shows swaps that produce a real word. Use the **Say it** button to hear the word read aloud.

Tricky/sight words are labelled so learners know to treat them with care.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech

- React 19 + Vite 7
- Web Speech API for word pronunciation
- OpenDyslexic font for readability
- WCAG-compliant ARIA labels throughout

## Project Layout

```
src/
  App.jsx                     # Root — all state and navigation logic
  components/
    PhonemeCountSelector.jsx  # Pick number of sounds (2–8)
    WordDisplay.jsx           # Word as a row of phoneme tiles
    PhonemeTile.jsx           # Single interactive phoneme button
    SwapOptions.jsx           # Swap choices for the selected tile
  data/
    words.js                  # Word list, indexes, swap engine
    phonemeDisplay.js         # Phoneme label map and type classifier
```

## Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start development server           |
| `npm run build`   | Production build → `dist/`         |
| `npm run preview` | Preview production build locally   |
| `npm run lint`    | Run ESLint                         |
