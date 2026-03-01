import { phonemeLabel, phonemeType } from '../data/phonemeDisplay';

/**
 * Shows the valid swap choices for the selected phoneme position.
 *
 * Props:
 *   swaps    – Array<{ phoneme: string, word: string }>
 *   onSwap   – ({ phoneme, word }) => void
 *   onClose  – () => void
 */
export default function SwapOptions({ swaps, onSwap, onClose }) {
  if (swaps.length === 0) return null;

  return (
    <div className="swap-panel" role="region" aria-label="Swap options">
      <div className="swap-panel__header">
        <span>Replace with…</span>
        <button className="swap-panel__close" onClick={onClose} aria-label="Close">✕</button>
      </div>
      <div className="swap-panel__options">
        {swaps.map(({ phoneme, word }) => {
          const type = phonemeType(phoneme);
          return (
            <button
              key={phoneme}
              className={`swap-option swap-option--${type}`}
              onClick={() => onSwap({ phoneme, word })}
              aria-label={`Swap to ${phonemeLabel[phoneme] ?? phoneme}, makes word ${word}`}
            >
              <span className="swap-option__phoneme">{phonemeLabel[phoneme] ?? phoneme}</span>
              <span className="swap-option__word">{word}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
