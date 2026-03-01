import { useState } from 'react';
import { Button } from '@base-ui/react';
import CountFlipCard from '../components/CountFlipCard';

/**
 * Learn-mode count selector screen.
 * The user picks how many phonemes (2–8) via the flip card, then taps Begin.
 *
 * Props:
 *   onBegin – (count: number) => void
 *   onBack  – () => void
 */
export default function LearnCountScreen({ onBegin, onBack }) {
  const [count, setCount] = useState(3);

  return (
    <div className="learn-count">
      <header className="learn-count__header">
        <Button
          className="back-btn"
          onClick={onBack}
          aria-label="Back to home"
        >
          <span className="material-icons" aria-hidden="true">arrow_back</span>
          Back
        </Button>
        <h2 className="learn-count__title">How many sounds?</h2>
      </header>

      <div className="learn-count__body">
        <p className="learn-count__hint">Swipe or tap the arrows to change</p>

        <CountFlipCard value={count} onChange={setCount} />

        <p className="learn-count__word-count">
          {count}-sound words
        </p>

        <Button
          className="btn btn--begin"
          onClick={() => onBegin(count)}
          aria-label={`Begin with ${count}-sound words`}
        >
          Begin
        </Button>
      </div>
    </div>
  );
}
