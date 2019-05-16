import React from "react";
import axios from "axios";
import "../../App.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Username</label>
            <div className="ui left icon input">
              <input
                id="username"
                type="text"
                name="username"
                autoComplete={this.state.username}
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="username"
              />
              <i aria-hidden="true" className="user icon" />
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="ui left icon input">
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Password"
              />
              <i aria-hidden="true" className="lock icon" />
            </div>
          </div>
          <div>
            <button type="submit" className="ui button">
              Submit Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:5000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("logged in user info",res)
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("dep", res.data.department);
        localStorage.setItem("role", res.data.role);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default Login;
