import { useState } from "react";

import Like from "../../atomics/Like";

import { LikeCounterStyle, Operation } from "./style";

export default function LikeCounter({ number }) {
  const [numberState, setNumberState] = useState(number)
  const [operation, setOperation] = useState("")

  function handleLike(simbol) {
    simbol === "+" ? addLike() : removeLike()
  }

  function addLike() {
    if(operation === "-") return
    
    operation === "" ? handleOperation("+", "+") : handleOperation("", "-")
  }

  function removeLike() {
    if(operation === "+") return

    operation === "" ? handleOperation("-", "-") : handleOperation("", "+")
  }

  function handleOperation(simbol, operation) {
    // eslint-disable-next-line
    setNumberState((0, eval)(`${numberState} ${operation} 1`))
    setOperation(simbol)
  }

  return (
    <LikeCounterStyle>
      <Operation operation={operation} simbol="+" onClick={() => handleLike("+")}>+</Operation>
      <Like number={numberState} />
      <Operation operation={operation} simbol="-" onClick={() => handleLike("-")}>-</Operation>
    </LikeCounterStyle>
  )
}