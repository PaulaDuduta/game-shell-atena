import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, [setUsers]);

  return (
    <div className="App">
      {JSON.stringify(users)}
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
      </header>
    </div>
  );
}

export default App;
