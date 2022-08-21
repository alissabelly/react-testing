import * as React from 'react';
import { Todo, TodoContext } from './Todo.context';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { markDone, deleteTodo } = React.useContext(TodoContext);
  const { name, id, isDone } = todo;

  const onCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const isDone = e.target.checked;
    markDone(id, isDone);
  };

  const onDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteTodo(id);
  };

  return (
    <li style={{ margin: '10px 0' }} data-testid={`todo-item-${id}`}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          textDecoration: isDone ? 'line-through' : undefined,
        }}
      >
        <div data-testid={`label`}>{id}</div>
        <div>
          <input
            data-testid="checkbox"
            value={id}
            type="checkbox"
            checked={isDone}
            onChange={onCheckboxChange}
          />
        </div>
        <div>{name}</div>
        <div>
          {isDone !== true && (
            <button
              type="button"
              onClick={onDelete}
              data-testid={'delete-button'}
            >
              delete
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
