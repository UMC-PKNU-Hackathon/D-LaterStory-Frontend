import React from 'react'
import styled from 'styled-components'
import Review from '../Review'

const ReviewListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ReviewList = () => {
  return (
    <ReviewListWrapper>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Review key={idx}></Review>
      ))}
    </ReviewListWrapper>
  )
}

export default ReviewList
