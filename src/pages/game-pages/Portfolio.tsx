import React from 'react'
import {NavLink} from "react-router-dom";
import {GameProps} from "../../types";

function Portfolio(props: GameProps) {
  return(
      <>
        <div className='container mx-auto'>
          <NavLink to='/game/dashboard'><button>Dashboard</button></NavLink>
          <NavLink to='/game/stocks'><button>Stocks</button></NavLink>
          <NavLink to='/game/portfolio'><button>Portfolio</button></NavLink>
          <NavLink to='/'><button>Give Up</button></NavLink>
        </div>
        <div>Portfolio</div>
      </>
  )
}

export default Portfolio