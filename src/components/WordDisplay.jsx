import PhonemeTile from './PhonemeTile';
import { getValidSwaps } from '../data/words';
import { trickyWords } from '../data/words';

/**
 * Renders the current word as a row of phoneme tiles.
 *
 * Props:
 *   phonemes       – string[]
 *   word           – string (the assembled word)
 *   selectedIndex  – number | null
 *   onSelectIndex  – (i: number) => void
 */
export default function WordDisplay({ phonemes, word, selectedIndex, onSelectIndex }) {
  const isTricky = trickyWords.has(word);

  return (
    <div className="word-display">
      {isTricky && (
        <div className="tricky-badge" aria-label="Tricky word">
          Tricky word
        </div>
      )}
      <div className={`tile-row ${isTricky ? 'tile-row--tricky' : ''}`}>
        {phonemes.map((phoneme, i) => {
          const swaps = getValidSwaps(phonemes, i);
          const locked = swaps.length === 0;
          return (
            <PhonemeTile
              key={i}
              phoneme={phoneme}
              selected={selectedIndex === i}
              locked={locked}
              onClick={() => !locked && onSelectIndex(i)}
            />
          );
        })}
      </div>
      <div className="word-text">{word}</div>
    </div>
  );
}
