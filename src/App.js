import './App.css';
import TodoList from './features/todos/components/TodoList';
import TodoDoneList from './features/todos/components/TodoDoneList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Link to="/">Root</Link>&nbsp;
        <Link to="/todos">Todo List</Link>&nbsp;
        <Link to="/done">Done list</Link>

        <Switch>
          <Route exact path="/todos" component={TodoList}></Route>
          <Route exact path="/done" component={TodoDoneList}></Route>
          <Route path="*">
            <div>
              HENLOW ALL this is root
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
