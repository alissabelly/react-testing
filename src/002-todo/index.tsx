import * as React from 'react';
import { TodoProvider } from './Todo.context';
import TodoApp from './TodoApp';

export default function App() {
  return (
    <TodoProvider>
      <div>
        <TodoApp />
      </div>
    </TodoProvider>
  );
}
