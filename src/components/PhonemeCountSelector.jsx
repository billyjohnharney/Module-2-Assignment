import { wordsByCount } from '../data/words';

/**
 * Lets the user choose how many phonemes the starting word should have (2–8).
 *
 * Props:
 *   selected   – current count (number | null)
 *   onSelect   – (n: number) => void
 */
export default function PhonemeCountSelector({ selected, onSelect }) {
  const counts = [2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="count-selector">
      <p className="count-selector__label">How many sounds?</p>
      <div className="count-selector__buttons">
        {counts.map(n => {
          const available = (wordsByCount[n]?.length ?? 0) > 0;
          return (
            <button
              key={n}
              className={[
                'count-btn',
                selected === n   ? 'count-btn--active' : '',
                !available       ? 'count-btn--disabled' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => available && onSelect(n)}
              disabled={!available}
              aria-pressed={selected === n}
              aria-label={`${n} sounds${!available ? ', none available' : ''}`}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
