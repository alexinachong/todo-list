import React from 'react';
import TodoItem from './todo_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.prioritizeItems = this.prioritizeItems.bind(this);
  }

  componentDidMount() {
    this.setState({ todos: this.props.todos });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      todos: newProps.todos
    });
  }

  prioritizeItems(todos) {
    let arrayOfTodos = this.props.todos.map(todo => { // { todo: "1, hello", todoId: 0 }
      console.log(todo);
      let todoArray = todo.todo.split(",");
      return { todo: todoArray[1], priority: parseInt(todoArray[0]), todoId: todo.todoId };
    });
    let sorted = arrayOfTodos.sort((a, b) => {
      return a.priority - b.priority;
    });
    return sorted;
  }

  render() {
    return (
      <div className="todo-list">
        <div className="todo-items-container">
          {this.prioritizeItems(this.props.todos).map(todo => (
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
