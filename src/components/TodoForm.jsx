import React, { useState } from "react";

function TodoForm({ addTasks }) {
  const [valueInput, setValueInput] = useState("");

  const handleChange = (e) => {
    setValueInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTasks(valueInput);
    setValueInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-around w-2/3"
    >
      <input
        type="text"
        className="w-1/2 border-slate-400 bg-slate-400 rounded-lg p-2 text-lg text-white focus:outline-none"
        value={valueInput}
        onChange={handleChange}
      />
      <button
        className="bg-slate-400 px-4 py-2 rounded-lg ml-24 text-white"
        onClick={handleSubmit}
      >
        Add task!
      </button>
    </form>
  );
}

export default TodoForm;
