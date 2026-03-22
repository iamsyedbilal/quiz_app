import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "./components/Main.css";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };
    case "DATA_FAILED":
      return { ...state, status: "error" };
    case "START":
      return { ...state, status: "active" };
    case "NEW_ANSWER":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "NEXT_QUESTION":
      return { ...state, index: state.index + 1, answer: null };
    case "FINISH":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "RESTART":
      return { ...initialState, questions: state.questions, status: "ready" };

    default:
      throw new Error("Action unkonwn");
  }
}

export default function App() {
  const [{ questions, status, index, answer, highscore, points }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: "DATA_RECEIVED", payload: data });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: "DATA_FAILED" });
      });
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={questions.length}
              points={points}
              // maxPossiblePoints={maxPossiblePoints}
              answer={answer}
              index={index}
            />
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numQuestions={questions.length}
              index={index}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            // maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
