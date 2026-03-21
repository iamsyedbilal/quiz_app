import "./StartScreen.css";

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start-container">
      <div className="start-card">
        <h2>🎯 Welcome to QuizMaster</h2>
        <p>{numQuestions} questions to test your React knowledge</p>

        <button onClick={() => dispatch({ type: "START" })}>
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
}
