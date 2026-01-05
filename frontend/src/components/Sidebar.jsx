import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-300 min-h-screen">
      <h1 className="py-10 px-10 text-2xl font-bold">Notedoo</h1>
      <div className="flex flex-col gap-4">
        <p className="px-10 text-xl font-medium duration-300 hover:bg-gray-400 hover:font-bold hover:cursor-pointer">
          To-do
        </p>
        <p className="px-10 text-xl font-medium duration-300 hover:bg-gray-400 hover:font-bold hover:cursor-pointer">
          Notes
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
