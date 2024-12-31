import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom";
import {GameProps, Stock} from "../../types";
import Navbar from "../../Components/NavBar";

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
        curPortfolio.push({name: params.stockId!, amount:numToBuy , buyPrice: data?.close}) // used non-null assertion operator
        props.setGameState({...props.gameState, money: curMoney, portfolio: curPortfolio})
      } else{
        console.log("Invalid Amount of Money / 0 is not a valid input")
      }
    }
  }
  console.log(props.gameState.portfolio)
  return(
      <div className="vh-100 bg-dark text-light">
        <Navbar resetGameState={props.resetGameState}/>
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
        <div className="container d-flex justify-content-lg-center p-3">
          <form onSubmit={(e) => {
            e.preventDefault();
            buyStock(numToBuy);
          }}>
            <div className="vstack">
              <label className="form-label">Number of Stocks to Buy</label>
              <input className="form-select-sm" type="number" min={0} onChange={
                (e) => {
                  setNumToBuy(Number(e.target.value));
                  console.log(e.target.value)
                }
              }/>
              <button className="btn btn-primary mt-4" type="submit">Buy</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default StockPage;