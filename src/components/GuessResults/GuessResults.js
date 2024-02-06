import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import SubmittedGuess from '../SubmittedGuess/SubmittedGuess';

function GuessResults({guesses, answer}) {
  return (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <SubmittedGuess key={num} word={guesses[num]} answer={answer} />
    ))}
  </div>
  );
}

export default GuessResults;
