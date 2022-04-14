import { iDraggableCardProps } from '@typings/db';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from './styles';

function DraggableCard({ toDoId, toDoText, index }: iDraggableCardProps) {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ''} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
