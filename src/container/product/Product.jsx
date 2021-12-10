import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) =>{
      this.setState({
          order: newValue
      })
  }
  render() {
    return (
      <Fragment>
        <div className="header container text-center">
          <div className="logo">
            <img
              src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              alt=""
            />
          </div>
          <div className="troley">
            <a href="#" className="fa fa-shopping-cart"></a>
            <div className="count">{this.state.order}</div>
          </div>
        </div>

        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
