import React from 'react';

const TodoItem = ({todo, removeTodo}) => {
  return (
    <div className="todo-items">
      {todo.todo} <button onClick={() => removeTodo(todo.todoId)}>Delete</button>
    </div>
  );
};

export default TodoItem;
