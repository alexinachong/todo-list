import React from 'react';
import TodoItem from './todo_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ todos: this.props.todos });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      todos: newProps.todos
    });
  }

  render() {
    return (
      <div className="todo-list">
        <div className="todo-items-container">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.todoId}
              removeTodo={this.props.removeTodo}
              todo={todo}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
