export default function Options({ questions }) {
  return (
    <div className="options">
      {questions.options.map((item) => (
        <button className="option" key={item}>
          {item}
        </button>
      ))}
    </div>
  );
}
