import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
import "./Questions.css";

export default function Questions() {
  const { questions, index } = useQuiz();

  const question = questions[index];

  if (!question) return null;

  return (
    <div className="quiz-card">
      <h2 className="question-title">{question.question}</h2>
      <Options question={question} />
    </div>
  );
}
