import { useCallback, useReducer, useRef } from 'react';

const createBulkTodo = () => {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return arr;
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};

export default function TodoAppUseReducer() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodo);

  const nextId = useRef(2500);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);
  return <>...</>;
}
