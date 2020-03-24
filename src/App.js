import React from 'react';
import logo from './header.png';
import GameCard from './components/GameCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Background">
          <div>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
          <div>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
          <div>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
