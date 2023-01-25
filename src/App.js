import { useState } from "react";

import { Menu } from "./modules/ui/menu";

function Game({onBack}) {
  return (
    <div className='game'>
        {/* <div id="game-container">
            <div id="player-row">
                <p id="player-total"></p>
                <div id="player-cards"></div>
            </div>
        
            <div id="in-game-controls">
                <img alt="Hit" id="hit"></img>
                <img alt="Stand" onclick="stand()" id="stand"></img>
                <img alt="Double Down" id="double-down"></img>
                <img alt="Surrender" id="surrender"></img>
                <img src="./images/button-images/restart.png" alt="Restart" id="restartButton" hidden></img>
                <p id="status"></p>
            </div>
        
            <div id="dealer-row">
                <div id="dealer-cards"></div>
                <p id="dealer-total"></p>
            </div>
        </div> */}
        <p>Test</p>
        <button className='back-button' onClick={onBack}>Go Back</button>
    </div>
  );
}

function BetInput({ balance, onStart }) {
  return (
    <>
      <p className='balance-text'>Current Balance: ${balance}</p>
      <input type="number" className='bet-input' placeholder="10" min="0"></input>
      <button className='start-button' onClick={onStart}>Start Game</button>
    </>
  );
}

function App() {
  const [gameActive, setGameActive] = useState(false);
  // const playerOne = new Player(100);
  // let balance = playerOne.balance;
  let balance = 100;

  const handlePageSwitch = () => {
    setGameActive(!gameActive);
  }

  if(!gameActive) {
    return <Menu balance={balance} onStart={() => handlePageSwitch()}/>
  } else {
    return <Game onBack={() => handlePageSwitch()}/>
  }
  
}

export default App;
