import styled from "styled-components";
import { Theme } from "../../../utils/themes/ theme";

export const ButtonStyle = styled.button`
  background-color: ${Theme.primary["moderateBlue"]};

  color: ${Theme.default["white"]};

  border-radius: 5px;
  
  padding: 15px 30px;

  cursor: pointer;
`