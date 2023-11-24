import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import userState from '../../../store/atom/userState'
import { Link, useNavigate } from 'react-router-dom'

const NavigationHeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 64px;
  padding: 8px 32px;
`
const MainLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
const NavigationList = styled.ul`
  margin-left: 128px;
`
const NavigationBtn = styled.li`
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`
const ReviewDropDownBtn = styled(NavigationBtn)``
const UserTool = styled.div`
  display: flex;
  margin-left: auto;
  > button {
    margin-right: 8px;
  }
  > div > button {
    margin-right: 8px;
  }
`
const SearchBtn = styled.button`
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
const ProtectedBtnList = styled.div`
  display: flex;
`
const UserToolBtn = styled.button`
  height: fit-content;
  font-size: 12px;
  font-weight: bold;
  background-color: black;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
    background-color: #373737;
  }
`
const LoginBtn = styled(UserToolBtn)``
const LogoutBtn = styled(UserToolBtn)``
const ProfileBtn = styled(UserToolBtn)``
const DropDownMenuOverlay = styled.div`
  display: ${(props) => (props.isHover ? 'block' : 'none')};
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`
const DropDownMenu = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
`

const NavigationHeader = () => {
  const navigate = useNavigate()
  const [isHover, setIsHover] = useState(false)
  const { isAuth } = useRecoilValue(userState)

  useEffect(() => {
    if (isHover) {
      document.body.addEventListener('wheel', preventScroll, { passive: false })
    }
    return () => {
      document.body.removeEventListener('wheel', preventScroll)
    }
  }, [isHover])

  const preventScroll = (e) => {
    e.preventDefault()
  }
  const HandleNavigate = (path) => {
    navigate(path)
  }
  const HandleDropDown = () => {
    console.log(isHover)
    setIsHover(true)
  }
  const HandleDropDownOff = () => {
    setIsHover(false)
  }

  return (
    <NavigationHeaderWrapper>
      <MainLogo to={'/'}>후일담</MainLogo>
      <NavigationList>
        <ReviewDropDownBtn onMouseOver={HandleDropDown}>후기</ReviewDropDownBtn>
      </NavigationList>
      <UserTool>
        <SearchBtn onClick={() => HandleNavigate('/search')}>
          <FaSearch size={16} />
        </SearchBtn>
        {isAuth ? (
          <ProtectedBtnList>
            <LogoutBtn>로그아웃</LogoutBtn>
            <ProfileBtn onClick={() => HandleNavigate('/profile/:userId')}>
              프로필
            </ProfileBtn>
          </ProtectedBtnList>
        ) : (
          <LoginBtn onClick={() => HandleNavigate('/login')}>로그인</LoginBtn>
        )}
      </UserTool>
      <DropDownMenuOverlay isHover={isHover}>
        <DropDownMenu onMouseLeave={HandleDropDownOff}></DropDownMenu>
      </DropDownMenuOverlay>
    </NavigationHeaderWrapper>
  )
}

export default NavigationHeader
