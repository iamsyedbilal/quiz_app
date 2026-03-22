import "./NextButton.css";

export default function NextButton({ dispatch, answer, index, numQuestions }) {
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
