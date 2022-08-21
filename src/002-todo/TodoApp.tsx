import * as React from 'react';
import TodoItem from './TodoItem';
import { TodoContext, TodoContextProps } from './Todo.context';

export default function TodoApp() {
  const [value, setValue] = React.useState('');
  const { todos, addTodo } = React.useContext<TodoContextProps>(TodoContext);

  const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      const name = value;
      addTodo(name);
      setValue('');
    }
  };

  return (
    <div>
      <div>
        <input
          data-testid="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={onKeyUp}
        />
      </div>
      <ul style={{ listStyleType: 'none' }}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
