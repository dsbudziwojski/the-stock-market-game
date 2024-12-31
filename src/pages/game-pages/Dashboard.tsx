import React from "react";
import {NavLink} from "react-router-dom";
import {GameProps} from "../../types";

function Dashboard(props: GameProps){
  function nextDay() {
    //TODO
  }
  return(
      <>
        <div className='container mx-auto'>
          <NavLink to='/game/dashboard'><button>Dashboard</button></NavLink>
          <NavLink to='/game/stocks'><button>Stocks</button></NavLink>
          <NavLink to='/game/portfolio'><button>Portfolio</button></NavLink>
          <NavLink to='/'><button onClick={props.resetGameState}>Give Up</button></NavLink>
        </div>
        <div>Dashboard</div>
      </>
  )
}

export default Dashboard