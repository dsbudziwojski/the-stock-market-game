import React, {useEffect, useState} from 'react'
import {Link, NavLink} from "react-router-dom";

interface Stock {
  name: string;
  ticker: string;
  id: number
}

function Stocks() {
  const [options, setOptions] = useState<Array<Stock>>()

  useEffect(() => {
    fetch(`https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&order=asc&limit=1000&sort=market&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
      .then(response => response.json())
      .then(json => {
        let temp: Array<Stock> = [];
        for(let i = 0; i < 1000; i++){
          temp.push({name: json.results[i].name, ticker: json.results[i].ticker, id: i});
        }
        setOptions(temp);
      })
        .catch(error => console.error(error))
  },[]);


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
            </tr>
          </thead>
          <tbody>
          {options?.map((stock) => {
            return(
                <tr key={stock.id}>
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td><button>Info</button></td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </>
  )
}

export default Stocks