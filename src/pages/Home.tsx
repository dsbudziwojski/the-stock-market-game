import React from "react"
import {NavLink} from "react-router-dom";

function Home() {
  return(
        <div className="vh-100 bg-dark text-light">
          <div className="container">
            <h1 className="d-flex justify-content-lg-center pt-3">THE STOCK MARKET GAME</h1>
            <h3>So you decided to play the market...</h3>
            <p>
              You are a newly appointed portfolio manager at XYZ holdings, a recently established trading company.
              Despite being the youngest person on the team, you have the most ambition and hope to scale the corporate ladder.
              However, to do so, you have to first prove yourself. Unsure of a good way to do so, you come up with the idea of
              "competing" against your fellow workers to show your boss that you are WORTHY of a promotion...
            </p>
            <div className="d-flex justify-content-lg-center pt-3">
              <NavLink to='/game'>
                <button className="btn btn-primary btn-lg">Start Game</button>
              </NavLink>
            </div>

          </div>
        </div>
  )
}

export default Home
