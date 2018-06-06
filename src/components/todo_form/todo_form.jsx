import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todo !== '') {
      this.props.addTodo(this.state.todo);
    }
    this.setState({ todo: '' });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="todo-form-container">
        <form onSubmit={this.handleSubmit} className="todo-form">
          <label>
            <input
							type="text"
							value={this.state.todo}
							onChange={this.update('todo')}
							placeholder="Add todo..."
							className="todo-input"
							id="todo-field"
              autoFocus
						/>
          </label>
          <input type="submit" value="Add!" className="form-buttons" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
