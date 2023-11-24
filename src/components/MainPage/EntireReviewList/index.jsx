import React from 'react'
import styled from 'styled-components'
import ReviewList from '../ReviewList'

const EntireReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const MenuTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 12px;
`

const EntireReviewList = () => {
  return (
    <EntireReviewListWrapper>
      <MenuTitle>전체</MenuTitle>
      <ReviewList />
    </EntireReviewListWrapper>
  )
}

export default EntireReviewList
