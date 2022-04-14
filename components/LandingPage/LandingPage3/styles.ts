import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Landing3Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const ContentMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 3vw;
  color: #595454;
`;

export const ContentSubMessage = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  font-size: 1.5vw;
  color: #595454;
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 8vw;
  }
`;

export const NumberIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26.1vw;
  margin: 0 1.8vw;
  font-size: 3vw;
  & > span {
    background-color: #fff;
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const ImageIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 26.1vw;
  height: 24vw;
  margin: 0 1.8vw;
  font-size: 1vw;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  & > p {
    padding: 8px 32px 24px 32px;
    font-size: 0.8vw;
    color: #545454;
    text-align: left;
  }

  & > img {
    width: 100%;
  }
`;

export const CImageTitle = styled.div`
  padding: 4px 0;
  font-size: 1.2vw;
  text-align: center;
`;
