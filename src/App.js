
import React, { createContext, useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export const MyContext = createContext()

function App() {
  const [user,setUser] = useState({name:"Joseph",age:23})
  return (
    <MyContext.Provider value={{user, setUser}}> 
    <div className="App">
      <h1>Context API</h1>
      <ChildOne/>
      <ChildTwo/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
