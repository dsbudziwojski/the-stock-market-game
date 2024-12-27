import React, {useState} from "react";

function Game() {
  const [money, setMoney] = useState(100000);

  const settingDifficulty = (amount: number) =>{
    setMoney(amount);
    return(
        <div>
          {`You have ${amount} money`}
        </div>
    )
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
      </>
  )
}

export default Game