import { useState, useCallback } from 'react';
import LandingScreen from './screens/LandingScreen';
import LearnCountScreen from './screens/LearnCountScreen';
import WordDisplay from './components/WordDisplay';
import SwapOptions from './components/SwapOptions';
import { randomNonTrickyWordByCount, getValidSwaps } from './data/words';
import './App.css';

function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(word);
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

// Screen IDs
// 'landing' | 'learn-count' | 'learn-word' | 'game'

export default function App() {
  const [screen,        setScreen]        = useState('landing');
  const [phonemeCount,  setPhonemeCount]  = useState(3);
  const [currentEntry,  setCurrentEntry]  = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [validSwaps,    setValidSwaps]    = useState([]);

  // ── Start a learn-mode session with the chosen count ─────────────────────
  const handleBeginLearn = useCallback((count) => {
    const entry = randomNonTrickyWordByCount(count);
    if (!entry) return;
    setPhonemeCount(count);
    setCurrentEntry(entry);
    setSelectedIndex(null);
    setValidSwaps([]);
    setScreen('learn-word');
  }, []);

  // ── Load a new word with the same count ───────────────────────────────────
  const handleNewWord = useCallback(() => {
    const entry = randomNonTrickyWordByCount(phonemeCount);
    if (!entry) return;
    setCurrentEntry(entry);
    setSelectedIndex(null);
    setValidSwaps([]);
  }, [phonemeCount]);

  // ── User taps a phoneme tile ──────────────────────────────────────────────
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

  // ── Commit a swap (from SwapOptions panel or flip-card swipe) ─────────────
  const handleSwap = useCallback(({ phoneme, word }) => {
    if (!currentEntry || selectedIndex === null) return;
    const newPhonemes = [...currentEntry.phonemes];
    newPhonemes[selectedIndex] = phoneme;
    setCurrentEntry({ word, phonemes: newPhonemes });
    setSelectedIndex(null);
    setValidSwaps([]);
    speakWord(word);
  }, [currentEntry, selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setValidSwaps([]);
  }, []);

  // ── Screen routing ────────────────────────────────────────────────────────

  if (screen === 'landing') {
    return (
      <div className="app">
        <LandingScreen
          onLearn={() => setScreen('learn-count')}
          onGame={() => setScreen('game')}
        />
      </div>
    );
  }

  if (screen === 'learn-count') {
    return (
      <div className="app">
        <LearnCountScreen
          onBegin={handleBeginLearn}
          onBack={() => setScreen('landing')}
        />
      </div>
    );
  }

  if (screen === 'game') {
    return (
      <div className="app">
        <div className="game-placeholder">
          <button
            className="back-btn"
            onClick={() => setScreen('landing')}
            aria-label="Back to home"
          >
            <span className="material-icons" aria-hidden="true">arrow_back</span>
            Back
          </button>
          <p className="game-placeholder__text">Game mode coming soon!</p>
        </div>
      </div>
    );
  }

  // ── learn-word screen ─────────────────────────────────────────────────────
  return (
    <div className="app">
      <header className="app-header">
        <button
          className="back-btn"
          onClick={() => setScreen('learn-count')}
          aria-label="Back to count selector"
        >
          <span className="material-icons" aria-hidden="true">arrow_back</span>
          Back
        </button>
        <h1>Word Sounds</h1>
      </header>

      <main className="app-main">
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
      </main>
    </div>
  );
}
