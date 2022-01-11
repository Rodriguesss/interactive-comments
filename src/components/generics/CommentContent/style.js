import styled from "styled-components";
import { Theme } from "../../../utils/themes/ theme";

const CommentContentStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0 10px;
`

const CommentHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommentHeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 15px;

  font-size: 14px;
`

const CommentHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`

const CommentDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15px;

  font-size: 14px;
  color: ${Theme.default["grayishBlue"]};
  word-break: break-word;
  line-height: 130%;
`

const CreateAt = styled.p`
  color: ${Theme.default["grayishBlue"]};
`

export {
  CommentContentStyle,
  CommentHeader,
  CommentHeaderLeft,
  CommentHeaderRight,
  CommentDescription,
  CreateAt
}