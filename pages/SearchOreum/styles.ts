import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapperSearch = styled.div`
  background: url(img/bg1.jpg) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 570px;
    height: 400px;
  }
`;

export const WrapperOreum = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  & .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    cursor: pointer;
  }
  &.page-selection {
    width: 48px;
    height: 30px;
    color: #cccccb;
  }
  & ul {
    list-style: none;
    padding: 0;
    &.pagination li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
    &.pagination li:first-child {
      border-radius: 5px 0 0 5px;
    }
    &.pagination li:last-child {
      border-radius: 0 5px 5px 0;
    }
    &.pagination li a {
      text-decoration: none;
      color: #091118;
      font-size: 1rem;
    }
    &.pagination li.active a {
      color: white;
    }
    &.pagination li.active {
      background-color: #337ab7;
    }
    &.pagination li a:hover,
    &.pagination li a.active {
      color: blue;
    }
  }
  p {
    margin-top: 30px;
    font-size: 25px;
    margin-bottom: 30px;
    span {
      color: #c73329;
    }
  }
  table {
    border: none;
    width: 1000px;
    height: 300px;
    text-align: center;
    thead {
      border-bottom: solid 2px #091118;
      font-size: 18px;
    }
    td {
      padding: 5px;
    }
    tr {
      cursor: pointer;
      &:hover {
        background-color: #e2e6ae;
      }
    }
  }
`;

export const NoOreumMent = styled.div`
  font-size: 70px;
  margin-top: 20px;
`;
