import React from 'react'
import styled from 'styled-components'
import SigninForm from '../../components/SigninPage/Signin'
import { Link } from 'react-router-dom'

const SigninPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const SigninFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 0 24px;
  margin-top: 80px;
`
const FormTitle = styled.h3`
  margin: 0;
  margin-bottom: 24px;
`
const SignupLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  background-color: #fbfb4f;
  font-size: 14px;
`

const SigninPage = () => {
  return (
    <SigninPageWrapper>
      <SigninFormWrapper>
        <FormTitle>로그인</FormTitle>
        <SigninForm />
        <SignupLink to={'/signup'}>회원가입</SignupLink>
      </SigninFormWrapper>
    </SigninPageWrapper>
  )
}

export default SigninPage
