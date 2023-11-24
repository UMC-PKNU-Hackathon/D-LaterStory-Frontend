import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 30px);
  margin: 0 15px;
  margin-bottom: 60px;
  border: 1px solid #ccc;
  border-radius: 16px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    cursor: pointer;
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
const ReviewThumnail = styled.div`
  width: 100%;
  padding-top: calc(100% / 16 * 9);
  background-color: pink;
  border-radius: 16px 16px 0px 0px;
  margin-bottom: 8px;
`
const ReviewContent = styled.div`
  padding: 10px;
`
const ReviewTitle = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;
`
const ReviewWriter = styled.p`
  font-size: 12px;
  margin: 0;
`
const ReviewTag = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  color: gray;
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
        <ReviewTag>#해시태그</ReviewTag>
        <ReviewTitle>제목입니다.좀길수도있고아닐수도있어요</ReviewTitle>
        <ReviewWriter>2023.11.25</ReviewWriter>
      </ReviewContent>
    </ReviewWrapper>
  )
}

export default Review
