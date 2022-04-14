import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Landing4Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 200vh;
  padding: 0 70px;
  background-color: #24272c;
  & > div {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const WorkMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 2vw;
  color: #fff;
`;

export const WorkSubMessage = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  font-size: 1vw;
  color: #fff;
  padding: 10px;
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;

export const WorkImg = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;

  & > img {
    width: 100%;
  }
`;

export const ChatMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 2vw;
  color: #fff;
`;

export const ChatSubMessage = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  font-size: 1vw;
  color: #fff;
  padding: 10px;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
`;

export const ChatImg = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;
  width: 70vw;

  & > img {
    width: 100%;
  }
`;
