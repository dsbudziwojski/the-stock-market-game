import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home"
import Stocks from "./pages/game-pages/Stocks";
import Portfolio from "./pages/game-pages/Portfolio";
import Dashboard from "./pages/game-pages/Dashboard";
import StockPage from "./pages/game-pages/[stockId]";
import Game from "./pages/Game";
import {useState} from "react";
import {GameInfo} from "./types";

function App() {
  const gameDate = new Date(2024, 1, 1).toJSON().slice(0, 10);
  console.log(gameDate)
  const [gameState, setGameState] = useState<GameInfo>({money: 100000, date: gameDate, portfolio:[]})

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/game' element={<Game gameState={gameState} setGameState={setGameState}/>}/>
          <Route path='/game/stocks' element={<Stocks gameState={gameState} setGameState={setGameState}/>}/>
          <Route path='/game/portfolio' element={<Portfolio gameState={gameState} setGameState={setGameState}/>}/>
          <Route path='/game/dashboard' element={<Dashboard gameState={gameState} setGameState={setGameState}/>} />
          <Route path='/game/stocks/:stockId' element={<StockPage gameState={gameState} setGameState={setGameState}/>}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
}

function Layout(){

}

export default App;