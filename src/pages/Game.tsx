import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {GameProps} from "../types";


function Game(props: GameProps) {

  const settingDifficulty = (amount: number) =>{
    props.setGameState({...props.gameState, money: amount})
  }

  return(
      <>
        <div>A couple things before we begin...</div>
        <div>What difficulty would you like?</div>
        <button onClick={() => {
          settingDifficulty(1000000);
        }}>Easy</button>
        <button onClick={()=>{
          settingDifficulty(100000);
        }}>Medium</button>
        <button onClick={()=>{
          settingDifficulty(50000);
        }}>Hard</button>
        <div>You currently have ${props.gameState.money}</div>
        <NavLink to="/game/dashboard"><button>I am ready</button></NavLink>
      </>
  )
}

export default Game