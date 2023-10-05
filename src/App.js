import './App.css';
import { useState, useEffect} from 'react';
import SimpleCounter from './SimpleCounter';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect (() => {
  const interval = setInterval (() => {
    setCounter(counter => counter + 1)
  },1000)

  return () => clearInterval(interval)
  
  
  }, [counter]) 

  const calculatedSixth = Math.floor((counter / 100000) % 10);
  const calculatedFifth = Math.floor((counter / 10000) % 10);
  const calculatedFourth = Math.floor((counter / 1000) % 10);
  const calculatedThird = Math.floor((counter / 100) % 10);
  const calculatedSecond = Math.floor((counter / 10) % 10);
  const calculatedFirst = counter % 10;
  
  return (
    <SimpleCounter 

    numberSixth = {calculatedSixth}
    numberFifth = {calculatedFifth}
    numberFourth = {calculatedFourth}
    numberThird = {calculatedThird}
    numberSecond= {calculatedSecond}
    numberFirst = {calculatedFirst}/>
  );
}

export default App;
