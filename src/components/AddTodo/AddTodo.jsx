import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: "고유한값", text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      ></input>
      <button>Add</button>
    </form>
  );
}
