import { useContext } from "react";
import UserContext from "../../../utils/context/UserContext";

import CommentCard from "../../generics/CommentCard"
import PostComment from "../../generics/PostComment";

import { CommentsStyle, ContainerComment } from "./style";

export default function Comments() {
  const { data } = useContext(UserContext)
  const { comments } = data;

  return (
    <ContainerComment>
      <CommentsStyle>
        {comments.map(({ id, content, createdAt, score, user, replies }) => (
          <CommentCard key={id} id={id} content={content} createdAt={createdAt} score={score}
            username={user.username} replies={replies} isReply={false} />
        ))}
      </CommentsStyle>
      <PostComment />
    </ContainerComment>
  )
}