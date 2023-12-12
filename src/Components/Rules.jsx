import styled from "styled-components";

const Rules = () => {
  return (
    <RulesBox>
      <div className="rules">
        <h2>How to Play dice game</h2>
        <div className="paras">
          <p>Select any number</p>
          <p>Click on dice image.</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice.
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      </div>
    </RulesBox>
  );
};

export default Rules;

const RulesBox = styled.div`
  gap: 24px;
  background-color: rgba(251, 241, 241, 1);
  max-width: 1000px;
  width: 940px;
  height: 210px;
  margin: 0 auto;
  position: relative;
  top: 25px;
  border-radius: 5px;
  .rules {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    top: 20px;
    left: 20px;
  }
  .rules .paras {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .rules .paras ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
