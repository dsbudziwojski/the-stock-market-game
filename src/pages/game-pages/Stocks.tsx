import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import Pagination from "../../Components/Pagination";
import './Stocks.css';
import {GameProps, StockInfo} from "../../types";

function Stocks(props: GameProps) {
  const [options, setOptions] = useState<Array<StockInfo>>();
  const [loading, setLoading] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(0);
  const [stocksPerPage, setStocksPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(`https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&limit=${stocksPerPage}&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
  const [history, setHistory] = useState<Array<string>>([`https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&limit=${stocksPerPage}&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`])

  useEffect(() => {
    setLoading(true);
    const fetchStocks = async () => {
      setLoading(true);
      fetch(currentPage)
          .then(response => response.json())
          .then(json => {
            let temp: Array<StockInfo> = [];
            for(let i = 0; i < stocksPerPage; i++){
              temp.push({
                name: json.results[i].name,
                ticker: json.results[i].ticker,
                currency: json.results[i].currency_name.toUpperCase(),
                market: json.results[i].market.toUpperCase(),
                exchange: json.results[i].primary_exchange.toUpperCase(),
                id: json.results[i].ticker});
            }
            setOptions(temp);
            history.push(json.next_url + `&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`); // add next url
            setHistory(history);
          })
          .catch(error => console.error(error))
      setLoading(false);
    };
    fetchStocks();
  }, [currentPageNum, stocksPerPage]);

  const paganate = (currentPage: string, currentPageNum: number) => {
    setCurrentPageNum(currentPageNum)
    setCurrentPage(currentPage);
  }

  return(
      <>
        <div className='container mx-auto'>
          <NavLink to='/game/dashboard'><button>Dashboard</button></NavLink>
          <NavLink to='/game/stocks'><button>Stocks</button></NavLink>
          <NavLink to='/game/portfolio'><button>Portfolio</button></NavLink>
          <NavLink to='/'><button onClick={props.resetGameState}>Give Up</button></NavLink>
        </div>
        <div className='container'>
          <label>STOCKS</label>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Currency</th>
                <th>Market</th>
                <th>Exchange</th>
              </tr>
            </thead>
            <tbody>
            {options?.map((stock) => {
              return(
                  <tr key={stock.id}>
                    <td><NavLink to={`/game/stocks/${stock.id}`}>{stock.name}</NavLink></td>
                    <td>{stock.ticker}</td>
                    <td>{stock.currency}</td>
                    <td>{stock.market}</td>
                    <td>{stock.exchange}</td>
                  </tr>
              )
            })}
            </tbody>
          </table>
          <Pagination history={history} currPageNum={currentPageNum} paginate={paganate}/>
          <select value={stocksPerPage} onChange={() => {}}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </>
  )
}

export default Stocks