import React from 'react'
import {NavLink} from "react-router-dom";
import {GameProps} from "../../types";
import Navbar from "../../Components/NavBar";

function Portfolio(props: GameProps) {

  return(
      <div className="vh-100 bg-dark text-light">
        <Navbar resetGameState={props.resetGameState}/>
        <div className='container'>
          <h1>PORTFOLIO</h1>
          <table className="table table-bordered table-striped table-dark">
            <thead>
              <tr>
                <th>Stocks</th>
                <th>Ticker</th>
                <th>Number of Shares Owned</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {/*TODO*/}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Portfolio