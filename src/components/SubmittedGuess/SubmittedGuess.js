import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  let className = status ? `cell ${status}` : "cell";
  return (
    <>
      <span className={className}>{letter}</span>
    </>
  );
}

function SubmittedGuess({ word, answer }) {
  const checkedGuess = checkGuess(word, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default SubmittedGuess;
