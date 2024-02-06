import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert("Your guess must be 5 letters long.");
      return;
    }

    console.log({ guess });
    setGuess("");

    handleSubmitGuess(guess);
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="guess-input">Enter your guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          pattern="[A-Za-z]{5}"
          title="Your guess must be 5 letters long."
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
