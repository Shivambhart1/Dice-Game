import styles from "./TotalScore.module.css";

const TotalScore = ({ score }) => {
  return (
    <div className={styles.score_container}>
        <h1>{score}</h1>
        <p><u>Total Score</u></p>
    </div>
  )
}

export default TotalScore