import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  width: 410px;
  max-height: 300px;
  margin: 20px;
  font-family: 'NanumSquareR';
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border-radius: 3px;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const CardImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  & > img {
    width: 100%;
  }
`;

export const CardInfoContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
`;

export const CardInfoTitle = styled.div`
  margin-bottom: 15px;
  font-size: 17px;
  color: #000;
`;

export const CardInfoContent = styled.div`
  height: 36px;
  margin-bottom: 30px;
  font-size: 16px;
  color: #555;
`;

export const CardInfoareaContainer = styled.div`
  margin-bottom: 20px;
  p {
    display: inline-block;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #143f6b;
    color: #feb139;
  }
`;
