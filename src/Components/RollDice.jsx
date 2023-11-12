import styled from "styled-components";
import { useState } from "react";

const RollDice = ({currDice, RollTheDice, showRules, setShowRules, resetScore}) => {

    const [toggle, setToggle] = useState(false);

    const toggleRulesHandler = () => {
        setShowRules(!showRules);
        setToggle(!toggle)
    }

  return (
    <DiceContainer>
        <div className="dice" onClick= {RollTheDice}>
            <img 
            src= {`/images/dice/dice_${currDice}.png`} 
            alt="dice 1" 
            />
            <p>Click to Roll Dice</p>
        </div>
        <div className="rollbtns">
            <button 
              className="btn-light"
              onClick={resetScore}
              >
              Reset Score
              </button>
            <button 
              onClick={toggleRulesHandler}
              className="btn-dark"
              > 
              { toggle ? "Hide" : "Show"} Rules
            </button>
        </div>
    </DiceContainer>
    
  )
}

export default RollDice;

const DiceContainer = styled.div`

    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 36px;
    cursor: pointer;

    @font-face {
        font-family: JetBrainsMono;
        src: url("./fonts/webfonts/JetBrainsMono-Regular.woff2");
    }

    p {
        font-size: 24px;
    }
    .rollbtns {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .btn-light {
        padding: 10px 18px;
        width: 220px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        font-family: JetBrainsMono;
        cursor: pointer;
    }
    .btn-dark {
        padding: 10px 18px;
        width: 220px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: black;
        color: white;
        font-family: JetBrainsMono;
        cursor: pointer;
    }
    .btn-light:hover {
        background-color: black;
        color: white;
        transition: 0.7s;
    }
    .btn-dark:hover {
        background-color: white;
        color: black;
        transition: 0.7s;
    }
`;