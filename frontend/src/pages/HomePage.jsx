import React from 'react';
import Todo from '../features/todo/Todo';

const HomePage = () => {
  return (
    <>
      <h2 className="text-2xl px-10 py-10 font-bold">To-do</h2>
      <Todo />
    </>
  );
};

export default HomePage;
