import { useState, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import SocialButton from "./components/SocialButton";
import Quote from "./components/Quote";


function App() {
  // state to hold data from api
  const [data,setData] = useState({})

  // retrieve data from api
  const fetchData = async()=>{
    try{
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    catch (error){
      console.error(`Error: ${error}`);
    }
    }
    
useEffect(()=>{
    fetchData();
},[]
)

// color logic
const [color,setColor] = useState('blue');

const colorLogic = ()=>{
let colorNum = Math.floor(Math.random() * 7);

switch(colorNum){
case 1:
  setColor('light blue')
  break;
case 2:
  setColor('orange');
  break
case 3:
  setColor('green');
  break;
case 4:
  setColor('red');
  break;
case 5:
  setColor('coral');
  break;
case 6:
  setColor('violet')
}
}

// onclick to change color state and update api data 

const change = ()=>{
  colorLogic();
  fetchData();
}
  
  return (
  <>
  <div className={`${color}-background`} id="fake-body">
    <div id="quote-box">
      <Quote color={color} data={data}/>
      <div className={color} id="button-container">
        <SocialButton id='tweet-quote' url={`https://twitter.com/intent/tweet?text=${encodeURI(data.content)}`} icon="fa-brands fa-twitter"/>
        <Button color={color} change={change}/>
      </div>
    </div>
  </div>
  </>);
}

export default App;
