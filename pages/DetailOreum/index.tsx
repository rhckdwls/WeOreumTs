import { IOreum } from '@typings/db';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import OreumData from '../../json/db.json';
import { Container, Header } from './styles';

function DetailOreum() {
  const { id } = useParams<{ id: any }>();
  const [oreum, setOreum] = useState(OreumData);

  const oreumSearch = oreum.find((oreums) => oreums.id == id);

  return (
    <div>
      <Header>{oreumSearch?.title}</Header>
      <Container>
        <img src={oreumSearch?.image} alt={oreumSearch?.title} />
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row" style={{ width: 100 }}>
                주소
              </th>
              <td>{oreumSearch?.place}</td>
            </tr>
            <tr>
              <th scope="row">표고</th>
              <td>{oreumSearch?.pyogo}</td>
            </tr>
            <tr>
              <th scope="row">비고</th>
              <td>{oreumSearch?.vigo}</td>
            </tr>
            <tr>
              <th scope="row">설 명</th>
              <td>{oreumSearch?.explain}</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default DetailOreum;
