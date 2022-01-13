//import CommentLine from "../../atomics/CommentLine"
import CommentContent from "../CommentContent"
import LikeCounter from "../LikeCounter"
import { CommentCardStyle, ReplyCommentContainer, Line, Replies } from "./style"

export default function CommentCard({ id, username, createdAt, content, score, replies, isReply }) {
  return (
    <>
      <CommentCardStyle isReply={isReply}>
        <LikeCounter number={score} id={id} />
        <CommentContent username={username} createdAt={createdAt} content={content} />
      </CommentCardStyle>

      {replies.length !== 0 ?
        <ReplyCommentContainer>
          <Line />
          <Replies>
            {replies.map(({ id, content, createdAt, score, user }) => (
              <CommentCard key={id} id={id} content={content} createdAt={createdAt} score={score}
                username={user.username} replies={[]} isReply={true} />
            ))}
          </Replies>
        </ReplyCommentContainer> : ""
      }
    </>

  )
}