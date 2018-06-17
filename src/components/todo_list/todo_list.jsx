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

  // DEBUG BELOW 
  update(id, field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  overwriteTodo(todoText) {
    console.warn(todoText);
    return (
      <input
        type="text"
        value={todoText}
        onChange={this.update('todo')}
        placeholder="Add todo..."
        className="todo-input"
        id="todo-field"
        autoFocus
      />
    );
  }
  // DEBUG ABOVE

  render() {
    return (
      <div className="todo-list">
        <div className="todo-items-container">
          {this.prioritizeItems(this.props.todos).map(todo => (
            <TodoItem
              key={todo.todoId}
              removeTodo={this.props.removeTodo}
              updateTodo={this.props.updateTodo}
              overwriteTodo={this.overwriteTodo}
              todo={todo}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
