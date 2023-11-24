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
  height: 400px;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`
const SlideWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
  width: 100%;
  height: 400px;
  background: #222222;
`
const SlideWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
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
  font-size: 80px;
  margin: 0;
  margin-bottom: 16px;
`
const TextContentTitle2 = styled.h5`
  font-size: 80px;
  margin: 0;
  margin-bottom: 16px;
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  color: transparent;
  -webkit-background-clip: text;
`

const TextContent = styled.p`
  display: flex;
  align-items: center;
  width: 350px;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
`
const TextContent2 = styled.p`
  display: flex;
  align-items: center;
  width: 350px;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: white;
`

const SlideImageContent = styled.div`
  width: 300px;
  height: 100%;
`
const SlideImage = styled.img`
  width: 130%;
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
      <SwiperSlide>
        <SlideWrapper>
          <SlideContentWrapper>
            <SlideTextContentWrapper>
              <TextContentTitle>경험을 나눠봐요</TextContentTitle>
              <TextContent>
                후일담으로 여러분들의 생생한 체험 후기를 전해보세요.
              </TextContent>
            </SlideTextContentWrapper>
            <SlideImageContent>
              <SlideImage src="./Modern Desk.png" alt="배너이미지" />
            </SlideImageContent>
          </SlideContentWrapper>
        </SlideWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <SlideWrapper2>
          <SlideContentWrapper>
            <SlideTextContentWrapper>
              <TextContentTitle2>Hello, Future Worker!</TextContentTitle2>
              <TextContent2>
                후일담으로 여러분들의 생생한 체험 후기를 전해보세요.
              </TextContent2>
            </SlideTextContentWrapper>
          </SlideContentWrapper>
        </SlideWrapper2>
      </SwiperSlide>
      <SwiperSlide>
        <SlideWrapper3>
          <SlideContentWrapper>
            <SlideImageContent>
              <SlideImage src="./Comfortable Desk.png" alt="배너이미지" />
            </SlideImageContent>
            <SlideTextContentWrapper>
              <TextContentTitle>후일담</TextContentTitle>
              <TextContent>어쩌고저쩌고 후일담이 뭔지 설명</TextContent>
            </SlideTextContentWrapper>
          </SlideContentWrapper>
        </SlideWrapper3>
      </SwiperSlide>
    </Swiper>
  )
}

export default MainSwiper
