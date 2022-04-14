import styled from '@emotion/styled';

export const ScrollUp = styled.div`
  & > .topBtn {
    position: fixed;
    bottom: 80px;
    right: 30px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in;
    z-index: -10;
    color: #fff;
  }
  & > .topBtn_active {
    position: fixed;
    bottom: 80px;
    right: 30px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in;
    z-index: -10;
    z-index: 10;
    opacity: 1;
    background-color: #fff;
    border-radius: 50%;
    border: none;
  }
`;
