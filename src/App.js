import { useState } from 'react';
import './css/App.css';
import Headerrrrr from './components/Header'
import FooterComponent from './components/Footer'
import APIImg from './assets/request-response.jpeg'

function App() {

  const [b, setB] = useState(7)

  console.log("b's value:",b)
  


  let a = 5

  function updateValue(){
    setB(b+1)
    a=6
    console.log('Value after updation:',a)
  }



  return (
    <div>
      <Headerrrrr propertyName={a}></Headerrrrr>
      <h1>App Component</h1>
      <p>Variable value: {b}</p>
      <button onClick={updateValue}>Update value</button>
      <img src={APIImg} alt=''/>
      {/* <button onClick={()=>updateValue()}>Update value</button> */}
      <FooterComponent propertyName={a}/>
    </div>
  );
}

export default App;
