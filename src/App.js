import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import style from "./styles.module.css";

export default function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };
  const textStyle = (numClicked % 2 === 0) ? style.textBlue : style.textRed;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h2 className={textStyle}>You clicked {numClicked} time</h2>
      <h2 
      style={{
        color:  (numClicked % 2 === 0) ? 'blue' : 'red'
}}>You clicked {numClicked} times
</h2>
    </div>
  );
}

const StyledText = styled.h2`
  color: ${(props) => {
    if (props.numClicked % 2 === 0) {
      return "blue";
    }
    return "red";
  }};
`;