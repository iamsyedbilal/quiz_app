import { useQuiz } from "../context/QuizContext";

export default function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((item, index) => (
        <button
          key={item}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "NEW_ANSWER", payload: index })}
          className={`option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}>
          {item}
        </button>
      ))}
    </div>
  );
}
