import React from 'react';

// TODO: Add overwrite function
// class TodoItem extends React.Component {
//
// }

const TodoItem = ({todo, removeTodo, updateTodo, overwriteTodo }) => {
  return (
    <div className="todo-items">
      <button onClick={() => removeTodo(todo.todoId)} className="delete-buttons">X</button> {todo.priority} <span onClick={() => overwriteTodo(todo.todo)}> {todo.todo} </span>
    </div>
  );
};

export default TodoItem;
