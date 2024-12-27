import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom";

interface Stock {
  afterHours: number,
  close: number,
  date: string,
  high: number,
  low: number,
  open: number,
  preMarket: number,
  volume: number
}

function StockPage() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Stock>();

  // getting today's

  const date = new Date()
  date.setDate(date.getDate()-1)
  const yestDate = date.toJSON().slice(0, 10);
  console.log(yestDate);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      await fetch(`https://api.polygon.io/v1/open-close/${params.stockId}/${yestDate}?adjusted=true&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
          .then(response => response.json())
          .then(json => {
              setData({
                afterHours: json.afterHours,
                close: json.close,
                date: json.from,
                high: json.high,
                low: json.low,
                open: json.open,
                preMarket: json.preMarket,
                volume: json.volume
              });
          })
          .catch(error => console.error(error))
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);
  return(
      <>
        <div className='container mx-auto'>
          <NavLink to='/game/dashboard'><button>Dashboard</button></NavLink>
          <NavLink to='/game/stocks'><button>Stocks</button></NavLink>
          <NavLink to='/game/portfolio'><button>Portfolio</button></NavLink>
          <NavLink to='/'><button>Give Up</button></NavLink>
        </div>
        <div className="container">
          <h1>{params.stockId}</h1>
          <p>Date: {data?.date}</p>
          <p>After Hours: {data?.afterHours}</p>
          <p>Close: {data?.close}</p>
          <p>High: {data?.high}</p>
          <p>Low: {data?.low}</p>
          <p>Open: {data?.open}</p>
          <p>Volume: {data?.volume}</p>
        </div>
        <div>
          {/* TODO */}
        </div>
      </>
  )
}

export default StockPage;