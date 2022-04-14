import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardListContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 72px;
  min-height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

export const CreateLink = styled(Link)`
  border: solid 1px #333;
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 20px;
  height: 40px;
  &:hover {
    background-color: #fffbe7;
  }
`;

export const OreumInput = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  width: 300px;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  height: 35px;
  font-size: 18px;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const NoOreumMent = styled.div`
  font-size: 100px;
`;
