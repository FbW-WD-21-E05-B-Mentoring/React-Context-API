
import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';


function App() {
  const [user,setUser] = useState({name:"Joseph",age:23})
  return (
    <div className="App">
      <h1>Context API</h1>
      <ChildOne setUser={setUser}/>
      <ChildTwo name={user.name} age={user.age}/>
    </div>
  );
}

export default App;