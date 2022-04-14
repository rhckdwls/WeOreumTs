import styled from '@emotion/styled';

export const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.isDragging ? '#74b9ff' : '#FFEEEE')};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isDragging ? '0px 2px 5px rgba(0,0,0,0.5)' : 'none')};
`;
