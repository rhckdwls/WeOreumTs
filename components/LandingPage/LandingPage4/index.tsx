import React, { useEffect } from 'react';
import {
  ChatContainer,
  ChatImg,
  ChatMessage,
  ChatSubMessage,
  Landing4Container,
  WorkContainer,
  WorkImg,
  WorkMessage,
  WorkSubMessage,
} from './styles';
import { useViewportScroll, useAnimation } from 'framer-motion';

function LandingPage4() {
  const { scrollY } = useViewportScroll();
  const MegWorkAnmation = useAnimation();
  const ImgWorkAnmation = useAnimation();
  const MegChatAnmation = useAnimation();
  const ImgChatAnmation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 2200) {
        MegWorkAnmation.start({
          opacity: 1,
        });
      } else {
        MegWorkAnmation.start({
          opacity: 0,
        });
      }
    });
  }, [scrollY]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 2400) {
        ImgWorkAnmation.start({
          y: 0,
        });
      } else {
        ImgWorkAnmation.start({
          y: 200,
        });
      }
    });
  }, [scrollY]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 2900) {
        MegChatAnmation.start({
          opacity: 1,
        });
      } else {
        MegChatAnmation.start({
          opacity: 0,
        });
      }
    });
  }, [scrollY]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 3300) {
        ImgChatAnmation.start({
          y: 0,
        });
      } else {
        ImgChatAnmation.start({
          y: 200,
        });
      }
    });
  }, [scrollY]);

  return (
    <Landing4Container>
      <div>
        <WorkMessage animate={MegWorkAnmation} initial={{ opacity: 0 }}>
          효율적인 일 분배와 계획을 짜보세요.
        </WorkMessage>
        <WorkSubMessage animate={MegWorkAnmation} initial={{ opacity: 0 }}>
          맴버들과 이야기를 하다보면 등산을 할때 각자 준비 해야 하는 일들을 효율적으로 준비하기가 힘든점이 많습니다.
          <br />
          <br />
          이러한 점에서 맴버들과 트렐로와 캘린더를 이용하여 체계적으로 관리 할수 있도록 기능을 제공합니다.
        </WorkSubMessage>
        <div>
          <WorkContainer>
            <WorkImg animate={ImgWorkAnmation} initial={{ y: 200 }}>
              <img src="/img/trello.gif" alt="trello" />
            </WorkImg>
            <WorkImg animate={ImgWorkAnmation} initial={{ y: 200 }}>
              <img src="/img/carledar.gif" alt="carlendar" />
            </WorkImg>
          </WorkContainer>
        </div>
      </div>
      <div>
        <ChatMessage animate={MegChatAnmation} initial={{ opacity: 0 }}>
          실시간으로 소통하세요!
        </ChatMessage>
        <ChatSubMessage animate={MegChatAnmation} initial={{ opacity: 0 }}>
          오름 가고싶은데 어떻게 해야 할지 모르겠다면 채팅 메인채널에서 실시간 채팅으로 모임에 들어가거나 직접
          모아보세요. <br />
          <br />
          맴버를 모집후 맴버들만의 채널을 만들어 실시간으로 소통을 하고 개인메세지DM을 통해 서로 소통 할수 있습니다.
        </ChatSubMessage>
        <div>
          <ChatContainer>
            <ChatImg animate={ImgChatAnmation} initial={{ y: 200 }}>
              <img src="/img/chatting.gif" alt="chat" />
            </ChatImg>
          </ChatContainer>
        </div>
      </div>
    </Landing4Container>
  );
}

export default LandingPage4;
