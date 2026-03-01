import { phonemeLabel, phonemeType } from '../data/phonemeDisplay';
import { useState, useRef, useEffect } from 'react';

/**
 * A single phoneme tile.
 *
 * Props:
 *   phoneme      – phoneme key string
 *   selected     – bool, tile is the active selection
 *   locked       – bool, no valid swaps exist for this position
 *   onClick      – () => void  (select / deselect)
 *   swaps        – Array<{ phoneme, word }> valid swaps (only passed when selected)
 *   onSwap       – ({ phoneme, word }) => void  (commit a swap)
 */
export default function PhonemeTile({ phoneme, selected, locked, onClick, swaps, onSwap }) {
  const label = phonemeLabel[phoneme] ?? phoneme;
  const type  = phonemeType(phoneme);

  // Captured once when tile becomes selected so phoneme/swaps changes mid-flip don't disrupt
  const capturedRef = useRef(null);
  const animating   = useRef(false);
  const touchStartY = useRef(null);

  const [displayIndex, setDisplayIndex] = useState(0);
  const [flipping,     setFlipping]     = useState(null); // null | 'up' | 'down'
  const [deselecting,  setDeselecting]  = useState(false);

  // Reset all local state when tile is deselected
  useEffect(() => {
    if (!selected) {
      capturedRef.current = null;
      setDisplayIndex(0);
      setFlipping(null);
      setDeselecting(false);
      animating.current = false;
    }
  }, [selected]);

  // Capture options the first render where the tile becomes selected
  if (selected && !capturedRef.current) {
    capturedRef.current = {
      opts: [
        { phoneme, label: phonemeLabel[phoneme] ?? phoneme },
        ...(swaps ?? []).map(s => ({
          phoneme: s.phoneme,
          label:   phonemeLabel[s.phoneme] ?? s.phoneme,
          word:    s.word,
        })),
      ],
    };
  }

  const opts     = capturedRef.current?.opts ?? [{ phoneme, label }];
  const total    = opts.length;
  const cur      = opts[displayIndex] ?? opts[0];
  const curLabel = cur.label;

  // Indices and labels for the upcoming flip frame
  const nextUpIdx   = (displayIndex + 1) % total;
  const nextDownIdx = (displayIndex - 1 + total) % total;
  const nextIdx     = flipping === 'up' ? nextUpIdx : nextDownIdx;
  const nextLabel   = opts[nextIdx]?.label ?? curLabel;

  // ── Touch / swipe handlers ─────────────────────────────────────────────────
  const handleTouchStart = (e) => {
    if (!selected) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!selected || animating.current || touchStartY.current === null) return;
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;
    if (Math.abs(delta) < 20) return; // too small — treat as tap
    doFlip(delta > 0 ? 'up' : 'down');
  };

  const doFlip = (dir) => {
    if (animating.current || total <= 1) return;
    animating.current = true;
    setFlipping(dir);
    const newIdx = dir === 'up' ? nextUpIdx : nextDownIdx;
    setTimeout(() => {
      setDisplayIndex(newIdx);
      setFlipping(null);
      animating.current = false;
    }, 320);
  };

  // ── Click / tap handler ────────────────────────────────────────────────────
  const handleClick = () => {
    if (animating.current) return;

    if (selected) {
      // Play reverse-lift animation then deselect (committing any swap choice)
      setDeselecting(true);
      setTimeout(() => {
        setDeselecting(false);
        if (displayIndex > 0) {
          // Commit the currently-displayed swap
          onSwap?.({ phoneme: cur.phoneme, word: cur.word });
        } else {
          onClick(); // deselect with no swap
        }
      }, 250);
    } else {
      onClick();
    }
  };

  // ── Class list ─────────────────────────────────────────────────────────────
  const cls = [
    'phoneme-tile',
    `tile--${type}`,
    selected    ? 'tile--selected'    : '',
    deselecting ? 'tile--deselecting' : '',
    locked      ? 'tile--locked'      : '',
  ].filter(Boolean).join(' ');

  // ── Unselected render ──────────────────────────────────────────────────────
  if (!selected) {
    return (
      <button
        className={cls}
        onClick={handleClick}
        aria-pressed={false}
        aria-label={`phoneme ${label}${locked ? ', no swaps available' : ''}`}
      >
        {label}
        {locked && (
          <span className="material-icons lock-icon" aria-hidden="true">lock</span>
        )}
      </button>
    );
  }

  // ── Selected render — flip-clock layout ────────────────────────────────────
  return (
    <button
      className={cls}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-pressed={true}
      aria-label={`phoneme ${curLabel}, selected. Swipe up or down to change.`}
    >
      {/* Top half — empty at rest; shows next label as static backdrop during flip-down */}
      <div className="tile__top">
        {flipping === 'down' && (
          <span className="tile__half-label">{nextLabel}</span>
        )}
      </div>

      {/* Horizontal divider at the card's mid-point */}
      <div className="tile__mid-line" />

      {/* Bottom half — current phonic, reduced size */}
      <div className="tile__bottom">
        {!flipping && (
          <span className="tile__half-label">{curLabel}</span>
        )}
        {/* Show static next label in bottom during flip-up (backs up the flap's back face) */}
        {flipping === 'up' && (
          <span className="tile__half-label">{nextLabel}</span>
        )}
      </div>

      {/* Animated flip flap — only rendered during the flip */}
      {flipping && (
        <div className={`tile__flap tile__flap--${flipping}`}>
          <div className="tile__flap-face tile__flap-front">
            <span className="tile__half-label">{curLabel}</span>
          </div>
          <div className="tile__flap-face tile__flap-back">
            <span className="tile__half-label">{nextLabel}</span>
          </div>
        </div>
      )}
    </button>
  );
}
