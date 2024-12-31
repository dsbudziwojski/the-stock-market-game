import React from "react"
import {NavLink} from "react-router-dom";
import game from "./Game";
function Home() {
  return(
      <>
        <div className='Home'>
          <header>The Stock Market Game</header>
          <h1>Home</h1>
          <h2>Rules</h2>
          <p>
            You are a newly appointed portfolio manager at XYZ holdings, a recently established trading company.
            Despite being the youngest person on the team, you have the most ambition and hope to scale the corporate ladder.
            However, to do so, you have to first prove yourself. Unsure of a good way to do so, you come up with the idea of
            "competing" against your fellow workers to show your boss that you are WORTHY of a promotion...
          </p>
          <NavLink to='/game'><button>Start Game</button></NavLink>
        </div>
      </>
  )
}

export default Home
