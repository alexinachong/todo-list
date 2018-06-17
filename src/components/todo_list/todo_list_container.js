import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state, ownProps) => {
  return ({
    todos: Object.keys(state.todos).map(todoId => state.todos[todoId]) // 1, hello
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: todoId => dispatch(removeTodo(todoId)),
    updateTodo: (todoId, todo) => dispatch(updateTodo(todoId, todo))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
