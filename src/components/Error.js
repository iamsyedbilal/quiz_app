import "./Error.css";

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-box">
        <h2>⚠️ Something went wrong</h2>
        <p>We couldn't load the quiz questions. Please try again.</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    </div>
  );
}
