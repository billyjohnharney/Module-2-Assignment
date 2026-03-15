import PhonemeTile from './PhonemeTile';
import { getValidSwaps, trickyWords } from '../data/words';

/**
 * Renders the current word one phoneme at a time (one phase per sound).
 *
 * Props:
 *   phonemes       – string[]
 *   word           – string (the assembled word)
 *   selectedIndex  – number | null
 *   onSelectIndex  – (i: number) => void
 *   onSwap         – ({ phoneme, word }) => void  (committed from flip)
 *   currentPhase   – number  (index of the active phoneme)
 *   onPhaseChange  – (i: number) => void
 */
export default function WordDisplay({ phonemes, word, selectedIndex, onSelectIndex, onSwap, currentPhase, onPhaseChange }) {
  const isTricky = trickyWords.has(word);
  const phoneme  = phonemes[currentPhase];
  const swaps    = getValidSwaps(phonemes, currentPhase);
  const locked   = swaps.length === 0;
  const isSelected = selectedIndex === currentPhase;

  return (
    <div className="word-display">

      {/* Phase navigation — dots + prev/next arrows */}
      <div className="phase-nav">
        <button
          className="phase-nav__btn"
          onClick={() => onPhaseChange(currentPhase - 1)}
          disabled={currentPhase === 0}
          aria-label="Previous sound"
        >
          <span className="material-icons" aria-hidden="true">chevron_left</span>
        </button>

        <div className="phase-dots">
          {phonemes.map((_, i) => (
            <button
              key={i}
              className={[
                'phase-dot',
                i < currentPhase  && 'phase-dot--completed',
                i === currentPhase && 'phase-dot--active',
                i > currentPhase  && 'phase-dot--upcoming',
              ].filter(Boolean).join(' ')}
              onClick={() => onPhaseChange(i)}
              aria-label={`Sound ${i + 1}${i < currentPhase ? ', completed' : i === currentPhase ? ', current' : ', upcoming'}`}
              aria-current={i === currentPhase ? 'step' : undefined}
            />
          ))}
        </div>

        <button
          className="phase-nav__btn"
          onClick={() => onPhaseChange(currentPhase + 1)}
          disabled={currentPhase === phonemes.length - 1}
          aria-label="Next sound"
        >
          <span className="material-icons" aria-hidden="true">chevron_right</span>
        </button>
      </div>

      {/* Single phoneme tile for the active phase */}
      <div className="tile-row">
        <PhonemeTile
          phoneme={phoneme}
          selected={isSelected}
          locked={locked}
          onClick={() => !locked && onSelectIndex(currentPhase)}
          swaps={isSelected ? swaps : undefined}
          onSwap={isSelected ? onSwap : undefined}
        />
      </div>

      <div className="word-label">
        <div className="word-text">{word}</div>
        {isTricky && (
          <div className="tricky-label" aria-label="Tricky word">
            <strong>Tricky</strong>
          </div>
        )}
      </div>
    </div>
  );
}
