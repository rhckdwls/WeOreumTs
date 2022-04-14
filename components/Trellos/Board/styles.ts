import styled from '@emotion/styled';
import { IAreaProps } from '@typings/db';

export const Wrapper = styled.div`
  width: 400px;
  padding-top: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  &:hover {
    border: solid 1px rgba(1, 1, 1, 0.3);
    box-shadow: 1px 2px 1px 1px rgba(1, 1, 1, 0.3);
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
  button {
    background: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
`;

export const Area = styled.div<IAreaProps>`
  background-color: ${(props) => (props.isDraggingOver ? '#dfe6e9' : props.isDraggingFromThis ? '#b2bec3' : '#fff')};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
    border: 1px solid var(--saf-0);
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    width: 90%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    padding: 12px;
    height: 40px;
    padding-top: 11px;
    padding-bottom: 13px;
    font-size: 18px;
    line-height: 1.33333333;
    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
    }
  }
`;
