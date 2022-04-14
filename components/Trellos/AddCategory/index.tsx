import { toDoState } from '@hooks/atoms';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Form, Input } from './styles';

interface IForm {
  category: string;
}

function AddCategory() {
  const [todos, setTodos] = useRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ category }: IForm) => {
    if (category !== '') {
      if (Object.keys(todos).some((v) => v.toLowerCase() === category.toLowerCase())) return;
      setTodos({ ...todos, [category]: [] });
      setValue('category', '');
    }
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input {...register('category', { required: true })} type="text" placeholder="+ 트렐로박스를 추가하세요" />
        </Form>
      </div>
    </>
  );
}

export default AddCategory;
