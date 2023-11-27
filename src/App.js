import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {
  const [familiar, setFamiliar] = useState(false);

  return (
    <div className="App">
       <h1>Familiar: {familiar.toString()} </h1>
       <button onClick={()=>setFamiliar(!familiar)}>Toggle Friend</button>
       <User familiar = {familiar}></User>

    </div>
  );
}

export default App;
