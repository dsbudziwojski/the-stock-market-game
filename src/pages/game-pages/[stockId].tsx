import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom";
import {GameProps, Stock} from "../../types";

function StockPage(props: GameProps) {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Stock>();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      await fetch(`https://api.polygon.io/v1/open-close/${params.stockId}/${props.gameState.date}?adjusted=true&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
          .then(response => response.json())
          .then(json => {
              console.log(json);
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

  function buyStock(formData: number){

  }

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
          <form>
            <input name="query" type="number"/>
            <button type="submit">Buy</button>
          </form>
        </div>
      </>
  )
}

export default StockPage;