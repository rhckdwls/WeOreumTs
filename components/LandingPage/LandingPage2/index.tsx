import React, { useEffect } from 'react';
import { Landing2Container, LeftMessage, Wrapper, SolutionMessage, ImageWrapper } from './styles';
import { useViewportScroll, useAnimation } from 'framer-motion';

function LandingPage2() {
  const { scrollY } = useViewportScroll();
  const LeftAnmation = useAnimation();
  const ImgAnmation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 400) {
        LeftAnmation.start({
          opacity: 1,
        });
      } else {
        LeftAnmation.start({
          opacity: 0,
        });
      }
    });
  }, [scrollY]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 400) {
        ImgAnmation.start({
          y: 0,
        });
      } else {
        ImgAnmation.start({
          y: 200,
        });
      }
    });
  }, [scrollY]);

  return (
    <Landing2Container>
      <Wrapper>
        <LeftMessage animate={LeftAnmation} initial={{ opacity: 0 }}>
          <div>
            <div>오름 가고 싶은데 같이 갈사람을 찾고 계신가요?</div>
            <div>팀원들을 모집했는데 같이 이야기를 어떻게 해야 할지 고민이신가요?</div>

            <SolutionMessage>
              이제는 WeOreum에서 한번에 해결하세요!
              <div>팀원모집부터 채팅, 트렐로, 캘린더까지 모두 제공합니다.</div>
            </SolutionMessage>
          </div>
        </LeftMessage>
        <ImageWrapper animate={ImgAnmation} initial={{ y: 200 }}>
          <img src="/img/san.png" alt="san" />
        </ImageWrapper>
      </Wrapper>
    </Landing2Container>
  );
}

export default LandingPage2;
