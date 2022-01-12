import styled from "styled-components";
import { Theme } from "../../../utils/themes/ theme";

const PostCommentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0 10px;

  padding: 20px;

  border-radius: 5px;
  
  background-color: ${Theme.default["white"]};
`

const TextArea = styled.textarea`
  width: 100%;

  padding: 10px 20px;

  border: 1px solid ${Theme.default["lightGray"]};
  border-radius: 10px;

  color: ${Theme.default["darkBlue"]};

  :focus {
    border: 1px solid ${Theme.default["grayishBlue"]}
  }

  ::placeholder {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
  }

  resize: none;
  overflow: hidden;
`

export {
  PostCommentStyle,
  TextArea
}