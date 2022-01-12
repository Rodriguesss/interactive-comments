import styled from "styled-components";

export const ProfileIconStyle = styled.img`
  border-radius: 90%;

  width: ${({ size }) => size !== undefined ? size : "30"}px;
  hwight: ${({ size }) => size !== undefined ? size : "30"}px;
`