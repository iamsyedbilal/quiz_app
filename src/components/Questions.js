import Options from "./Options";
import "./Questions.css";

export default function Questions({ questions, dispatch, answer }) {
  return (
    <div className="quiz-card">
      <h2 className="question-title">{questions.question}</h2>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}
