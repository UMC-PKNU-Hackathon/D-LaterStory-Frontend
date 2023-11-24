import React from 'react'
import styled from 'styled-components'
import Signup from '../../components/SignupPage/Signup'

const SignupPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const SignupFormWrapper = styled.div`
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

const SignupPage = () => {
  return (
    <SignupPageWrapper>
      <SignupFormWrapper>
        <FormTitle>회원가입</FormTitle>
        <Signup />
      </SignupFormWrapper>
    </SignupPageWrapper>
  )
}

export default SignupPage
