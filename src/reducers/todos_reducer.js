import { merge } from 'lodash';
import { ADD_TODO, REMOVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case ADD_TODO:
      
    case REMOVE_TODO:

    default:
      return state;
  }
};

export default todosReducer;
