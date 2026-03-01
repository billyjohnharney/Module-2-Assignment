import { Fragment, useRef, useCallback } from 'react';
import { Popover, Button } from '@base-ui/react';
import PhonemeTile from './PhonemeTile';
import { getValidSwaps, trickyWords } from '../data/words';
import { phonemeLabel, phonemeType } from '../data/phonemeDisplay';

/**
 * Renders the current word as a row of phoneme tiles.
 * When a tile is selected a Popover opens anchored to it, listing swap options.
 *
 * Props:
 *   phonemes       – string[]
 *   word           – string (the assembled word)
 *   selectedIndex  – number | null
 *   onSelectIndex  – (i: number) => void
 *   onSwap         – ({ phoneme, word }) => void
 *   onClose        – () => void  (called when popover dismisses without a swap)
 */
export default function WordDisplay({ phonemes, word, selectedIndex, onSelectIndex, onSwap, onClose }) {
  const isTricky = trickyWords.has(word);
  const tileRefs = useRef([]);
  const getAnchor = useCallback(
    () => selectedIndex !== null ? (tileRefs.current[selectedIndex] ?? null) : null,
    [selectedIndex]
  );

  const swaps = selectedIndex !== null ? getValidSwaps(phonemes, selectedIndex) : [];

  return (
    <div className="word-display">
      <div className="tile-row">
        {phonemes.map((phoneme, i) => {
          const tileSwaps = getValidSwaps(phonemes, i);
          const locked = tileSwaps.length === 0;
          const isSelected = selectedIndex === i;
          return (
            <Fragment key={i}>
              {i > 0 && <div className="tile-divider" aria-hidden="true" />}
              <div ref={el => { tileRefs.current[i] = el; }}>
                <PhonemeTile
                  phoneme={phoneme}
                  selected={isSelected}
                  locked={locked}
                  onClick={() => !locked && onSelectIndex(i)}
                  swaps={isSelected ? tileSwaps : undefined}
                  onSwap={isSelected ? onSwap : undefined}
                />
              </div>
            </Fragment>
          );
        })}
      </div>

      {/* Swap options popover — anchored to whichever tile is selected */}
      <Popover.Root
        open={selectedIndex !== null && swaps.length > 0}
        onOpenChange={(open) => { if (!open) onClose(); }}
      >
        <Popover.Positioner
          anchor={getAnchor}
          side="bottom"
          sideOffset={8}
        >
          <Popover.Popup className="swap-panel" aria-label="Swap options">
            <div className="swap-panel__header">
              <span>Replace with…</span>
              <Popover.Close className="swap-panel__close" aria-label="Close">✕</Popover.Close>
            </div>
            <div className="swap-panel__options">
              {swaps.map(({ phoneme: swapPhoneme, word: swapWord }) => {
                const type = phonemeType(swapPhoneme);
                return (
                  <Button
                    key={swapPhoneme}
                    className={`swap-option swap-option--${type}`}
                    onClick={() => onSwap({ phoneme: swapPhoneme, word: swapWord })}
                    aria-label={`Swap to ${phonemeLabel[swapPhoneme] ?? swapPhoneme}, makes word ${swapWord}`}
                  >
                    <span className="swap-option__phoneme">{phonemeLabel[swapPhoneme] ?? swapPhoneme}</span>
                    <span className="swap-option__word">{swapWord}</span>
                  </Button>
                );
              })}
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Root>

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
