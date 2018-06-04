import React from 'react';

const TodoItem = ({todo, removeTodo}) => {
  return (
    <div className="todo-items">
      <button onClick={() => removeTodo(todo.todoId)} className="delete-buttons">X</button> {todo.todo}
    </div>
  );
};

export default TodoItem;
