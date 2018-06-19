import React from 'react';

// TODO: Add overwrite function

const TodoItem = ({todo, removeTodo, updateTodo, overwriteTodo }) => {
  return (
    <div className="todo-items">
      <button onClick={() => removeTodo(todo.todoId)} className="delete-buttons">X</button> {todo.priority} <span onClick={() => overwriteTodo(todo.todo)}> {todo.todo} </span>
    </div>
  );
};

export default TodoItem;
