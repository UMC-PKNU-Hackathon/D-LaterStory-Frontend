import React from 'react'
import styled from 'styled-components'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const MockDiv = styled.div`
  width: 100%;
  height: 400px;
  background-color: black;
  color: white;
`

const MainSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <SwiperSlide key={idx}>
          <MockDiv>안녕</MockDiv>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MainSwiper
