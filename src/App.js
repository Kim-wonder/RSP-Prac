import React from 'react';
import './App.css'
import Box from './component/Box';
import Button from './component/Button';
import {useState} from 'react';




const App = () => {
  const [userChoice,setUserChoice] = useState("");

  const setUserSelect = (userChoice) => {
    setUserChoice(userChoice)
  }

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={setUserSelect}/>
        <Box title="Computer"/>
      </div>
      <div className='buttonSet'>
        <Button />
      </div>
    </div>
  );
}

export default App;
