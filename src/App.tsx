import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Stocks from "./pages/Stocks";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/stocks' element={<Stocks />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
      </BrowserRouter>
  );
}

function Layout(){

}

export default App;