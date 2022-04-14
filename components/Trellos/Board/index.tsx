import { toDoState } from '@hooks/atoms';
import { IBoardProps } from '@typings/db';
import React, { useRef } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import DraggableCard from '../DraggableCard';
import { Area, Form, Title, Wrapper } from './styles';

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId, idx }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
    setValue('toDo', '');
  };

  const delcg = () => {
    setToDos((prev) => {
      const cp = { ...prev };
      delete cp[boardId];
      return cp;
    });
  };

  return (
    <Draggable draggableId={boardId} index={idx}>
      {(magic, sapshot) => (
        <Wrapper ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
          <Title>
            {boardId} <button onClick={delcg}>X</button>
          </Title>

          <Form onSubmit={handleSubmit(onValid)}>
            <input {...register('toDo', { required: true })} type="text" placeholder={`${boardId} 입력`} />
          </Form>
          <Droppable droppableId={boardId}>
            {(magic, snapshot) => (
              <Area
                isDraggingOver={snapshot.isDraggingOver}
                isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                ref={magic.innerRef}
                {...magic.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <DraggableCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text} />
                ))}
                {magic.placeholder}
              </Area>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
}

export default Board;
