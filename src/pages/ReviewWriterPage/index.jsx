import React, { useState } from 'react'
import styled from 'styled-components'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import usePostService from '../../apis/usePostService'
import { useNavigate } from 'react-router'

const ReviewWriterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
`
const NumberIcon = styled.span`
  margin-right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ffcd00;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #fff;
`
const H2 = styled.h2`
  display: inline-block;
`
const H2Box = styled.div`
  display: flex;
  align-items: center;
  border-bottom: gray solid 1px;
  margin-bottom: 24px;
  padding: 0px 30px;
`
const HashTagSelect = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
const SelectedTag = styled.span`
  width: 100%;
`
const ToggleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 4px;
  background-color: inherit;
`
const HashTagList = styled.ul`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  transform: translateY(1px);
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`
const HashtagOption = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  &:hover {
    background-color: #ddd;
  }
`
const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
  margin-bottom: 8px;
`
const TitleLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`
const TitleInput = styled.input`
  width: 100%;
  box-shadow: none;
  border: 1px solid #e1e3e8;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  padding: 8px;
  margin-bottom: 8px;
`
const ContentsText = styled.textarea`
  width: 100%;
  height: 560px;
  border: 1px solid #e1e3e8;
  border-radius: 4px;
  padding: 8px;
  margin-top: 20px;
  resize: none;
`
const ImageInput = styled.input`
  margin-bottom: 8px;
`
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: auto;
`
const SubmitButton = styled.button`
  background-color: #262626;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  border: none;
`
const CancelButton = styled.button`
  background: #e9ecef;
  color: #495057;
  border-radius: 4px;
  cursor: pointer;
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  margin-right: 16px;
  border: none;
`
const MaxWidth = styled.div`
  width: 700px;
`

const tags = ['개발', '경영', '마케팅', '디자인', '기타']

const ReviewWriterPage = () => {
  const [hashtagListToggled, setHashtagListToggled] = useState(false)
  const [selectedTag, setSelectedTag] = useState(null)
  const [tagError, setTagError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const postService = usePostService()
  const { mutate } = useMutation({
    mutationFn: ({ title, content, selectedTag, formData }) =>
      postService.upload(title, content, selectedTag, formData),
  })

  const fields = {
    title: register('title', {
      required: '제목을 입력해주세요.',
      maxLength: 50,
    }),
    content: register('content', {
      required: '내용을 입력해주세요.',
      maxLength: { value: 2000, message: '최대 2000자까지 작성 가능합니다.' },
    }),
    image: register('image', { required: '이미지를 넣어주세요.' }),
  }

  const HandleToggle = () => {
    setHashtagListToggled((prev) => !prev)
  }
  const renderOptions = (options) => {
    return options.map((option) => (
      <HashtagOption
        key={option}
        onClick={(e) => {
          setSelectedTag(e.target.textContent)
          setHashtagListToggled(false)
        }}
      >
        {option}
      </HashtagOption>
    ))
  }
  const HandleCancelWrite = () => {
    const isCancel = window.confirm(
      '정말로 나가시겠습니까? 작성 중이던 게시물이 사라집니다.',
    )
    if (isCancel) {
      navigate('/')
    }
  }
  const HandleUpload = ({ title, content, image }) => {
    if (!selectedTag) {
      setTagError(true)
      return
    }

    const formData = new FormData()
    formData.append('image', image)
    console.log(title, content, selectedTag, formData)
    mutate(
      { title, content, selectedTag, formData },
      {
        onSuccess: () => {
          navigate('/')
        },
        onError: (error) => {
          console.log(error)
        },
      },
    )
  }

  return (
    <>
      <ReviewWriterContainer>
        <MaxWidth>
          <H2Box>
            <NumberIcon>1</NumberIcon>
            <H2>해시태그를 정해주세요.</H2>
          </H2Box>
          <HashTagSelect onClick={HandleToggle}>
            <SelectedTag>{selectedTag || '선택'}</SelectedTag>
            <ToggleBtn>
              {hashtagListToggled ? <FaAngleUp /> : <FaAngleDown />}
            </ToggleBtn>
            <HashTagList
              onClick={(e) => e.stopPropagation()}
              isVisible={hashtagListToggled}
            >
              {renderOptions(tags)}
            </HashTagList>
          </HashTagSelect>
          {tagError && !selectedTag && (
            <ErrorMessage>태그를 선택해주세요.</ErrorMessage>
          )}
          <div>
            <H2Box>
              <NumberIcon>2</NumberIcon>
              <H2>프로그램 후기를 작성해주세요.</H2>
            </H2Box>
            <ReviewForm onSubmit={handleSubmit(HandleUpload)}>
              <TitleLabel>제목</TitleLabel>
              <TitleInput
                {...fields.title}
                type="text"
                id="reviewTitle"
                placeholder="글 제목을 입력해주세요!"
              />
              {errors?.title?.message && (
                <ErrorMessage>{errors?.title?.message}</ErrorMessage>
              )}
              <TitleLabel htmlFor="reviewImg">첨부 이미지</TitleLabel>
              <ImageInput
                {...fields.image}
                type="file"
                accept="image/*"
                id="reviewImg"
              />
              {errors?.image?.message && (
                <ErrorMessage>{errors?.image?.message}</ErrorMessage>
              )}
              <ContentsText
                {...fields.content}
                placeholder="2000자 이내로 입력해주세요."
              />
              {errors?.content?.message && (
                <ErrorMessage>{errors?.content?.message}</ErrorMessage>
              )}
              <ButtonContainer>
                <CancelButton onClick={HandleCancelWrite}>취소</CancelButton>
                <SubmitButton type="submit">글 등록</SubmitButton>
              </ButtonContainer>
            </ReviewForm>
          </div>
        </MaxWidth>
      </ReviewWriterContainer>
    </>
  )
}

export default ReviewWriterPage
