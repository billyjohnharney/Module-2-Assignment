import { phonemeLabel, phonemeType } from '../data/phonemeDisplay';

/**
 * A single phoneme tile.
 *
 * Props:
 *   phoneme      – phoneme key string
 *   selected     – bool, tile is the active selection
 *   locked       – bool, no valid swaps exist for this position
 *   onClick      – () => void
 */
export default function PhonemeTile({ phoneme, selected, locked, onClick }) {
  const label = phonemeLabel[phoneme] ?? phoneme;
  const type  = phonemeType(phoneme);

  const classNames = [
    'phoneme-tile',
    `tile--${type}`,
    selected ? 'tile--selected'  : '',
    locked   ? 'tile--locked'    : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`phoneme ${label}${locked ? ', no swaps available' : ''}`}
    >
      {label}
      {locked && <span className="lock-icon" aria-hidden="true">🔒</span>}
    </button>
  );
}
