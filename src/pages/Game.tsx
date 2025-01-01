import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {GameProps} from "../types";


function Game(props: GameProps) {

  const settingDifficulty = (amount: number) =>{
    props.setGameState({...props.gameState, money: amount})
  }

  return(
      <div className="vh-100 bg-dark text-light">
        <div className="container pt-3">
          <h1 className="d-flex justify-content-lg-center">THE STOCK MARKET GAME</h1>
          <h3>A couple things before we begin...</h3>
          <div className="d-flex flex-column align-items-center p-3">
            <h5>Select Difficulty</h5>
            <div className="btn-group p-1">
              <button className={`btn btn-outline-secondary ${props.gameState.money === 1000000 && "active"}`} onClick={() => {
                settingDifficulty(1000000);
              }}>Easy</button>
              <button className={`btn btn-outline-secondary ${props.gameState.money === 100000 && "active"}`} onClick={()=>{
                settingDifficulty(100000);
              }}>Medium</button>
              <button className={`btn btn-outline-secondary ${props.gameState.money === 50000 && "active"}`} onClick={()=>{
                settingDifficulty(50000);
              }}>Hard</button>
            </div>
            <p><strong>Starting Balance:</strong> ${props.gameState.money}</p>
            <NavLink to="/game/dashboard">
              <button className="btn btn-primary">Begin</button>
            </NavLink>
          </div>
        </div>
      </div>
  )
}

export default Game