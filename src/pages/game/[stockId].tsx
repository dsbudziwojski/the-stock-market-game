import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom";

interface Stock {
  close: number,
  high: number,
  low: number,
  numTrans: number,
  open: number,
  timeStamp: number,
  volume: number,
  volumeWeightedAvg: number
}

function StockPage() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<Stock>>([]);

  // getting today's and yesterday's date
  let date = new Date();
  const currDate = date.toJSON().slice(0, 10);
  date.setDate(date.getDate()-5)
  const yestDate = date.toJSON().slice(0, 10)


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/hour/${yestDate}/${currDate}?adjusted=true&sort=asc&apiKey=${process.env.REACT_APP_POLYGONIO_API_KEY}`)
          .then(response => response.json())
          .then(json => {
            let temp: Array<Stock> = [];
            for(let i = 0; i < json.resultsCount; i++) {
              temp.push({
                close: json.results[i].c,
                high: json.results[i].h,
                low: json.results[i].l,
                numTrans: json.results[i].n,
                open: json.results[i].o,
                timeStamp: json.results[i].t,
                volume: json.results[i].v,
                volumeWeightedAvg: json.results[i].vw
              });
            }
            setData(temp);
          })
          .catch(error => console.error(error))
      setLoading(false);
    };
    fetchData();
  }, []);


  return(
      <>
        <div className='container mx-auto'>
          <NavLink to='/dashboard'><button>Dashboard</button></NavLink>
          <NavLink to='/stocks'><button>Stocks</button></NavLink>
          <NavLink to='/portfolio'><button>Portfolio</button></NavLink>
          <NavLink to='/'><button>Give Up</button></NavLink>
        </div>
        <a>{data[1].close}</a>
        <div>

        </div>
      </>
  )
}

export default StockPage;