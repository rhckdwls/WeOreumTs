import styled from '@emotion/styled';
import useInput from '@hooks/useInput';
import { Input } from '@pages/SignUp/styles';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router';
import OreumData from '../../json/db.json';
import { NoOreumMent, Wrapper, WrapperOreum, WrapperSearch } from './styles';
import Footer from '@layouts/Footer';

function SearchOreum() {
  let history = useHistory();
  const [Oreums, setOreums] = useState(OreumData.slice(0, 90));
  const [pageNumber, setPageNumber] = useState(0);
  const [serchoreums, onChangeoreums, setSerchoreums] = useInput('');
  const [page, setPage] = useState(10);

  const usersPerPage = page;
  const pagesVisited = pageNumber * usersPerPage;

  const newOreum = [
    ...Oreums.filter((val) => {
      if (serchoreums === '') {
        return val;
      } else if (
        val.title.toLowerCase().includes(serchoreums.toLowerCase()) ||
        val.place.toLowerCase().includes(serchoreums.toLowerCase())
      ) {
        return val;
      }
    }),
  ];

  const displayUsers = newOreum
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((val) => {
      if (serchoreums === '') {
        return val;
      } else if (
        val.title.toLowerCase().includes(serchoreums.toLowerCase()) ||
        val.place.toLowerCase().includes(serchoreums.toLowerCase())
      ) {
        return val;
      }
    })
    .map((oreum, i) => {
      return (
        <tr
          onClick={() => {
            history.push('/searchoreum/' + oreum.id);
          }}
        >
          <th>{oreum.id}</th>
          <td>{oreum.title}</td>
          <td>{oreum.place}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(newOreum.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Wrapper>
        <WrapperSearch>
          <img src="img/map.png" alt="map" />
          <Input
            style={{ width: '400px' }}
            type="text"
            placeholder="???????????? / ??????,??????"
            className="form-control "
            onChange={onChangeoreums}
            value={serchoreums}
          />
        </WrapperSearch>
        <WrapperOreum>
          <p>
            ??? <span>{newOreum.length}???</span> ????????? ?????????????????????.
          </p>
          <table>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">??????</th>
                <th scope="col">??????</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers}
              {newOreum.length === 0 && <NoOreumMent>?????? ????????? ????????????.</NoOreumMent>}
            </tbody>
          </table>

          <ReactPaginate
            pageCount={pageCount}
            previousLabel={'<'}
            nextLabel={'>'}
            marginPagesDisplayed={9}
            onPageChange={changePage}
            containerClassName={'pagination'}
            activeClassName={'page-item page-link'}
            previousClassName={'page-link page-item'}
            nextClassName={'page-link page-item'}
          />
        </WrapperOreum>
      </Wrapper>
      <Footer />
    </>
  );
}

export default SearchOreum;
