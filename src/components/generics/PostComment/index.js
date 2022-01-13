import { useContext, useState } from "react";

import ProfileIcon from "../../atomics/ProfileIcon";

import { Avatar } from "../../../utils/images/import_images"

import { PostCommentStyle, TextArea } from "./style";

import Button from "../../atomics/Button";

import UserContext from "../../../utils/context/UserContext";

export default function PostComment({ setComments }) {
  const { data } = useContext(UserContext)
  const [comment, setComment] = useState("")

  return (
    <PostCommentStyle>
      <ProfileIcon avatar={Avatar[data.currentUser.username]} size="40" />
      <TextArea rows="5" cols="50" placeholder="Add a comment..."
        onChange={({target}) => setComment(target.value)} value={comment} >
      </TextArea>
      <Button comment={comment} setComment={setComment} data={data} setComments={setComments} />
    </PostCommentStyle>
  )
}