import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const getMode = ()=>{
    return JSON.parse(localStorage.getItem("mode")) || false
  }
  const [dark,setMode] = useState(getMode())
  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])
 
  return (
    <div className={dark ?"App dark-mode":"App" }>
            <div className="nav">
            <label className="switch">
            <input 
            type="checkbox"
            checked={dark}
            onChange={()=>setMode(!dark)}/>
            <span className="slider round"></span>
          </label>
      </div>
      <div className="content">
        <h1>{dark?"Dark mode is on" :"Light mode is on"}</h1>
        <p style={{fontSize:"20px"}}>please press the toggle to see the dark mode</p>
      </div>
        
    </div>
  );
}

export default App;
