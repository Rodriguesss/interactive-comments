import styled from "styled-components";

const CommentsStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;

  margin-top: 5%;
`

const ContainerComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  width: 630px;
`

export {
  CommentsStyle,
  ContainerComment
}