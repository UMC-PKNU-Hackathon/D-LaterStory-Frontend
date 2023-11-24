import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import AuthInput from '../../common/AuthForm'
import { useMutation } from '@tanstack/react-query'
import useUserService from '../../../apis/useUserService'
import { useSetRecoilState } from 'recoil'
import userState from '../../../store/atom/userState'

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const SubmitBtn = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  background-color: #fbfb4f;
  /* background-color: ${(props) =>
    props.isValid ? '#fbfb4f' : '#ffff67c4'}; */
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`
const Signin = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm()
  const userService = useUserService()
  const { mutate } = useMutation({
    mutationFn: ({ id, password }) => userService.login(id, password),
  })
  const setUserState = useSetRecoilState(userState)

  const fields = {
    id: register('id', { required: true }),
    password: register('password', { required: true }),
  }

  const handleLogin = ({ id, password }) => {
    mutate(
      { id, password },
      {
        onSuccess: (data) => {
          const { user, accessToken } = data.data
          console.log(data)
          localStorage.setItem('accessToken', accessToken)
          setUserState({ user, isAuth: true })
        },
        onError: (error) => {
          console.log(error)
        },
      },
    )
  }

  return (
    <SigninForm onSubmit={handleSubmit(handleLogin)}>
      <AuthInput
        register={fields.id}
        labelSpan={'아이디'}
        placeholder={'아이디 입력'}
        type="string"
      />
      <AuthInput
        register={fields.password}
        labelSpan={'비밀번호'}
        placeholder={'비밀번호 입력'}
        type="password"
      />
      <SubmitBtn isValid={isValid} type="submit">
        로그인
      </SubmitBtn>
    </SigninForm>
  )
}

export default Signin
