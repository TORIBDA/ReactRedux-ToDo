import './App.css';
import TodoList from './features/todos/components/TodoList';
import TodoDoneList from './features/todos/components/TodoDoneList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import React, { useEffect } from 'react';
import Layout, { Header } from 'antd/lib/layout/layout';
import { Menu } from 'antd';

function App() {
  useEffect(() => {
    document.title = "To Do List";
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Header>
            <Menu theme="dark"  mode="horizontal">
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/todos">Todo List</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/done">Done list</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>

        <Switch>
          <Route exact path="/todos" component={TodoList}></Route>
          <Route exact path="/done" component={TodoDoneList}></Route>
          <Route path="*">
            <div>
              <center><h1><strong>TODO LIST HOME</strong></h1></center>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
