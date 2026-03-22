export default function Options({ questions, dispatch, answer }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions.options.map((item, index) => (
        <button
          key={item}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "NEW_ANSWER", payload: index })}
          className={`option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === questions.correctOption
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
