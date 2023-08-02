import { useState } from "react";
export default function ScoreKeeper2({ numPlayers = 3, target = 5 }) {
  const initScores = new Array(numPlayers).fill(0);
  const [scores, setScores] = useState(initScores);
  const incrementScore = (index) => {
    setScores((prevScores) => {
      return prevScores.map((score, idx) => {
        if (idx === index) return score + 1;
        return score;
      });
    });
  };
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}
              <button onClick={() => incrementScore(index)}>+1</button>
              {score >= target && "Winner!"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
