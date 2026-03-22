import "./Progress.css";

export default function Progress({ index, numQuestions, points }) {
  const progress = ((index + 1) / numQuestions) * 100;

  return (
    <header className="progress">
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="progress-info">
        <span>Points: {points}</span>
        <span>
          Question {index + 1} / {numQuestions}
        </span>
      </div>
    </header>
  );
}
