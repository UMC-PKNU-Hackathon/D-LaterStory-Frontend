import React from 'react'
import styled from 'styled-components'
import { CiSearch } from 'react-icons/ci'

const SearchPage = () => {
  const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
  const MaxWidth = styled.div`
    width: 700px;
  `
  const SearchInput = styled.input`
    padding-left: 75px;
    height: 56px;
    width: 100%;
    margin: 0;
    padding: 0 55px 0 76px;
    border: 1px solid #e1e2e4;
    border-radius: 999px;
    font-size: 18px;
    font-weight: 500;
    color: #171717;
    background: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `
  const SearchBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 24px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

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

  const SearchForm = styled.form`
    position: relative;
    margin-top: 100px;
  `
  return (
    <SearchContainer>
      <MaxWidth>
        <SearchForm>
          <SearchInput type="text" placeholder="검색어를 입력해 주세요." />
          <SearchBtn>
            <CiSearch size={30} />
          </SearchBtn>
        </SearchForm>
      </MaxWidth>
    </SearchContainer>
  )
}

export default SearchPage
