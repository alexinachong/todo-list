import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoFormContainer from './components/todo_form/todo_form_container';
import TodoListContainer from './components/todo_list/todo_list_container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <div className="form-and-list">
          <TodoFormContainer />
          <br />
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default App;
