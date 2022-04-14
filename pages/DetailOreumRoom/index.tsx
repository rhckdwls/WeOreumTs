import { oreumState } from '@hooks/atoms';
import fetcher from '@utils/fetcher';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import gravatar from 'gravatar';
import useSWR from 'swr';
import {
  CommentButton,
  CommentContainer,
  CommentInput,
  CommnetLeft,
  CommnetRight,
  Container,
  DetailArea,
  DetailCommentContainer,
  DetailCommnet,
  DetailDsc,
  DetailEmail,
  DetailEndContainer,
  Detailexplain,
  DetailformContainer,
  DetailMiddleContainer,
  DetailName,
  DetailProfileContainer,
  DetailSimpleIntro,
  DetailTopContainer,
  DetailTopTitle,
  MainDiv,
  ProfileCommnetImg,
  ProfileOreumImg,
  ProfileOreumName,
} from './styles';

function DetailOreumRoom() {
  const [comment, setComment] = useState([{ name: 'test', comment: '오 가고싶네요' }]);
  const [commentValue, setCommentValue] = useState('');
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);
  const { id } = useParams<{ id: any }>();
  const [oreum, setOreum] = useRecoilState(oreumState);

  const oreums = oreum.find((oreums) => oreums.id == id);

  const CommentonChange = useCallback((e) => {
    setCommentValue(e.target.value);
  }, []);

  const CommentSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!commentValue) {
        return;
      }
      setComment((oldOreum) => [
        {
          name: userData.nickname,
          comment: commentValue,
        },
        ...oldOreum,
      ]);
      setCommentValue('');
    },
    [commentValue],
  );

  return (
    <MainDiv>
      <Container>
        <DetailTopContainer>
          <DetailTopTitle>{oreums?.title}</DetailTopTitle>
          <DetailSimpleIntro>{oreums?.simpledec}</DetailSimpleIntro>
        </DetailTopContainer>
        <DetailMiddleContainer>
          <DetailDsc>{oreums?.description}</DetailDsc>
          <Detailexplain>지역</Detailexplain>
          <DetailArea>{oreums?.area}</DetailArea>
        </DetailMiddleContainer>
        <DetailEndContainer>
          <Detailexplain>작성자 이메일</Detailexplain>
          <DetailEmail>{oreums?.email}</DetailEmail>
        </DetailEndContainer>
        <DetailCommentContainer>
          {userData ? (
            <DetailProfileContainer>
              <ProfileOreumImg src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />
              <ProfileOreumName>{userData.nickname}</ProfileOreumName>
            </DetailProfileContainer>
          ) : null}
          {userData ? (
            <DetailformContainer onSubmit={CommentSubmit}>
              <CommentInput placeholder="댓글을 작성해주세요." value={commentValue} onChange={CommentonChange} />
              <CommentButton>댓글 작성</CommentButton>
            </DetailformContainer>
          ) : (
            <CommentInput disabled placeholder="로그인 해주세요." />
          )}
          {comment.map((ment) => {
            return (
              <CommentContainer>
                <CommnetLeft>
                  <ProfileCommnetImg
                    src={gravatar.url(userData.email, { s: '28px', d: 'retro' })}
                    alt={userData.nickname}
                  />
                </CommnetLeft>
                <CommnetRight>
                  <DetailName>{userData ? userData.nickname : ment.name}</DetailName>
                  <DetailCommnet>{ment.comment}</DetailCommnet>
                </CommnetRight>
              </CommentContainer>
            );
          })}
        </DetailCommentContainer>
      </Container>
    </MainDiv>
  );
}

export default DetailOreumRoom;
