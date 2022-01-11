import styled from "styled-components";

import { Theme } from "../../../utils/themes/ theme";

export const CommentCardStyle = styled.section`
  width: ${({isReply}) => isReply ? "90%" : "100%" };

  padding: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0 20px;

  background-color: ${Theme.default["white"]};
  
  border-radius: 5px;
`