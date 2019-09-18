import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Shop from '../Shop'
import Register from '../Register'
import ProductPage from '../Product_page'
import Shipping_info from '../Shipping_info'
import Cart_page from '../Cart_page'
import About_us from '../About_us'

class App extends Component {
  state = {
    category_id: null
  }

  setCatogeryId = category_id => {
    this.setState({ category_id })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/shop/:id" component={Shop} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/register" component={Register} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/search/:searchInput" component={Shop} />
          <Route exact path="/shipping_info" component={Shipping_info} />
          <Route exact path="/cart" component={Cart_page} />
          <Route exact path="/about_us" component={About_us} />
        </div>
      </Router>
    )
  }
}

export default App
