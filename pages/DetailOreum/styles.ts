import styled from '@emotion/styled';

export const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 700px;
    height: 500px;
    border-radius: 15px;
    margin-right: 30px;
  }
  table {
    border: none;
    width: 500px;
    height: 400px;
    tbody {
      border-top: solid 2px #091118;
      vertical-align: middle;
    }
    tr {
      border-bottom: solid 1px rgba(1, 1, 1, 0.2);
    }

    th {
      font-size: 25px;
      vertical-align: middle;
    }
    td {
      vertical-align: middle;
    }
  }
`;
