import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Landing2Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 60%;
  height: 70vh;
  background-color: #fff;
`;

export const LeftMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1vw;
  color: #555555;
  & > div {
    display: flex;
    flex-direction: column;
    & div {
      padding: 12px 0;
    }
  }
`;

export const SolutionMessage = styled.div`
  margin-top: 52px;
  font-size: 1.5vw;
  color: #555555;
  & > div {
    margin-top: 8px;
    font-size: 1.5vw;
  }
`;

export const ImageWrapper = styled(motion.div)`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 400px;
  }
`;
