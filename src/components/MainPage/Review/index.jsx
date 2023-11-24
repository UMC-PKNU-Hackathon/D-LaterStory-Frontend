import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 4px);
  margin: 0 2px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 1px 1px 2px black;
  &:hover {
    cursor: pointer;
  }
`
const ReviewThumnail = styled.div`
  width: 100%;
  padding-top: calc(100% / 16 * 9);
  background-color: pink;
  border-radius: 16px;
  margin-bottom: 8px;
`
const ReviewContent = styled.div``
const ReviewTitle = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 4px;
`
const ReviewWriter = styled.p`
  font-size: 12px;
  margin: 0;
`

const Review = () => {
  const navigate = useNavigate()

  const HandleClickReview = () => {
    navigate('/review/1')
  }
  return (
    <ReviewWrapper onClick={HandleClickReview}>
      <ReviewThumnail></ReviewThumnail>
      <ReviewContent>
        <ReviewTitle>제목입니다.좀길수도있고아닐수도있어요</ReviewTitle>
      </ReviewContent>
      <ReviewWriter>장호정</ReviewWriter>
    </ReviewWrapper>
  )
}

export default Review
