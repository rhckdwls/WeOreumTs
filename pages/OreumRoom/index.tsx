import { oreumState } from '@hooks/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import { CardListContainer, CreateLink, NoOreumMent, OreumInput, SearchContainer } from './styles';
import OreumCard from '@components/OreumCard';
import useInput from '@hooks/useInput';
import Footer from '@layouts/Footer';
import Scroll from '@utils/Scroll/Scroll';

function OreumRoom() {
  const [oreum, setOreum] = useRecoilState(oreumState);
  const [searchOreum, onChangeSearchOreum] = useInput('');

  const newSearchOreum = [
    ...oreum.filter((val) => {
      if (searchOreum === '') {
        return val;
      } else if (
        val.title.toLowerCase().includes(searchOreum.toLowerCase()) ||
        val.area.toLowerCase().includes(searchOreum.toLowerCase()) ||
        val.simpledec.toLowerCase().includes(searchOreum.toLowerCase())
      ) {
        return val;
      }
    }),
  ];

  return (
    <>
      <CardListContainer>
        <SearchContainer>
          <CreateLink to={'/oreumcreate'}>모집글 작성하기</CreateLink>
          <OreumInput value={searchOreum} onChange={onChangeSearchOreum} placeholder="모집글 검색 / 제목,지역" />
        </SearchContainer>

        {newSearchOreum.map((data, index) => {
          return <OreumCard key={index} data={data} />;
        })}
        {newSearchOreum.length === 0 && <NoOreumMent>검색 결과가 없습니다.</NoOreumMent>}
      </CardListContainer>
      <Footer />
      <Scroll />
    </>
  );
}

export default OreumRoom;
