import "./Questions.css";

export default function Questions() {
  return (
    <div className="quiz-card">
      <h2 className="question-title">What is React?</h2>

      <div className="options">
        <button className="option">Library</button>
        <button className="option">Framework</button>
        <button className="option">Programming Language</button>
        <button className="option">Database</button>
      </div>
    </div>
  );
}
