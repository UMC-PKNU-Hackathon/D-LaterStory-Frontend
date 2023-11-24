import React from 'react'
import styled from 'styled-components'
import MainSwiper from '../../components/MainPage/MainSwiper'
import EntireReviewList from '../../components/MainPage/EntireReviewList'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const SwiperWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
`
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
`

const MainPage = () => {
  return (
    <MainWrapper>
      <SwiperWrapper>
        <MainSwiper />
      </SwiperWrapper>
      <ContentWrapper>
        <EntireReviewList />
      </ContentWrapper>
    </MainWrapper>
  )
}

export default MainPage
