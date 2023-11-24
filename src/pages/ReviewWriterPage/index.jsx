import React from 'react'
import styled from 'styled-components'

const ReviewWriterPage = () => {
  const ReviewWriterContainer = styled.div`
    display: flex;
    justify-content: center;
  `
  const TagWrapper = styled.div`
    height: fit-content;
    position: relative;
    margin-bottom: 10px;
    input[type='checkbox'] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0%;
      margin: 0px;
    }
    input[type='checkbox']:checked + label {
      background-color: #6a9dde;
    }
  `
  const TagLabel = styled.label`
    display: none;
    margin: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    padding: 16px;
    box-shadow: 0px 0px 8px 0px #8d8d8d40;
    border-radius: 10px;
    :hover {
      cursor: pointer;
    }
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
    margin-bottom: 50px;
    padding: 0px 30px;
  `
  const TitleLabel = styled.label`
    display: block;
  `
  const TitleInput = styled.input`
    width: 100%;
    height: 56px;
    line-height: 44px;
    box-shadow: none;
    border: 1px solid #e1e3e8;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 30px;
  `
  const ContentsText = styled.textarea`
    width: 100%;
    height: 560px;
    border: 1px solid #e1e3e8;
    border-radius: 5px;
    margin-top: 20px;
    resize: none;
  `
  const ButtonContainer = styled.div`
    text-align: right;
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
  const CancleButton = styled.button`
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
  return (
    <>
      <ReviewWriterContainer>
        <MaxWidth>
          <H2Box>
            <NumberIcon>1</NumberIcon>
            <H2>해시태그를 정해주세요.</H2>
          </H2Box>
          <div>
            <TagWrapper>
              <input type="checkbox" id="tagInput" />
              <TagLabel htmlFor="tagInput">개발</TagLabel>
            </TagWrapper>
            <TagWrapper>
              <input type="checkbox" id="tagInput" />
              <TagLabel htmlFor="tagInput">경영</TagLabel>
            </TagWrapper>
            <TagWrapper>
              <input type="checkbox" id="tagInput" />
              <TagLabel htmlFor="tagInput">마케팅</TagLabel>
            </TagWrapper>
            <TagWrapper>
              <input type="checkbox" id="tagInput" />
              <TagLabel htmlFor="tagInput">디자인</TagLabel>
            </TagWrapper>
            <TagWrapper>
              <input type="checkbox" id="tagInput" />
              <TagLabel htmlFor="tagInput">기타</TagLabel>
            </TagWrapper>
          </div>
          <div>
            <H2Box>
              <NumberIcon>2</NumberIcon>
              <H2>프로그램 후기를 작성해주세요.</H2>
            </H2Box>
            <form>
              <TitleLabel htmlFor="reviewTitle">제목</TitleLabel>
              <TitleInput
                type="text"
                id="reviewTitle"
                placeholder="글 제목을 입력해주세요!"
              />
              <TitleLabel htmlFor="reviewImg">첨부 이미지</TitleLabel>
              <input type="file" id="reviewImg" />
              <ContentsText />
              <ButtonContainer>
                <CancleButton>취소</CancleButton>
                <SubmitButton type="submit">글 등록</SubmitButton>
              </ButtonContainer>
            </form>
          </div>
        </MaxWidth>
      </ReviewWriterContainer>
    </>
  )
}

export default ReviewWriterPage
