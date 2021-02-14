import React from 'react';
import './Config.css';

class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', isAuthenticated: false };

    this.correctPassword = 'root123';
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAuthenticate = this.handleAuthenticate.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleAuthenticate(event) {
    event.preventDefault();

    this.setState({ isAuthenticated: (this.state.password === this.correctPassword) });
  }

  Unlogged() {
    return (
      <div className="configs unlogged">
        <form onSubmit={this.handleAuthenticate}>
          <label htmlFor="password">Insira a senha para acessar as configurações:</label>
          <input type="password" 
            id="password"
            value={this.state.password} 
            onChange={this.handlePassword} 
          />
          <button>Acessar</button>
        </form>
      </div>
    );
  }

  Logged() {
    return (
      <div className="configs">
        Hey, you're logged now!
      </div>
    );
  }

  render() {
    if (this.state.isAuthenticated) {
      return this.Logged();
    }

    return this.Unlogged();
  }
}

export default Config;