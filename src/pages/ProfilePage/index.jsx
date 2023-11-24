import React from 'react'
import styled from 'styled-components'
import ReviewList from '../../components/MainPage/ReviewList'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
  const MaxWidth = styled.div`
    width: 700px;
  `
  const BackBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 9999px;
    padding: 0;
    padding: 8px;
    &:hover {
      cursor: pointer;
      background-color: #ccc;
    }
  `
  const H2Text = styled.h2``
  const H1Text = styled.h1`
    border-bottom: gray solid 1px;
    margin-bottom: 50px;
    padding: 10px 30px;
  `
  const LikeBox = styled.div`
    margin-bottom: 50px;
  `

  const navigate = useNavigate()
  const HandleNavigate = (path) => {
    navigate(path)
  }
  return (
    <ProfileContainer>
      <MaxWidth>
        <div>
          <BackBtn onClick={() => HandleNavigate('/')}>
            <IoArrowBack size={30} />
          </BackBtn>
        </div>
        <H1Text>닉네임님의 마이 페이지</H1Text>
        <LikeBox>
          <H2Text>좋아요한 후기</H2Text>
          <ReviewList />
        </LikeBox>
        <H2Text>내가 작성한 후기</H2Text>
        <ReviewList />
      </MaxWidth>
    </ProfileContainer>
  )
}

export default ProfilePage
