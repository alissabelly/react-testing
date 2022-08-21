import * as React from 'react';

export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (name: string) => void;
  markDone: (id: number, isDone: boolean) => void;
  deleteTodo: (id: number) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  addTodo: (name: string) => {},
  markDone: (id: number, isDone: boolean) => {},
  deleteTodo: (id: number) => {},
});

interface TodoProviderProps {
  children?: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const idRef = React.useRef(0);

  const addTodo = (name: string) => {
    // const id = new Date().getTime();
    idRef.current += 1;
    const id = idRef.current;
    setTodos((todos) => [...todos, { id, name, isDone: false }]);
  };

  const markDone = (id: number, isDone: boolean) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = isDone;
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, markDone, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
