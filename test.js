
import './App.css';
import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState();
  const [area, setArea] = useState();

  function getArea() {
    if(num > 0){
      var areaResult = Math.pow(num, 2) * 3.1415;
      alert(areaResult);
      setArea(areaResult);
    }else{
      setArea('');
    }
  };


  return (
    <div className='App' >
      <input type="text" name="name" 
      value = {num} placeholder="Enter radius" 
      onChange={(c) => {setNum(c.target.value.replace(/[^\d]/,''));}} /><br/>
      <button onClick={() =>{getArea()}} text='getArea'>Click to calculate area</button>
      <br/>
      A=πr&sup2;<br/>
      A = {area}
    </div>
  );
}

export default App;
