import React from "react";
import "./style.css";
import axios from "axios";
import { Link } from 'react-router-dom'
class Category extends React.Component {
  state = {
    result: []
  };
  componentDidMount() {
    axios.get("/category").then(result => {
      const resultArray = result.data.map(e => e);
      this.setState({ result: resultArray });
    });
  }

  render() {
    return (
      <div className="grid-container">
        {!this.state.result.length ? (
          
          <img
            className="loading"
            src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5300368"
            alt="loading"
          />
        ) : (
          this.state.result.map(e => (
          <Link  to={'/shop/'+e.id }>
            <div onClick={this.props.onClick}>
              <img className="grid-item" src={e.img} alt = {e.name+" image"} />
              <p className="category">{e.name}</p>
            </div>
            </Link>
          ))
        )}
      </div>
    );
  }
}
export default Category;
