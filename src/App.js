import React from 'react'
import Die from "./Die"
import "./style.css"
import {nanoid} from "nanoid"


const App = () => {

  const [dice, setDice] = React.useState(allNewDice())
    

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
          value:Math.ceil(Math.random() * 6),
          isHeld:false,
          id: nanoid()
        })
    }
    return newDice
}
function rollDice() {
  setDice(allNewDice())
}

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)

  return (
    <div>
      <main> 
       <div className="dice-container">
        {diceElements}
       </div>
      <button classNAme="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    </div>
  )
}

export default App
