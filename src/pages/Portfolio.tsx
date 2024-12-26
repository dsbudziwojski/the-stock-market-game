import React from 'react'
import {NavLink} from "react-router-dom";

function Portfolio() {
  return(
      <>
        <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/stocks'><button>Stocks</button></NavLink>
        <NavLink to='/portfolio'><button>Portfolio</button></NavLink>
        <div>Portfolio</div>
      </>
  )
}

export default Portfolio