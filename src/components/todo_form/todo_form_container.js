import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../../actions/todo_actions';
import TodoForm from './todo_form';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // CHECK: necessary?
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: todoId => dispatch(removeTodo(todoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
