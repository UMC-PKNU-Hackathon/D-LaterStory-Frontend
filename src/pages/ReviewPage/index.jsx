import React from 'react'
import styled from 'styled-components'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import LikeBtn from '../../components/common/LikeButton'
import Comment from '../../components/ReviewPage/Comment'

const ReviewPage = () => {
  const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
  const ReviewImg = styled.img`
    width: 800px;
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
    margin-bottom: 20px;
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
    margin-bottom: 10px;
  `
  const ReviewText = styled.p`
    width: 100%;
    margin-bottom: 50px;
  `
  const CommentSubmit = styled.button`
    background-color: #2248d4fa;
    height: fit-content;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 24px;
    &:hover {
      cursor: pointer;
    }
  `
  const SubmitBtnBox = styled.div`
    text-align: right;
    margin-bottom: 70px;
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
  const EditBtn = styled.button`
    margin-left: 15px;
    background-color: gray;
    height: fit-content;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 24px;
    &:hover {
      cursor: pointer;
      background-color: #373737;
    }
  `
  const DeleteBtn = styled.button`
    margin-left: 10px;
    background-color: #b92626;
    height: fit-content;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 24px;
    &:hover {
      cursor: pointer;
      background-color: #700909;
    }
  `
  const BtnBox = styled.div`
    text-align: right;
  `
  const TagText = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 15px;
  `
  const LikeBtnDiv = styled.div`
    display: inline;
    top: 13px;
  `
  const LikeCount = styled.span``
  const LikeSpan = styled.span`
    margin-left: 30px;
    margin-right: 7px;
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
            <ReviewTitle>후기 제목입니다.</ReviewTitle>
            <ReviewWriter>작성자</ReviewWriter>
            <span>2023-11-24</span>
            <LikeSpan>좋아요</LikeSpan>
            <LikeCount>14</LikeCount>
            <BtnBox>
              <LikeBtnDiv>
                <LikeBtn />
              </LikeBtnDiv>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
            </BtnBox>
          </TitleBox>
          <div>
            <ImgBox>
              <ReviewImg src="https://www.busanjob.net/upload/editor/20230214100849.jpg" />
            </ImgBox>
            <ReviewText>
              안녕하세요. 제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라 블라 .
              어쩌고 저쩌고 .. 아무말안녕하세요. 제가요.. 후기를 남깁니다.
              이러쿵저러쿵 . 블라 블라 . 어쩌고 저쩌고 .. 아무말안녕하세요.
              제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라 블라 . 어쩌고 저쩌고
              .. 아무말안녕하세요. 제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라
              블라 . 어쩌고 저쩌고 .. 아무말안녕하세요. 제가요.. 후기를
              남깁니다. 이러쿵저러쿵 . 블라 블라 . 어쩌고 저쩌고 ..
              아무말안녕하세요. 제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라
              블라 . 어쩌고 저쩌고 .. 아무말 안녕하세요. 제가요.. 후기를
              남깁니다. 이러쿵저러쿵 . 블라 블라 . 어쩌고 저쩌고 ..
              아무말안녕하세요. 제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라
              블라 . 어쩌고 저쩌고 .. 아무말안녕하세요. 제가요.. 후기를
              남깁니다. 이러쿵저러쿵 . 블라 블라 . 어쩌고 저쩌고 ..
              아무말안녕하세요. 제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라
              블라 . 어쩌고 저쩌고 .. 아무말안녕하세요. 제가요.. 후기를
              남깁니다. 이러쿵저러쿵 . 블라 블라 . 어쩌고 저쩌고 ..
              아무말안녕하세요. 제가요.. 후기를 남깁니다. 이러쿵저러쿵 . 블라
              블라 . 어쩌고 저쩌고 .. 아무말
            </ReviewText>
            <LinkBtnBox>
              <LinkButton onClick={() => HandleNavigate('/')}>
                신청하러가기
              </LinkButton>
            </LinkBtnBox>
          </div>
          <TagText>#해시태그</TagText>
          <div>
            <h2>댓글</h2>
            <CommentInput type="text" />
            <SubmitBtnBox>
              <CommentSubmit>댓글 작성</CommentSubmit>
            </SubmitBtnBox>
            <div>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Comment key={idx}></Comment>
              ))}
            </div>
          </div>
        </MaxWidth>
      </ReviewContainer>
    </>
  )
}

export default ReviewPage
