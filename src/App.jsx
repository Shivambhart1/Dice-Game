import "./App.css";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/Gameplay";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStarted} />}
    </>
  );
}

export default App;
