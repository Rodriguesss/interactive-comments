//import CommentLine from "../../atomics/CommentLine"
import CommentContent from "../CommentContent"
import LikeCounter from "../LikeCounter"
import { CommentCardStyle } from "./style"

export default function CommentCard({ username, createdAt, content, score, replies, isReply }) {
  return (
    <>
      <CommentCardStyle isReply={isReply}>
        <LikeCounter number={score} />
        <CommentContent username={username} createdAt={createdAt} content={content} />
      </CommentCardStyle>

      {replies.length !== 0 && replies.map(({ id, content, createdAt, score, user }) => (
        <CommentCard key={id} content={content} createdAt={createdAt} score={score}
          username={user.username} replies={[]} isReply={true} />
      ))}
    </>

  )
}