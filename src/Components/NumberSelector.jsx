import styled from 'styled-components';

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber}) => {

  const numArr = [1, 2, 3, 4, 5, 6];

  const selectNumberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }


  return (
    <NumberSelectorContainer>
        <p>{error}</p>
        <div className="flex">
            {numArr.map((value, i) => (
                <Box 
                    key={i}
                    isSelected={value === selectedNumber}
                    onClick={() => selectNumberHandler(value)} 
                >
                    {value}
                </Box>
            ))}
        </div>
        <p><u>Select a number</u></p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items:end;
    gap: 24px;
    height: 90%;

    .flex {
        display: flex;
        gap: 24px;
        cursor: pointer;
    }
    p {
        font-size: 24px;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    font-size: 24px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white " : "black")}
`;