import React from 'react'
import styled from 'styled-components'

const Comment = () => {
  const CommentBox = styled.div`
    border: 1px solid #ccc;
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 10px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  `
  const NickName = styled.h3`
    display: inline;
    margin-right: 10px;
  `
  const CommentTime = styled.div`
    display: inline;
    font-size: 10px;
    color: gray;
  `
  return (
    <CommentBox>
      <NickName>닉네임</NickName>
      <CommentTime>2023.11.25 03:47</CommentTime>
      <p>정말 유익한 후기네요 ~ 잘 보고 갑니다!</p>
    </CommentBox>
  )
}

export default Comment
