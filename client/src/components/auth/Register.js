import React from "react";
import axios from "axios";
import "../../App.css";

class Register extends React.Component {
  state = {
    username: "",
    department: "",
    role: "",
    password: ""
  };

  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Username</label>
            <div className="ui left icon input">
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="username"
              />
              <i aria-hidden="true" className="user icon" />
            </div>
          </div>
          <div className="field">
            <label>Department</label>
            <div className="ui left icon input">
              <input
                id="department"
                type="text"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
                placeholder="department"
              />
              <i aria-hidden="true" className="user icon" />
            </div>
          </div>
          <div className="field">
            <label>Role</label>
            <div className="ui left icon input">
              <input
                id="role"
                type="role"
                name="role"
                autoComplete="current-role"
                value={this.state.role}
                onChange={this.handleInputChange}
                placeholder="role"
              />
              <i aria-hidden="true" className="lock icon" />
            </div>
          </div>
          <div></div>
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
              Register User
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
    const endpoint = "http://localhost:5000/api/auth/register";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("new user info",res)
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("dep", res.data.department);
        localStorage.setItem("role", res.data.role);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.error(err);
      });
  };


//   handleSubmit = e => {
//     e.preventDefault();
//     const endpoint = 'http://localhost:5000/api/auth/register';

//     axios
//       .post(endpoint, this.state)
//       .then(res => {
//         localStorage.setItem('jwt', res.data.token);
//         console.log(res)
//         this.props.history.push('/users');
//       })
//       .catch(error => console.error(error));
//   };
}


export default Register;
