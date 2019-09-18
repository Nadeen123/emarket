import NavBar from '../Navbar/index.js'
import ProductCard from '../Product_card'
import SearchBar from '../Search_bar'
import React, { Component } from 'react'
import './style.css'

class Shop extends Component {
  state = {
    resultProducts: null,
    searchInput: ''
  }

  // function used to make the search input equal the entered value from user
  searchProduct = event => {
    const { value } = event.target
    return this.setState({ searchInput: value })
  }

  // function used to clear final result value for every search
  searchSetArray = resultProducts => {
    const finalResult = resultProducts ? resultProducts : []
    this.setState({ resultProducts: finalResult })
  }

  // function  used to resert the searched value in the search bar
  resetSearch = () => {
    this.setState({ resultProducts: null, searchInput: '' })
  }

  render() {
    const { resultProducts } = this.state
    return (
      <div className="shop-page">
        <NavBar resetSearch={this.resetSearch} />
        <SearchBar
          searchInput={this.state.searchInput}
          searchProduct={this.searchProduct}
          {...this.props}
          setFlag={this.setFlag}
          flag={this.state.flag}
          trigger={this.state.afterSearchTrigger}
          serchArray={this.searchSetArray}
        />
        <ProductCard
          resultAfterSerch={resultProducts}
          path={this.props.location.pathname}
          {...this.props}
        />
      </div>
    )
  }
}

export default Shop
