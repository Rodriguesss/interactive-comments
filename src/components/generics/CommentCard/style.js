import styled from "styled-components";

import { Theme } from "../../../utils/themes/ theme";

const CommentCardStyle = styled.section`
  width: ${({isReply}) => isReply ? "540px" : "100%" };

  padding: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0 20px;

  background-color: ${Theme.default["white"]};
  
  border-radius: 5px;
`

const ReplyCommentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Line = styled.hr`
  display: flex;
  justify-content: center;

  margin: 0;

  border: 3px solid ${Theme.default["lightGray"]};
  border-radius: 5px;
`

const Replies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-left: 6.5%;
`

export {
  CommentCardStyle,
  ReplyCommentContainer,
  Line,
  Replies
}