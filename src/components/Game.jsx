import { useState, useRef, useEffect } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);

    setLetter("");
    letterInputRef.current.focus();
  };

  useEffect(() => {
    if (letters.includes(" ")) {
      verifyLetter(" ");
    } else if (letters.includes("-")) {
      verifyLetter("-");
    }
  }, [guessedLetters, letters, verifyLetter]);

  return (
    <div className="game">
      <p className="points">
        <span>
          Pontuação: <span className="ab">{score}</span>
        </span>
      </p>

      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p className="guesses">Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span
              key={i}
              className={letter == " " ? "invisibleSquare" : "letter"}
            >
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            autoComplete="off"
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Tentar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};
export default Game;
