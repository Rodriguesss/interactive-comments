import { useContext } from "react";
import UserContext from "../../../utils/context/UserContext";

import CommentCard from "../../generics/CommentCard"

import { CommentsStyle } from "./style";

export default function Comments() {
  const { data } = useContext(UserContext)
  const { comments } = data;

  return (
    <CommentsStyle>
      {comments.map(({ id, content, createdAt, score, user }) => (
        <CommentCard key={id} content={content} createdAt={createdAt} score={score}
          username={user.username} />
      ))}
    </CommentsStyle>
  )
}