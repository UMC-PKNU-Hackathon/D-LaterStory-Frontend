import React from 'react'
import styled from 'styled-components'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const ReviewPage = () => {
  const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
  const ReviewImg = styled.img`
    width: 850px;
  `
  const ReviewTitle = styled.h1`
    margin-top: 40px;
    font-weight: 800;
    font-size: 36px;
    color: #000;
    padding: 0px 30px;
  `
  const ReviewWriter = styled.span`
    border-right: gray solid 1px;
    margin-right: 10px;
    padding-right: 10px;
    padding-left: 30px;
  `
  const TitleBox = styled.div`
    border-bottom: gray solid 1px;
    margin-bottom: 30px;
    padding-bottom: 10px;
  `
  const LinkButton = styled.button`
    background-color: #262626;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    padding: 0px 10px;
    height: 30px;
    font-size: 15px;
    border: none;
  `
  const LinkBtnBox = styled.div`
    text-align: center;
  `
  const CommentInput = styled.input`
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
  const ReviewText = styled.div`
    width: 100%;
  `
  const CommentSubmit = styled.button``
  const SubmitBtnBox = styled.div`
    text-align: right;
  `
  const MaxWidth = styled.div`
    width: 1080px;
  `
  const ImgBox = styled.div`
    text-align: center;
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
  const navigate = useNavigate()
  const HandleNavigate = (path) => {
    navigate(path)
  }
  return (
    <>
      <ReviewContainer>
        <MaxWidth>
          <BackBtn onClick={() => HandleNavigate('/')}>
            <IoArrowBack size={30} />
          </BackBtn>
          <TitleBox>
            <ReviewTitle>후기 제목입니다.dddkd</ReviewTitle>
            <ReviewWriter>작성자</ReviewWriter>
            <span>2023-11-24</span>
          </TitleBox>
          <div>
            <ImgBox>
              <ReviewImg src="https://www.busanjob.net/upload/editor/20230214100849.jpg" />
            </ImgBox>
            <ReviewText>상세 내용</ReviewText>
            <LinkBtnBox>
              <LinkButton>신청하러가기</LinkButton>
            </LinkBtnBox>
          </div>
          <div>#해시태그</div>
          <div>
            <h2>댓글</h2>
            <CommentInput type="text" />
            <SubmitBtnBox>
              <CommentSubmit>댓글 작성</CommentSubmit>
            </SubmitBtnBox>
            <div>댓글목록</div>
          </div>
        </MaxWidth>
      </ReviewContainer>
    </>
  )
}

export default ReviewPage
