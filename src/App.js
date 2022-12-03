import TikTacToe from './components/TikTacToe';
import {useContext,useState} from 'react';
import { TTTContext } from './Helper/Tic';
import Start from './components/Start';
import HowToPlay from './components/HowToPlay';
function App() {
  const [direction,setDirection] = useState("Start");
  return (
    
    <div className="card">
      <TTTContext.Provider value={{direction,setDirection}}>
        {direction === "Start" && <Start/>}
        {direction === "Tutorials" && <HowToPlay/> }
        {direction === "Game" && <TikTacToe/>}

      </TTTContext.Provider>
      
  
    </div>
  );
}

export default App;
