import React from "react";
import {NavLink} from "react-router-dom";


// rigid Navigation Bar w/ 4 buttons
 function Navbar(props: {resetGameState: () => void}) {
   return(
     <div className='d-flex justify-content-lg-center p-3'>
       <NavLink to='/game/dashboard'><button className="btn btn-dark">Dashboard</button></NavLink>
       <NavLink to='/game/stocks'><button className="btn btn-dark">Stocks</button></NavLink>
       <NavLink to='/game/portfolio'><button className="btn btn-dark">Portfolio</button></NavLink>
       <NavLink to='/'><button className="btn btn-dark" onClick={props.resetGameState}>Give Up</button></NavLink>
     </div>
   )}

 export default Navbar;