import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom";
import {GameProps, Stock} from "../../types";

function StockPage(props: GameProps) {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Stock>({
    afterHours: 0,
    close: 0,
    date: "N/a",
    high: 0,
    low: 0,
    open: 0,
    preMarket: 0,
    volume: 0
  });
  const [numToBuy, setNumToBuy] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      await fetch(`https://api.polygon.io/v1/open-close/${params.stockId}/${props.gameState.date}?adjusted=true&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
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

  function buyStock(numToBuy: number){
    // check if the data is not in default state
    if(data.date === "N/a"){
      alert("Invalid Request")
    } else{
      if(numToBuy > 0 && numToBuy * data?.close < props.gameState.money){
        const curMoney = props.gameState.money - numToBuy * data?.close;
        const curPortfolio = props.gameState.portfolio
        curPortfolio.push({name: "", amount:numToBuy , buyPrice: data?.close})
        props.setGameState({...props.gameState, money: curMoney, portfolio: curPortfolio})
      } else{
        console.log("Invalid Amount of Money / 0 is not a valid input")
      }
    }
  }
  console.log(props.gameState.portfolio)
  return(
      <>
        <div className='container mx-auto'>
          <NavLink to='/game/dashboard'><button>Dashboard</button></NavLink>
          <NavLink to='/game/stocks'><button>Stocks</button></NavLink>
          <NavLink to='/game/portfolio'><button>Portfolio</button></NavLink>
          <NavLink to='/'><button onClick={props.resetGameState}>Give Up</button></NavLink>
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
          <form onSubmit={(e) => {
            e.preventDefault();
            buyStock(numToBuy);
          }}>
            <input type="number" min={0} onChange={
              (e) => {
                setNumToBuy(Number(e.target.value));
                console.log(e.target.value)
              }
            }/>
            <button type="submit">Buy</button>
          </form>
        </div>
      </>
  )
}

export default StockPage;