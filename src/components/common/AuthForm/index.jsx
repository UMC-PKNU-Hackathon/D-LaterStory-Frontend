import React from 'react'
import styled from 'styled-components'

const AuthInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 12px;
  &:focus-within {
    border: 1px solid #000000;
  }
`
const InputSpan = styled.span`
  font-size: 10px;
  color: #999999;
  margin-bottom: 4px;
`
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
`

const AuthInput = ({ register, labelSpan, placeholder, type }) => {
  return (
    <AuthInputWrapper>
      <InputSpan>{labelSpan}</InputSpan>
      <Input {...register} placeholder={placeholder} type={type} />
    </AuthInputWrapper>
  )
}

export default AuthInput
