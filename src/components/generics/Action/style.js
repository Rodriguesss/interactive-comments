import styled from "styled-components";

import { Theme } from "../../../utils/themes/ theme";

const ActionStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;

  font-weight: 500;
  color: ${Theme.primary["moderateBlue"]};

  cursor: pointer;
`

const ActionIcon = styled.img`
`

export {
  ActionStyle,
  ActionIcon
}