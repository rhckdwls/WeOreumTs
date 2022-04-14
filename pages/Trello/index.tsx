import React from 'react';
import { useRecoilState } from 'recoil';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Boards, TrashContainer, Wrapper } from './styles';
import Board from '@components/Trellos/Board';
import { IToDoState, toDoState } from '@hooks/atoms';
import AddCategory from '@components/Trellos/AddCategory';

function Trello() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, type, source, draggableId } = info;
    if (!destination) return;
    if (type === 'board') {
      if (destination.index === source.index) return;
      setToDos((allBoards) => {
        const keys = Object.keys(allBoards);
        keys.splice(source.index, 1);
        keys.splice(destination.index, 0, draggableId);

        const newBoardList: IToDoState = {};
        keys.forEach((key) => {
          newBoardList[key] = allBoards[key];
        });
        return newBoardList;
      });
      return;
    }
    if (destination?.droppableId === 'trash') {
      // 보드 삭제시키기
      setToDos((allBoards) => {
        const delboard = [...allBoards[source.droppableId]];
        delboard.splice(source.index, 1);
        return {
          ...allBoards,
          [source.droppableId]: delboard,
        };
      });
    } else {
      if (destination?.droppableId === source.droppableId) {
        // 같은 보드 안에서 움직이기
        setToDos((allBoards) => {
          const boardCopy = [...allBoards[source.droppableId]];
          const taskObj = boardCopy[source.index];
          // 1) 해당 아이템 지우기
          boardCopy.splice(source.index, 1);
          // 2) 해당 아이템 옮긴자리에 생성
          boardCopy.splice(destination?.index, 0, taskObj);
          return {
            ...allBoards,
            [source.droppableId]: boardCopy,
          };
        });
      } else if (destination?.droppableId !== source.droppableId) {
        // 다른 보드에서 움직이기
        setToDos((allBoards) => {
          const sourceBoard = [...allBoards[source.droppableId]];
          const taskObj = sourceBoard[source.index];
          const destinationBoard = [...allBoards[destination.droppableId]];
          sourceBoard.splice(source.index, 1);
          destinationBoard.splice(destination?.index, 0, taskObj);
          return {
            ...allBoards,
            [source.droppableId]: sourceBoard,
            [destination.droppableId]: destinationBoard,
          };
        });
      }
    }
  };
  return (
    <div style={{ borderTop: 'solid 1px rgba(1, 1, 1, 0.2)' }}>
      <AddCategory />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="boardList" type="board" direction="horizontal">
          {(magic) => (
            <Wrapper>
              <Boards ref={magic.innerRef} {...magic.droppableProps}>
                {Object.keys(toDos).map((boardId, idx) => (
                  <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} idx={idx} />
                ))}
              </Boards>
              {magic.placeholder}
            </Wrapper>
          )}
        </Droppable>

        <Droppable droppableId="trash">
          {(magic, snapshot) => (
            <TrashContainer ref={magic.innerRef} {...magic.droppableProps} className="dragging-over">
              <span>🗑</span>
            </TrashContainer>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Trello;
