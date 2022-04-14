import styled from '@emotion/styled';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 72px;
  height: 100%;
`;

export const Container = styled.div`
  width: 800px;
  margin: 20px 0 40px 0;
`;

export const DetailTopContainer = styled.div`
  padding: 0 10px 40px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const DetailTopTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const DetailSimpleIntro = styled.p`
  font-size: 16px;
`;

export const DetailMiddleContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const DetailDsc = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Detailexplain = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const DetailArea = styled.p`
  display: inline-block;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: #143f6b;
  color: #feb139;
`;

export const DetailEndContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const DetailEmail = styled.p`
  font-size: 16px;
`;

export const DetailCommentContainer = styled.div`
  margin-top: 30px;
`;

export const DetailProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProfileOreumImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ProfileOreumName = styled.span`
  font-size: 20px;
`;

export const DetailformContainer = styled.form``;

export const CommentInput = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 100px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  resize: none !important;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const CommentButton = styled.button`
  margin-bottom: 20px;
  max-width: 100%;
  color: #fff;
  background-color: #143f6b;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 35px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #5463ff;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const CommentContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

export const CommnetLeft = styled.div``;

export const ProfileCommnetImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const CommnetRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const DetailName = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const DetailCommnet = styled.p`
  font-size: 17px;
  font-weight: 400;
`;
