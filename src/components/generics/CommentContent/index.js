import ProfileIcon from "../../atomics/ProfileIcon";
import Action from "../Action";

import { Avatar } from "../../../utils/images/import_images";

import { CommentContentStyle, CommentDescription, CommentHeader, CommentHeaderLeft, CommentHeaderRight, CreateAt } from "./style";

export default function CommentContent({ username, createdAt, content }) {
  return (
    <CommentContentStyle>
      <CommentHeader>
        <CommentHeaderLeft>
          <ProfileIcon avatar={Avatar[username]} />
          <p>{username}</p>
          <CreateAt>{createdAt}</CreateAt>
        </CommentHeaderLeft>

        <CommentHeaderRight>
          <Action />
        </CommentHeaderRight>
      </CommentHeader>

      <CommentDescription>
        {content}
      </CommentDescription>
    </CommentContentStyle>
  )
}