import React,{useState} from "react";
//let time = new Date().toLocaleTimeString();

function App() {
  
  let now = new Date().toLocaleTimeString();
    setInterval(update,1000)
    const[time, setTime]=useState(now);
  function update(){
    const newTime=new Date().toLocaleTimeString();
    console.log("clicked");
    setTime(newTime)
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
