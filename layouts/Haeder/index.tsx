import Menu from '@components/Menu';
import fetcher from '@utils/fetcher';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { Col, Item, Items, LogOutButton, MainLogo, Nav, ProfileImg, ProfileModal } from './styles';
import gravatar from 'gravatar';
import axios from 'axios';
import { useViewportScroll, useAnimation } from 'framer-motion';

function Haeder() {
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { scrollY } = useViewportScroll();
  const navAnmation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnmation.start({
          backgroundColor: '#ffffff',
          boxShadow: '1px 1px 1px rgba(0,0,0,0.2)',
        });
      } else {
        navAnmation.start({
          backgroundColor: 'rgba(0,0,0,0)',
          boxShadow: '1px 1px 1px rgba(0,0,0,0)',
        });
      }
    });
  }, [scrollY]);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, []);

  const onCloseUserProfile = useCallback((e) => {
    e.stopPropagation();
    setShowUserMenu(false);
  }, []);

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate();
      });
  }, []);

  return (
    <Nav animate={navAnmation} initial={{ backgroundColor: 'rgba(0,0,0,0)' }}>
      <Col>
        <Items>
          <Item>
            <Link to="/">
              <MainLogo src="img/logo.png" alt="WeOreum" />
            </Link>
          </Item>
          <Item>
            <Link to="/searchoreum"> 오름 검색 </Link>
          </Item>
          <Item>
            <Link to="/oreum"> 오름 사람찾기 </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Items>
          <Item>
            <Item>
              <Link to="/workspace/Oreum/channel/일반">Chatting</Link>
            </Item>
            <Item>
              <Link to="/workspace/Oreum/trello">Trello</Link>
            </Item>
            <Item>
              <Link to="/workspace/Oreum/calendar">Calendar</Link>
            </Item>
            {userData ? (
              <span onClick={onClickUserProfile}>
                <ProfileImg src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />
                {showUserMenu && (
                  <Menu show={showUserMenu} style={{ right: 0, top: 0 }} onCloseModal={onCloseUserProfile}>
                    <ProfileModal>
                      <img src={gravatar.url(userData.email, { s: '36px', d: 'retro' })} alt={userData.nickname} />
                      <div>
                        <span id="profile-name">{userData.nickname}</span>
                        <span id="profile-active">Active</span>
                      </div>
                    </ProfileModal>
                    <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
                  </Menu>
                )}
              </span>
            ) : (
              <Link to="/login">로그인 </Link>
            )}
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Haeder;
