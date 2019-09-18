import React from 'react'
import './style.css'
import NavBar from '../Navbar'
const aboutUs = () => {
  return (
    <div className="pageAboutUs">
      <NavBar />
      <img
        className="superMarket"
        src="https://2.top4top.net/p_1348iki641.jpg"
        alt="about us"
      ></img>
      <h1 className="aboutUs">About us :</h1>
      <p className="description">
        Its a supermarket website we have many components you can order any
        thing when you in home, work. Its a esay way to buy anything.
      </p>
    </div>
  )
}
export default aboutUs
