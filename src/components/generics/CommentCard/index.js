import CommentContent from "../CommentContent"
import LikeCounter from "../LikeCounter"
import { CommentCardStyle } from "./style"

export default function CommentCard({ username, createdAt, content, score }) {
  return (
    <CommentCardStyle>
      <LikeCounter number={score} />
      <CommentContent username={username} createdAt={createdAt} content={content} />
    </CommentCardStyle>
  )
}