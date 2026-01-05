import React from 'react';
import { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getTodos = async () => {
      try {
        const response = await fetch('http://localhost:5000/todos');
        const jsonData = await response.json();

        if (isMounted) {
          setTodos(jsonData);
        }
      } catch (error) {
        if (isMounted) console.error(error.message);
      }
    };

    getTodos();
    return () => {
      isMounted = false;
    };
  }, []);

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id_todo !== id));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <table className="mx-10 mt-20">
      <thead>
        <tr className="border- border-b">
          <th className="mr-50 pb-2">Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id_todo}>
            <td className="py-2 pr-30">{todo.description}</td>
            <td className="py-2 px-5 text-center">
              <button
                className="px-5 py-2 text-orange-300 font-medium hover:cursor-pointer hover:scale-110"
                onClick={() => deleteTodo(todo.id_todo)}
              >
                Edit
              </button>
            </td>
            <td className="py-2 px-5 text-center">
              <button
                className="px-5 py-2 text-red-400 font-medium hover:cursor-pointer hover:scale-110"
                onClick={() => deleteTodo(todo.id_todo)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
