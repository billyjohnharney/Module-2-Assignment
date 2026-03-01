import { Fragment } from 'react';
import PhonemeTile from './PhonemeTile';
import { getValidSwaps, trickyWords } from '../data/words';

/**
 * Renders the current word as a row of phoneme tiles.
 *
 * Props:
 *   phonemes       – string[]
 *   word           – string (the assembled word)
 *   selectedIndex  – number | null
 *   onSelectIndex  – (i: number) => void
 *   onSwap         – ({ phoneme, word }) => void  (committed from flip)
 */
export default function WordDisplay({ phonemes, word, selectedIndex, onSelectIndex, onSwap }) {
  const isTricky = trickyWords.has(word);

  return (
    <div className="word-display">
      <div className="tile-row">
        {phonemes.map((phoneme, i) => {
          const swaps = getValidSwaps(phonemes, i);
          const locked = swaps.length === 0;
          const isSelected = selectedIndex === i;
          return (
            <Fragment key={i}>
              {i > 0 && <div className="tile-divider" aria-hidden="true" />}
              <PhonemeTile
                phoneme={phoneme}
                selected={isSelected}
                locked={locked}
                onClick={() => !locked && onSelectIndex(i)}
                swaps={isSelected ? swaps : undefined}
                onSwap={isSelected ? onSwap : undefined}
              />
            </Fragment>
          );
        })}
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
