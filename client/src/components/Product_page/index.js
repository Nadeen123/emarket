/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import NavBar from '../Navbar'
import ProductInfo from './Product_info'
import AddQuantityCart from '../Product_page/Add_quantity_cart'

class ProductPage extends Component {
  state = { price: 0 }

  setPrice = newPrice => {
    this.setState({ price: newPrice })
  }
  render() {
    return (
      <>
        <NavBar />
        <ProductInfo
          id={this.props.match.params.id}
          price={this.state.price}
          setPrice={this.setPrice}
        />
        <AddQuantityCart
          id={this.props.match.params.id}
          prePath={this.props.location.pathname.split(this.props.match.url)[1]}
          price={this.state.price}
        />
      </>
    )
  }
}

export default ProductPage
