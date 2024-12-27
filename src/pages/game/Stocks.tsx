import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import './Stocks.css';

interface Stock {
  name: string;
  ticker: string;
  currency: string;
  market: string;
  exchange: string;
  id: string;
}

function Stocks() {
  const [options, setOptions] = useState<Array<Stock>>();
  const [loading, setLoading] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(0);
  const [stocksPerPage, setStocksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(`https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&limit=${stocksPerPage}&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
  const [history, setHistory] = useState<Array<string>>([`https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&limit=${stocksPerPage}&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`])


  useEffect(() => {
    setLoading(true);
    const fetchStocks = async () => {
      setLoading(true);
      fetch(currentPage)
          .then(response => response.json())
          .then(json => {
            let temp: Array<Stock> = [];
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
            history.push(json.next_url + `&apiKey=${process.env.SKsdbJqzL0Ehik47QA4ykN2Hh4Kk1PUO}`); // add next url
            setHistory(history);
          })
          .catch(error => console.error(error))
      setLoading(false);
    };
    fetchStocks();
  }, []);


  return(
      <>
        <NavLink to='/dashboard'><button>Dashboard</button></NavLink>
        <NavLink to='/stocks'><button>Stocks</button></NavLink>
        <NavLink to='/portfolio'><button>Portfolio</button></NavLink>
        <NavLink to='/'><button>Give Up</button></NavLink>
        <div>Stocks</div>
        <table>
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
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td>{stock.currency}</td>
                  <td>{stock.market}</td>
                  <td>{stock.exchange}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </>
  )
}

export default Stocks