import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: todoId => dispatch(removeTodo(todoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
