import React from 'react';
import TodoItem from './todo_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    this.setState({

    });
  }

  render() {
    return (
      <div className="todo-list">
        <div className="todo-items-container">
          {this.props.todos.map(todo => (
            <TodoItem
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
