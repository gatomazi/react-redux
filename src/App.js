import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import TodoList from "./pages/TodoList";
import Counter from "./pages/Counter";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <TodoList />
          <Counter />
          <Video />
          <Sidebar />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
