import logo from './logo.svg';
import './App.css';
import Youtube from './Youtube';
function App() {
  return (
    // this is the file to edit , and do the changes 
    <div className="App">
      <Youtube></Youtube>
      <header className="App-header">
        <h1>Hii ,this is Avichal Dwivedi.</h1>
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
