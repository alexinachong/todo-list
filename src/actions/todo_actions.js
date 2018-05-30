export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo: todo
});

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  todoId: todoId
});

// export const updateTodo = (todoId, todo) => ({
//
// });