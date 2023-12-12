import styles from "./StartGame.module.css";
import dices from "/images/dice/dices.png";

const StartGame = ({ toggle }) => {
  return (
    <div className={styles.main_container}>
      <div>
        <img src={dices} alt="" />
      </div>
      <div className={styles.inner_container}>
        <div className={styles.inner_container_heading}>
          <h1>Dice Game</h1>
        </div>
        <button onClick={toggle}>Play Now</button>
      </div>
      <h1></h1>
    </div>
  );
};

export default StartGame;
