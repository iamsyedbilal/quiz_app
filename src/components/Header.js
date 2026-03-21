import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="quiz-header">
      <div className="logo">🧠 QuizMaster</div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>Quizzes</li>
          <li>Leaderboard</li>
          <li>Profile</li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}
