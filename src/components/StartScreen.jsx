import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="container">
      <div className="start">
        <h1>
          Bio<span>Gênio</span>
        </h1>
        <button onClick={startGame}>Começar</button>
      </div>
    </div>
  );
};
export default StartScreen;
