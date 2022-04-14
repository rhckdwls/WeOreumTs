import React, { useCallback, useRef, useState } from 'react';
import {
  ContainerForm,
  CreateInput,
  CreateInputdec,
  CreateSelect,
  CreateSubGuideTitle,
  CreateTitleInput,
  Img,
  ImgInput,
  MainDiv,
  MyBlock,
} from './styles';
import useInput from '@hooks/useInput';
import { useRecoilState } from 'recoil';
import { oreumState } from '@hooks/atoms';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Redirect, useHistory } from 'react-router';
import { Button } from '@pages/SignUp/styles';

const areas = [
  '제주시',
  '서귀포시',
  '애월읍',
  '한림읍',
  '한경면',
  '대정읍',
  '안덕면',
  '중문',
  '남원읍',
  '표선면',
  '성산읍',
  '구좌읍',
  '조천읍',
];

function OreumRoomCreate() {
  let history = useHistory();
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);
  const [oreum, setOreum] = useRecoilState(oreumState);
  const [title, onChangeTitle] = useInput('');
  const [simpleDec, onChangeSimpleDec] = useInput('');
  const [desc, setDesc] = useState('');
  const [area, setArea] = useState(0);
  const [fileImage, setFileImage] = useState('');

  const onChangeArea = useCallback((e) => {
    setArea(e.target.value);
  }, []);

  const onChangeDesc = useCallback((e) => {
    setDesc(e.target.value);
  }, []);

  const saveFileImage = (e: any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const OreumSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !simpleDec || !area || !desc) {
        return alert('모든 값을 넣어주셔야 합니다.');
      }

      setOreum((oldOreum) => [
        {
          id: Date.now(),
          simpledec: simpleDec,
          email: userData.email,
          title: title,
          description: desc,
          area: area,
          img: fileImage ? fileImage : 'img/bg5.jpg',
        },
        ...oldOreum,
      ]);
      history.push('/oreum');
    },
    [title, simpleDec, area, desc],
  );

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <MainDiv>
      <ContainerForm onSubmit={OreumSubmit}>
        <CreateTitleInput placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle} />
        <CreateSubGuideTitle>한줄 소개</CreateSubGuideTitle>
        <CreateInput placeholder="ex) 노형동 근처 매주 주말" value={simpleDec} onChange={onChangeSimpleDec} />
        <CreateSubGuideTitle>지역 선택</CreateSubGuideTitle>
        <CreateSelect value={area} onChange={onChangeArea}>
          <option selected>지역 선택</option>
          {areas.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </CreateSelect>
        <CreateSubGuideTitle>사진 업로드</CreateSubGuideTitle>
        {fileImage ? <Img alt="sample" src={fileImage} /> : <Img alt="sample" src="img/bg5.jpg" />}
        <ImgInput type="file" id="image" accept="imgge/*" onChange={saveFileImage} />

        <CreateSubGuideTitle>소개글</CreateSubGuideTitle>
        <MyBlock>
          <CreateInputdec placeholder="설명을 해주세요" value={desc} onChange={onChangeDesc} />
        </MyBlock>
        <Button type="submit">모집 작성</Button>
      </ContainerForm>
    </MainDiv>
  );
}

export default OreumRoomCreate;
