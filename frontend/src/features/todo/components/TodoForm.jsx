import React from 'react';
import SubmitBTN from '../../../components/SubmitBTN';
import { useState } from 'react';

const TodoForm = () => {
  const [description, setDescription] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form
      className="px-10 flex gap-3"
      onSubmit={onSubmitForm}
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new To-do list"
        className="border-2 border-black pl-5 pr-20 py-2"
      ></input>
      <div>
        <SubmitBTN />
      </div>
    </form>
  );
};

export default TodoForm;
