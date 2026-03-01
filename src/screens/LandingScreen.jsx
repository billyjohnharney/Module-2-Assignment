/**
 * Landing screen — entry point of the app.
 *
 * Props:
 *   onLearn – () => void
 *   onGame  – () => void
 */
export default function LandingScreen({ onLearn, onGame }) {
  return (
    <div className="landing">
      <header className="landing__header">
        <h1 className="landing__title">Word Sounds</h1>
        <p className="landing__subtitle">Choose how you want to play</p>
      </header>

      <div className="landing__modes">
        {/* Learn mode card */}
        <button className="mode-card mode-card--learn" onClick={onLearn}>
          <span className="material-icons mode-card__icon" aria-hidden="true">
            menu_book
          </span>
          <span className="mode-card__name">Learn</span>
          <span className="mode-card__desc">
            Explore phonics at your own pace
          </span>
        </button>

        {/* Game mode card */}
        <button className="mode-card mode-card--game" onClick={onGame}>
          <span className="material-icons mode-card__icon" aria-hidden="true">
            sports_esports
          </span>
          <span className="mode-card__name">Game</span>
          <span className="mode-card__desc">
            Challenge yourself with word games
          </span>
        </button>
      </div>
    </div>
  );
}
