import React, { Component } from "react";
import XampleComp from "../../component/xample";
import Product from "../product/Product";

class Home extends Component {
  render() {
    return (
      <div className="">
        {/* <h1>Xample Component</h1>
        <hr />
        <XampleComp 
        time="12.34"
        title="Aa"
        desc="10x ditonton, 1x dibagikan"/>
        <XampleComp 
        time="13.33"
        title="Bb"
        desc="100x ditonton, 10x dibagikan"/>
        <XampleComp 
        time="24.32"
        title="Cc"
        desc="1k x ditonton, 100x dibagikan"/>
        <XampleComp/> */}

        <p>Counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
