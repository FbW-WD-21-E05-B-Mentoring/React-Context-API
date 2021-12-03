
import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import Container from './Container';

function App() {
  return (
   <Container>
    <div className="App">
      <h1>Context API</h1>
      <ChildOne/>
      <ChildTwo/>
    </div>
   </Container>
  );
}

export default App;
