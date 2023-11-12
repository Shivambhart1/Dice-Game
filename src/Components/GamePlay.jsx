// import styles from "./Gameplay.module.css"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import Rules from "./Rules"

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currDice, setCurrDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const randomNumberGenerator = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }

  const resetScore = () => {
    setScore(0);
  }

const RollTheDice = () => {
    const randomNumber = randomNumberGenerator(1, 7);
    setCurrDice(randomNumber);

    if(!selectedNumber) {
      setError("Please Select a number");
      return;
    }

    if(selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev) => prev - 2);
      
      setSelectedNumber(undefined);
    }

}

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore 
              score={score}
            />
            <NumberSelector
              error={error}
              setError={setError}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RollDice 
          currDice={currDice}
          RollTheDice={RollTheDice}
          showRules={showRules}
          setShowRules={setShowRules}
          resetScore={resetScore}
        />
        {showRules && <Rules />}
    </MainContainer>
  )
}

export default Gameplay;

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
        height: 151px;
    }
`;