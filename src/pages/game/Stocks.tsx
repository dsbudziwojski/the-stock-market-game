import React, {useEffect} from 'react'
import {Link, NavLink} from "react-router-dom";

interface Stock {
  name: string;
  ticker: string;
  id: number
}

function Stocks() {
    const Options: Array<Stock> = [
      {name: 'Apple Inc.', ticker: 'AAPL', id: 1},
      {name: 'Nvidia Corporation', ticker: 'NVDA', id: 2},
      {name: 'Microsoft Corporation', ticker: 'MSFT', id: 3},
      {name: 'Amazon.com, Inc', ticker: 'AMZN', id: 4},
      {name: 'Alphabet Inc.', ticker: 'GOOGL', id: 5},
      {name: 'Meta Platforms, Inc.', ticker: 'META', id: 6},
      {name: 'Tesla, Inc', ticker: 'TSLA', id: 7}
    ]

        console.log(FetchStockPrices(Options))
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
              <th>Current Price</th>
            </tr>
          </thead>
          <tbody>
          {Options.map((stock) => {
            return(
                <tr key={stock.id}>
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td>{}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </>
  )
}

function FetchStockPrices(Stocks: Array<Stock>) {
  let StockPrices: Array<number> = []
  for(let i = 0; i < Stocks.length; i++){
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${Stocks[i].ticker}&interval=5min&apikey=${process.env.REACT_APP_ALPHA_ADVANTAGE_API_KEY}`)
        .then(response => response.json())
        .then(json => console.log(json))t
        .catch(error => console.error(error))
  }

  return(0)
}

export default Stocks