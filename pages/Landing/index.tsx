import LandingPage2 from '@components/LandingPage/LandingPage2';
import LandingPage3 from '@components/LandingPage/LandingPage3';
import LandingPage4 from '@components/LandingPage/LandingPage4';
import LandingPage5 from '@components/LandingPage/LandingPage5';
import Footer from '@layouts/Footer';
import fetcher from '@utils/fetcher';
import Scroll from '@utils/Scroll/Scroll';
import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { Container, Main, MainMessage, SubBtn, SubMessage } from './styles';

function Landing() {
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);
  return (
    <>
      <Main>
        <Scroll />
        <Container>
          <MainMessage>우리 오름 같이 갈래?</MainMessage>
          <SubMessage>오름 같이 갈사람을 구해 보세요!</SubMessage>
          <SubBtn>
            {userData ? (
              <button>
                <Link to="/oreum">사람 구하러 가기</Link>
              </button>
            ) : (
              <button>
                <Link to="/login">로그인 하러 가기</Link>
              </button>
            )}
          </SubBtn>
        </Container>
      </Main>
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
      <Footer />
    </>
  );
}

export default Landing;
