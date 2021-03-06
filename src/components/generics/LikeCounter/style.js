import styled from "styled-components";

import { Theme } from "../../../utils/themes/ theme";

const LikeCounterStyle = styled.div`
  background-color: ${Theme.default["lightGray"]};

  width: 40px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border-radius: 10px;

  font-size: 18px;
`

const Operation = styled.button`
  font-weight: bold;
  color: ${({ operation, simbol }) =>
    operation === simbol ? Theme.primary["moderateBlue"] : Theme.primary["lightGrayishBlue"]
  };

  :hover {
  color: ${Theme.primary["moderateBlue"]};
}

cursor: pointer;
`

export {
  LikeCounterStyle,
  Operation
}

