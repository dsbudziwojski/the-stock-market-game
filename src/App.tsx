import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home"
import Stocks from "./pages/game-pages/Stocks";
import Portfolio from "./pages/game-pages/Portfolio";
import Dashboard from "./pages/game-pages/Dashboard";
import StockPage from "./pages/game-pages/[stockId]";
import Game from "./pages/Game";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/game' element={<Game />}/>
          <Route path='/game/stocks' element={<Stocks />}/>
          <Route path='/game/portfolio' element={<Portfolio />}/>
          <Route path='/game/dashboard' element={<Dashboard />} />
          <Route path='/game/stocks/:stockId' element={<StockPage />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
}

function Layout(){

}

export default App;