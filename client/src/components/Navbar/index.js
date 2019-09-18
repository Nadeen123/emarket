import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = { toggleMenu: false }

  onClick1 = () => {
    const { toggleMenu } = this.state

    this.setState({ toggleMenu: !toggleMenu })
  }

  render() {
    const { toggleMenu } = this.state

    return (
      <div className="nav-bar">
        <section className="logo-section">
          <Link to="/">
            <img
              className="logo"
              src="https://3.top4top.net/p_1339rel6k1.png"
              alt="logo"
            />
          </Link>
          <p className="shop">
            <Link to="/shop"> Shop </Link>
          </p>
        </section>
        <section className="cart-section">
          <Link to="/cart">
            <img
              className="cart"
              src="https://2.top4top.net/p_1339xtovq1.png"
              alt="cart"
            />
          </Link>

          <img
            className={!toggleMenu ? 'menu' : 'clickedMenu'}
            src="https://4.top4top.net/p_1339ilo061.png"
            alt="menu"
            onClick={this.onClick1}
          />

          <div className={!toggleMenu ? 'hiddenMenu' : 'showMenu'}>
            <Link to="/about_us">
              <h2 className="aboutUs">About us</h2>
            </Link>
            <Link to="/login">
              <h2>Log in</h2>
            </Link>
            <Link to="/register">
              <h2>Sing up</h2>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}
export default NavBar
