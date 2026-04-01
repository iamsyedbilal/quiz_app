import { useQuiz } from "../context/QuizContext";
import "./NextButton.css";

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn-next"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn-next" onClick={() => dispatch({ type: "FINISH" })}>
        Finish
      </button>
    );
}
