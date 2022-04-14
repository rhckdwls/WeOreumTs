import styled from '@emotion/styled';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    background-image: url(img/bg5.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.5vw;
  color: #343434;
  font-weight: 900;
  margin-bottom: 2.1vw;
`;
export const SubMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1vw;
  color: #343434;
  margin-bottom: 6.1vw;
`;

export const SubBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    z-index: 8;
    transition: 0.3s;
    width: 11vw;
    height: 3.2vw;
    color: #fff;
    font-size: 22px;
    background-color: #545454;
    border-radius: 5px;
    &:hover {
      color: #ddd;
      background-color: #343434;
    }
  }
`;
