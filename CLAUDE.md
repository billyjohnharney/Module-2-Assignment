# CLAUDE.md — Word Sounds

Project instructions for Claude Code when working on this repository.

## What This App Does

**Word Sounds** is a browser-based phonics learning tool for early readers. The user picks how many sounds (phonemes) a word should have (2–8), sees the word split into individual phoneme tiles, and can tap a tile to swap that sound for another — producing a new real word each time. A "Say it" button reads the word aloud using the Web Speech API.

## Tech Stack

- **React 19** + **Vite 7** (ES modules, no TypeScript)
- No router — navigation is plain state in `App.jsx`
- No external state management — all state lives in `App` with `useState` / `useCallback`
- No testing framework yet

## Project Structure

```
src/
  App.jsx                     # Root component — all state and screen logic
  App.css                     # App-level layout styles
  index.css                   # Global reset + CSS custom properties
  main.jsx                    # React DOM entry point
  components/
    PhonemeCountSelector.jsx  # Row of buttons to pick phoneme count (2–8)
    WordDisplay.jsx           # Renders the current word as phoneme tiles
    PhonemeTile.jsx           # Single interactive phoneme button
    SwapOptions.jsx           # Panel of valid swap choices for selected tile
  data/
    words.js                  # Word list, indexes, and helper functions
    phonemeDisplay.js         # Label map and vowel/digraph/consonant classifier
public/
  vite.svg
```

## Data Model

### Phoneme Key System (`data/words.js`)

Words are stored as arrays of **phoneme key strings**, not raw letters:

| Category     | Keys                                           | Example       |
|--------------|------------------------------------------------|---------------|
| Short vowels | `a` `e` `i` `o` `u`                           | cat → k,a,t   |
| Long vowels  | `ay` `ee` `ie` `oe` `oo`                      | cake → k,ay,k |
| Other vowels | `oo2` (book) `ow` (cow) `oi` (boy) `er` (her) |               |
| Digraphs     | `sh` `ch` `th` `ng`                           |               |
| Consonants   | single letters                                 |               |

The lookup map `phonemeKeyToWord` keys on `phonemes.join("|")` — this is how swap validity is checked.

### Key Exports from `data/words.js`

- `wordList` — array of `{ word: string, phonemes: string[] }`
- `trickyWords` — `Set<string>` of sight words (shown with a "Tricky" badge)
- `wordsByCount` — `{ [n]: wordEntry[] }` pre-grouped by phoneme length
- `allPhonemes` — deduplicated list of every phoneme key in the dataset
- `getValidSwaps(phonemes, position)` — returns `{ phoneme, word }[]` of valid substitutions
- `randomWordByCount(n)` — pick any word with n phonemes
- `randomNonTrickyWordByCount(n)` — prefer non-tricky words; falls back if all are tricky

### Key Exports from `data/phonemeDisplay.js`

- `phonemeLabel` — maps key → display string (e.g. `oo2` → `"oo"`)
- `phonemeType(key)` — returns `"vowel"` | `"digraph"` | `"consonant"` (used for CSS class variants)

## App State (`App.jsx`)

| State           | Type            | Meaning                                    |
|-----------------|-----------------|--------------------------------------------|
| `phonemeCount`  | `number\|null`  | Currently selected sound count            |
| `currentEntry`  | `{word, phonemes}\|null` | Word currently on display       |
| `selectedIndex` | `number\|null`  | Which tile the user tapped                |
| `validSwaps`    | `{phoneme,word}[]` | Swap options for the selected tile     |

Tapping a tile calls `handleSelectIndex` → computes `getValidSwaps` → stores results.
Choosing a swap calls `handleSwap` → mutates `currentEntry` in place → speaks the new word → clears selection.

## Component Props Summary

### `PhonemeCountSelector`
```jsx
<PhonemeCountSelector selected={number|null} onSelect={(n) => void} />
```
Disables buttons for counts with no words in `wordsByCount`.

### `WordDisplay`
```jsx
<WordDisplay phonemes={string[]} word={string} selectedIndex={number|null} onSelectIndex={(i) => void} />
```
Passes `locked={true}` to tiles with no valid swaps. Shows "Tricky" badge for sight words.

### `PhonemeTile`
```jsx
<PhonemeTile phoneme={string} selected={bool} locked={bool} onClick={() => void} />
```
Applies CSS classes: `tile--vowel`, `tile--digraph`, or `tile--consonant`; `tile--selected`; `tile--locked`.

### `SwapOptions`
```jsx
<SwapOptions swaps={[{phoneme,word}]} onSwap={({phoneme,word}) => void} onClose={() => void} />
```
Returns `null` when `swaps` is empty.

## Coding Conventions

- Use `useCallback` for all handlers passed as props to prevent unnecessary re-renders
- CSS class composition: build arrays, filter out falsy strings, then `.join(' ')`
- Accessibility: every interactive element gets an `aria-label`; decorative icons get `aria-hidden="true"`; toggle buttons use `aria-pressed`
- Phoneme keys are the source of truth — never construct display strings from the raw `word` property character-by-character

## Adding New Words

Add entries to `wordList` in `src/data/words.js`. Each entry must be:
```js
{ word: "slug", phonemes: ["s", "l", "u", "g"] }
```
- Phoneme keys must exist in `phonemeLabel` in `phonemeDisplay.js`
- Adding a new phoneme key requires updating both `phonemeLabel` and `VOWELS` (if it's a vowel) in `phonemeDisplay.js`
- The swap engine works automatically — no other changes needed

## Adding New Phoneme Types

To add a new phoneme key (e.g. a new vowel sound):
1. Add it to `phonemeLabel` in `phonemeDisplay.js`
2. Add it to the `VOWELS` set if it's a vowel
3. Use it in `words.js` entries as normal

## Development

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server (localhost:5173)
npm run build    # production build → dist/
npm run lint     # ESLint check
npm run preview  # preview the production build locally
```

## Accessibility Notes

- Tap targets on tiles should remain ≥ 44px (check `App.css` if resizing)
- The OpenDyslexic font is loaded via CDN in `index.html` — do not remove it
- Material Icons (CDN) is used for the lock icon — keep the CDN link in `index.html`
- Always include `aria-label` on new buttons; use `aria-hidden="true"` on decorative icons
