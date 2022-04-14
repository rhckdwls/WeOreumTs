import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Boards = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 20px;
`;

export const TrashContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: crimson;
  color: white;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  &.dragging-over:hover {
    transform: scale(1.3);
  }
  span {
    font-size: 25px;
  }
`;
