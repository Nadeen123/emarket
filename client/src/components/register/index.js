import NavBar from '../Navbar/index.js'
import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import swal from 'sweetalert'

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  }

  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  registerButton = event => {
    const { username, email, password, phone, address } = this.state
    event.preventDefault()
    axios
      .post('/register', { username, email, password, phone, address })
      .then(response => {
        swal({
          title: 'registerd',
          icon: 'success',
          button: 'go to Home'
        }).then(res => {
          window.location.href = `/`
        })
      })
      .catch(error => {
        swal({
          title: 'ERROR try again',
          icon: 'error',
          button: 'try now'
        }).then(res => {
          window.location.href = `/register`
        })
      })
  }
  render() {
    const { username, phone, address, email, password } = this.state

    return (
      <div className="register">
        <NavBar />
        <form className="flex-container2">
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={this.changeInput}
            value={username}
            required
          ></input>
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.changeInput}
            value={email}
            required
          ></input>
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.changeInput}
            value={password}
          ></input>
          <label htmlFor="phone"></label>
          <input
            type="text"
            min="7"
            max="13"
            placeholder="Phone"
            name="phone"
            onChange={this.changeInput}
            value={phone}
            required
          ></input>
          <label htmlFor="address"></label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={this.changeInput}
            value={address}
            required
          ></input>

          <button
            type="submit"
            className="register-button"
            onClick={this.registerButton}
          >
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default Register
