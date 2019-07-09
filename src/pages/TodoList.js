import React, { Component, Fragment } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todoActions from "../actions/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    newTodoText: ""
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: "" });
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <input
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
          type="text"
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
