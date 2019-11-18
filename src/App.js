import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          email: '',
          password: '',
      }
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    })
  }
 
  render() {
      return (
          <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
              <form onSubmit={this.onSubmit} className="form-signin">
                  <div className="form-group">
                      <label>Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                  </div>
                <div className="form-group">
                      <label>Password: </label>
                      <input type="password" 
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Business" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}
