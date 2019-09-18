import React, { Component } from 'react'
import './index.css'

const serverError = () => {
  return (
    <div>
      <img
        className="serverError"
        src="https://bobcares.com/wp-content/uploads/500-internal-server-error-apache.jpg"
      ></img>
    </div>
  )
}

export default serverError
