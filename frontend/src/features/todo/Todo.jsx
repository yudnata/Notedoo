import React from 'react';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import TodoList from './components/TodoList';

const Todo = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todo;
