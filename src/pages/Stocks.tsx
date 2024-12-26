import React from 'react'
import {NavLink} from "react-router-dom";

function Stocks() {
  return(
      <>
        <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/stocks'><button>Stocks</button></NavLink>
        <NavLink to='/portfolio'><button>Portfolio</button></NavLink>
        <div>Stocks</div>
      </>
  )
}

export default Stocks