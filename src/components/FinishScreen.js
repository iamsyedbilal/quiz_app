import { useQuiz } from "../context/QuizContext";
import "./FinishScreen.css";

export default function FinishScreen() {
  const { points, highscore, dispatch } = useQuiz();
  return (
    <div className="finish">
      <h2 className="finish-title">Quiz Finished 🎉</h2>

      <p className="finish-score">
        Your Score: <strong>{points}</strong>
      </p>

      <p className="finish-highscore">
        High Score: <strong>{highscore}</strong>
      </p>

      <button
        className="btn-restart"
        onClick={() => dispatch({ type: "RESTART" })}>
        Restart Quiz
      </button>
    </div>
  );
}
