import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6fc8f7;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;
const ButtomWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{number}</p>
        <ButtomWrapper>
          <Button onClick={() => setNumber(number + 1)}>+</Button>
          <Button onClick={() => setNumber(number - 1)}>-</Button>
        </ButtomWrapper>
      </header>
    </div>
  );
}

export default App;
