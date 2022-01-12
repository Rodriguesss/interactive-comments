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
    operation === "" ? handleNumberState("+", "+") : handleNumberState("", "-")
  }

  function removeLike() {
    operation === "" ? handleNumberState("-", "-") : handleNumberState("", "+")
  }

  function handleNumberState(simbol, operation) {
     // eslint-disable-next-line
    setNumberState((operation, eval)(`${numberState} ${operation} ${1}`))
    setOperation(simbol)
  }

  return (
    <LikeCounterStyle>
      <Operation onClick={() => handleLike("+")}>+</Operation>
      <Like number={numberState} />
      <Operation onClick={() => handleLike("-")}>-</Operation>
    </LikeCounterStyle>
  )
}