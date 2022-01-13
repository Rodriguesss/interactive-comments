import { ButtonStyle } from "./style";

export default function Button({ comment, setComment, data, setComments }) {
  function handleCommentCreate() {
    const commentObject = {
      id: data.comments.length + 1,
      content: comment,
      createdAt: "Today",
      score: 0,
      user: {
        username: data.currentUser.username
      },
      replies: []
    }

    comment !== "" ? handleCommentPost(commentObject) : alert("Campo vazio!")
  }

  function handleCommentPost(commentObject) {
    setComments(oldArray => [...oldArray, commentObject])
    data.comments.push(commentObject)
    setComment("")
  }

  return (
    <ButtonStyle type="button" onClick={() => handleCommentCreate()}>SEND</ButtonStyle>
  )
}