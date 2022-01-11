import Like from "../../atomics/Like";
import { LikeCounterStyle, Operation } from "./style";

export default function LikeCounter({ number }) {
  return (
    <LikeCounterStyle>
      <Operation>+</Operation>
      <Like number={number} />
      <Operation>-</Operation>
    </LikeCounterStyle>
  )
}