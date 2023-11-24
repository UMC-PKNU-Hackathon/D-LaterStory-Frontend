import React from 'react'
import styled from 'styled-components'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
  width: 100%;
  height: 300px;
  background-color: #f4c876;
`
const SlideContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1080px;
`
const SlideTextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TextContentTitle = styled.h5`
  font-size: 32px;
  margin: 0;
  margin-bottom: 16px;
`
const TextContent = styled.p`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
`
const SlideImageContent = styled.div`
  width: 300px;
  height: 100%;
`
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const MainSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {Array.from({ length: 1 }).map((_, idx) => (
        <SwiperSlide key={idx}>
          <SlideWrapper>
            <SlideContentWrapper>
              <SlideTextContentWrapper>
                <TextContentTitle>경험을 나눠봐요</TextContentTitle>
                <TextContent>
                  후일담으로 여러분들의 생생한 체험 후기를 전해보세요.
                </TextContent>
              </SlideTextContentWrapper>
              <SlideImageContent>
                <SlideImage src="./main_banner_01.png" alt="배너이미지" />
              </SlideImageContent>
            </SlideContentWrapper>
          </SlideWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MainSwiper
