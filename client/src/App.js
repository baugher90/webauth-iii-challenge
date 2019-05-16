import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import './App.css';
import Login from "./components/auth/Login";
import Users from "./components/user/Users";
import Register from './components/auth/Register';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/login">Login</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/register">Register</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/users">Users</NavLink>
        &nbsp; | &nbsp;
        <button className="ui blue button" onClick={this.logout}>Logout</button>
      </nav>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
      </main>
    </div>
  );
}

logout = () => {
  localStorage.removeItem("jwt");
  this.props.history.push("/login");
};

}

export default withRouter(App);
