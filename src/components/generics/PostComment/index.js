import ProfileIcon from "../../atomics/ProfileIcon";

import { Avatar } from "../../../utils/images/import_images"

import { PostCommentStyle, TextArea } from "./style";

import Button from "../Button";

import UserContext from "../../../utils/context/UserContext";
import { useContext } from "react";

export default function PostComment() {
  const { data } = useContext(UserContext)

  return (
    <PostCommentStyle>
      <ProfileIcon avatar={Avatar[data.currentUser.username]} size="40" />
      <TextArea rows="5" cols="50" placeholder="Add a comment...">
      </TextArea>
      <Button />
    </PostCommentStyle>
  )
}