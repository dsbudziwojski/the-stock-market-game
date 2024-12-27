import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home"
import Stocks from "./pages/game/Stocks";
import Portfolio from "./pages/game/Portfolio";
import Dashboard from "./pages/game/Dashboard";
import StockPage from "./pages/game/[stockId]";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/stocks' element={<Stocks />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/stocks/:stockId' element={<StockPage />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
}

function Layout(){

}

export default App;