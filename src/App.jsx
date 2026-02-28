import { useState, useCallback } from 'react';
import PhonemeCountSelector from './components/PhonemeCountSelector';
import WordDisplay from './components/WordDisplay';
import SwapOptions from './components/SwapOptions';
import { randomWordByCount, getValidSwaps } from './data/words';
import './App.css';

function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(word);
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

export default function App() {
  const [phonemeCount,   setPhonemeCount]   = useState(null);
  const [currentEntry,   setCurrentEntry]   = useState(null);
  const [selectedIndex,  setSelectedIndex]  = useState(null);
  const [validSwaps,     setValidSwaps]     = useState([]);

  // ── Pick a count → load a random starting word ───────────────────────────
  const handleCountSelect = useCallback((n) => {
    const entry = randomWordByCount(n);
    if (!entry) return;
    setPhonemeCount(n);
    setCurrentEntry(entry);
    setSelectedIndex(null);
    setValidSwaps([]);
  }, []);

  // ── Load a new random word with the same count ────────────────────────────
  const handleNewWord = useCallback(() => {
    if (phonemeCount === null) return;
    handleCountSelect(phonemeCount);
  }, [phonemeCount, handleCountSelect]);

  // ── User clicks a phoneme tile ────────────────────────────────────────────
  const handleSelectIndex = useCallback((i) => {
    if (!currentEntry) return;
    if (selectedIndex === i) {
      setSelectedIndex(null);
      setValidSwaps([]);
      return;
    }
    const swaps = getValidSwaps(currentEntry.phonemes, i);
    setSelectedIndex(i);
    setValidSwaps(swaps);
  }, [currentEntry, selectedIndex]);

  // ── User picks a swap ─────────────────────────────────────────────────────
  const handleSwap = useCallback(({ phoneme, word }) => {
    if (!currentEntry || selectedIndex === null) return;
    const newPhonemes = [...currentEntry.phonemes];
    newPhonemes[selectedIndex] = phoneme;
    const newEntry = { word, phonemes: newPhonemes };
    setCurrentEntry(newEntry);
    setSelectedIndex(null);
    setValidSwaps([]);
    speakWord(word);
  }, [currentEntry, selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setValidSwaps([]);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Word Sounds</h1>
      </header>

      <main className="app-main">
        <PhonemeCountSelector
          selected={phonemeCount}
          onSelect={handleCountSelect}
        />

        {currentEntry && (
          <>
            <WordDisplay
              phonemes={currentEntry.phonemes}
              word={currentEntry.word}
              selectedIndex={selectedIndex}
              onSelectIndex={handleSelectIndex}
              onSwap={handleSwap}
            />

            {selectedIndex !== null && (
              <SwapOptions
                swaps={validSwaps}
                onSwap={handleSwap}
                onClose={handleClose}
              />
            )}

            <div className="word-actions">
              <button
                className="btn btn--speak"
                onClick={() => speakWord(currentEntry.word)}
                aria-label={`Say ${currentEntry.word}`}
              >
                ▶ Say it
              </button>
              <button
                className="btn btn--new"
                onClick={handleNewWord}
                aria-label="Load a new word"
              >
                New word
              </button>
            </div>
          </>
        )}

        {!currentEntry && (
          <p className="prompt">Pick a number above to begin.</p>
        )}
      </main>
    </div>
  );
}
