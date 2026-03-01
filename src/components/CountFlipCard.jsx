import { useState, useRef } from 'react';
import { Button } from '@base-ui/react';

const MIN = 2;
const MAX = 8;

/**
 * A large flip-clock card for selecting a phoneme count (2–8).
 * Reuses the same .tile__top / .tile__mid-line / .tile__bottom / .tile__flap
 * CSS classes as PhonemeTile so the visual language is identical.
 *
 * Props:
 *   value    – current count (number)
 *   onChange – (newValue: number) => void
 */
export default function CountFlipCard({ value, onChange }) {
  const [flipping,    setFlipping]    = useState(null); // null | 'up' | 'down'
  const animating  = useRef(false);
  const touchStartY = useRef(null);

  const nextUp   = value < MAX ? value + 1 : MIN;
  const nextDown = value > MIN ? value - 1 : MAX;
  const nextVal  = flipping === 'up' ? nextUp : nextDown;

  const doFlip = (dir) => {
    if (animating.current) return;
    animating.current = true;
    setFlipping(dir);
    const newVal = dir === 'up' ? nextUp : nextDown;
    setTimeout(() => {
      setFlipping(null);
      animating.current = false;
      onChange(newVal);
    }, 320);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (animating.current || touchStartY.current === null) return;
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;
    if (Math.abs(delta) < 20) return;
    doFlip(delta > 0 ? 'up' : 'down');
  };

  return (
    <div className="count-flip-wrap">
      {/* Up arrow — also clickable on desktop */}
      <Button
        className="count-flip-arrow"
        onClick={() => doFlip('down')}
        aria-label="Fewer sounds"
      >
        <span className="material-icons">expand_less</span>
      </Button>

      {/* The card itself */}
      <div
        className="count-flip-card"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="img"
        aria-label={`${value} sounds`}
      >
        {/* Top half — empty at rest; shows next value during flip-down */}
        <div className="tile__top count-flip-card__half">
          {flipping === 'down' && (
            <span className="count-flip-label">{nextVal}</span>
          )}
        </div>

        {/* Centre divider */}
        <div className="tile__mid-line" />

        {/* Bottom half — current value */}
        <div className="tile__bottom count-flip-card__half">
          {!flipping && (
            <span className="count-flip-label">{value}</span>
          )}
          {flipping === 'up' && (
            <span className="count-flip-label">{nextVal}</span>
          )}
        </div>

        {/* Animated flap */}
        {flipping && (
          <div className={`tile__flap tile__flap--${flipping}`}>
            <div className="tile__flap-face tile__flap-front">
              <span className="count-flip-label">{value}</span>
            </div>
            <div className="tile__flap-face tile__flap-back">
              <span className="count-flip-label">{nextVal}</span>
            </div>
          </div>
        )}
      </div>

      {/* Down arrow */}
      <Button
        className="count-flip-arrow"
        onClick={() => doFlip('up')}
        aria-label="More sounds"
      >
        <span className="material-icons">expand_more</span>
      </Button>
    </div>
  );
}
