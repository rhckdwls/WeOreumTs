import fetcher from '@utils/fetcher';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { Container, Main, MainMessage, SubBtn } from './styles';
import { useViewportScroll, useAnimation } from 'framer-motion';

function LandingPage5() {
  const { scrollY } = useViewportScroll();
  const MainAnmation = useAnimation();
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 4500) {
        MainAnmation.start({
          opacity: 1,
        });
      } else {
        MainAnmation.start({
          opacity: 0,
        });
      }
    });
  }, [scrollY]);
  return (
    <Main>
      <Container animate={MainAnmation} initial={{ opacity: 0 }}>
        <MainMessage>WeOruem에서 여러가지를 경험해보세요!</MainMessage>
        <SubBtn>
          {userData ? (
            <button>
              <Link to="/workspace/Oreum/channel/일반">메인 채널로 가기</Link>
            </button>
          ) : (
            <button>
              <Link to="/login">로그인 하러 가기</Link>
            </button>
          )}
        </SubBtn>
      </Container>
    </Main>
  );
}

export default LandingPage5;
