import { merge } from 'lodash';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case ADD_TODO:
      let newTodo = {};
      newTodo[action.todoId] = {todoId: action.todoId, todo: action.todo};
      return merge({}, state, newTodo);

    case REMOVE_TODO:
      let newState = merge({}, state);
      delete newState[action.todoId];
      return newState;

    case UPDATE_TODO:
      let updatedTodo = merge({}, state);
      updatedTodo[action.todoId] = {todoId: action.todoId, todo: action.todo};
      return updatedTodo;

    default:
      return state;
  }
};

export default todosReducer;
