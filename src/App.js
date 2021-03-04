import logo from './Brayan.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Brayan Batista and i'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/Brayanb10"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
