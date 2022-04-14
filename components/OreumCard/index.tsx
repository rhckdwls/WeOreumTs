import { oreumState } from '@hooks/atoms';
import { IOreumState } from '@typings/db';
import React from 'react';
import { useRecoilState } from 'recoil';
import {
  CardContainer,
  CardImgContainer,
  CardInfoareaContainer,
  CardInfoContainer,
  CardInfoContent,
  CardInfoTitle,
} from './styles';

interface Props {
  data: IOreumState;
}

function OreumCard({ data }: Props) {
  const { id, title, description, simpledec, area, img, email } = data;
  return (
    <CardContainer to={'/oreum/' + id}>
      <CardImgContainer>
        <img src={img} alt={title} />
      </CardImgContainer>
      <CardInfoContainer>
        <CardInfoTitle>{title}</CardInfoTitle>
        <CardInfoContent>{simpledec}</CardInfoContent>
        <CardInfoareaContainer>
          <p>{area}</p>
        </CardInfoareaContainer>
      </CardInfoContainer>
    </CardContainer>
  );
}

export default OreumCard;
