import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 18px;
  padding: 5px 60px;
  color: black;
  z-index: 999;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.li`
  margin-right: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  & a {
    color: #333;
  }
  & a:hover {
    color: #9254c8;
  }
`;

export const MainLogo = styled.img`
  width: 60px;
  height: 50px;
  margin-right: 50px;
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 5px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 8px;
  & img {
    display: flex;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }
  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`;

export const LogOutButton = styled.button`
  position: absolute;
  right: 10px;
  top: 30px;
  background: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
