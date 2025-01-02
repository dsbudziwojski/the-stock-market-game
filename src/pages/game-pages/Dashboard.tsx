import React from "react";
import {NavLink} from "react-router-dom";
import {GameProps} from "../../types";
import Navbar from "../../Components/NavBar";

function Dashboard(props: GameProps){
  function nextDay() {
    //TODO
  }
  return(
      <div className="vh-100 bg-dark text-light">
        <Navbar resetGameState={props.resetGameState}/>
        <div className='container mx-auto'>
          <h1>Dashboard</h1>
        </div>
      </div>
  )
}

export default Dashboard