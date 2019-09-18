import React, { Component } from 'react'
import './style.css'
import swal from 'sweetalert'
import NavBar from '../Navbar'
import axios from 'axios'

class shippingInfo extends Component {
  state = {
    username: '',
    phone: '',
    Address: '',
    Extra_Note: ''
  }

  // put the entered value from the user to it's state.
  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, phone, Address, Extra_Note } = this.state

    axios
      .post('/shipping_info', { username, phone, Address, Extra_Note })
      .then(res => {
        if (res.data) {
          swal({
            title:
              'Your Order is processed Contact us on phone No : 0598121490',
            icon: 'success',
            button: 'Home!'
          }).then(function() {
            window.location.href = '/'
          })
        }
      })
  }

  render() {
    const { username, phone, Address, Extra_Note } = this.state
    return (
      <div>
        <NavBar />

        <h1>Shipping info</h1>
        <form className="flex-container" onSubmit={this.handleSubmit}>
          <label for="username"></label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={this.changeInput}
            value={username}
            required
          ></input>
          <label for="phone"></label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone 059-123-1234"
            onChange={this.changeInput}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={phone}
            required
          ></input>

          <label for="Address"></label>
          <input
            type="text"
            placeholder="Address"
            name="Address"
            onChange={this.changeInput}
            value={Address}
            required
          ></input>
          <label for="Extra Note"></label>
          <input
            type="text"
            placeholder="Extra Note"
            name="Extra_Note"
            onChange={this.changeInput}
            value={Extra_Note}
          ></input>
          <button type="submit" className="confirm">
            Confirm
          </button>
        </form>
      </div>
    )
  }
}
export default shippingInfo
