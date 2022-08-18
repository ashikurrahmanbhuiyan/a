import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/country/country';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
 
function App() {
  const [Countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> setCountries(data))
    .catch(error=>console.log())
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='btn btn-primary'>Click Me</button>
        <Button variant='dark'>Click</Button>
        <ul>
          {Countries.map(country => (
            <Country country={country}></Country>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
