import React, { useEffect } from 'react';
import {
  CImageTitle,
  ContentMessage,
  ContentSubMessage,
  ImageContainer,
  ImageIcon,
  Landing3Container,
  NumberContainer,
  NumberIcon,
} from './styles';
import { useViewportScroll, useAnimation } from 'framer-motion';

function LandingPage3() {
  const { scrollY } = useViewportScroll();
  const Img1Anmation = useAnimation();
  const Img2Anmation = useAnimation();
  const Img3Anmation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 1400) {
        Img1Anmation.start({
          x: 0,
          opacity: 1,
        });
      } else {
        Img1Anmation.start({
          x: -400,
          opacity: 0,
        });
      }
    });
  }, [scrollY]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 1400) {
        Img2Anmation.start({
          x: 0,
          opacity: 1,
        });
      } else {
        Img2Anmation.start({
          x: -400,
          opacity: 0,
        });
      }
    });
  }, [scrollY]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 1400) {
        Img3Anmation.start({
          x: 0,
          opacity: 1,
        });
      } else {
        Img3Anmation.start({
          x: -400,
          opacity: 0,
        });
      }
    });
  }, [scrollY]);
  return (
    <Landing3Container>
      <div>
        <ContentMessage>WeOreum을 이렇게 이용해보세요!</ContentMessage>
        <ContentSubMessage>함께 하고 싶은 팀원들을 모집하고 다양한 방법으로 즐겨보세요</ContentSubMessage>

        <NumberContainer>
          <div>
            <NumberIcon>
              <span>1️⃣</span>
            </NumberIcon>
            <NumberIcon>
              <span>2️⃣</span>
            </NumberIcon>
            <NumberIcon>
              <span>3️⃣</span>
            </NumberIcon>
          </div>
        </NumberContainer>
        <div>
          <ImageContainer>
            <ImageIcon animate={Img1Anmation} initial={{ x: -400, opacity: 0 }}>
              <CImageTitle>오름을 검색하세요.</CImageTitle>
              <p>제주도에 있는 90가지 오름을 검색할수 있습니다.</p>
              <img src="img/introduce1.gif" alt="introduce1" />
            </ImageIcon>
            <ImageIcon animate={Img2Anmation} initial={{ x: -400, opacity: 0 }}>
              <CImageTitle>오름을 같이갈 사람을 구해보세요.</CImageTitle>
              <p>직접 찾아보거나 모집글을 올려 같이갈 사람을 구해봐요~</p>
              <img src="img/introduce2.gif" alt="introduce2" />
            </ImageIcon>
            <ImageIcon animate={Img3Anmation} initial={{ x: -400, opacity: 0 }}>
              <CImageTitle>맴버와 같이 소통 해봐요</CImageTitle>
              <p>채팅, 트렐로, 캘린더를 활용해 소통 해보세요</p>
              <img src="img/introduce3.gif" alt="introduce3" />
            </ImageIcon>
          </ImageContainer>
        </div>
      </div>
    </Landing3Container>
  );
}

export default LandingPage3;
