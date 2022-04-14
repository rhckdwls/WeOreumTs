import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 70px);
  flex-flow: column;
  position: relative;
`;

export const Header = styled.header`
  height: 62px;
  display: flex;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 var(--saf-0);
  border-top: solid 1px rgba(1, 1, 1, 0.2);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;
  & .header-right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;
