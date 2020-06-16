import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer>

      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div `
  background-color: var(--bg);
  height: 100vh;
`