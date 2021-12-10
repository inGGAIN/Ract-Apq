import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };
  tombTambah = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
    this.handleCounterChange();
  };

  tombKurang = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="shell">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card wsk-cp-product">
                <div className="img-thumb-prod wsk-cp-img">
                  <img
                    src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/11/9/0708cb5d-ae15-46c2-8ee6-33443e2389b7.jpg.webp?ect=3g"
                    alt=""
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="title-product">
                    <h3>Nama Produk</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="wcf-left">
                    <span className="price">Rp 340.000</span>
                  </div>
                  <div class="wcf-right">
                    <a href="#" class="buy-btn">
                      <i class="zmdi zmdi-shopping-basket"></i>
                    </a>
                  </div>
                </div>

                <div className="counter">
                  <button className="btn-minus" onClick={this.tombKurang}>
                    -
                  </button>
                  <input type="text" className="total-input" value={this.state.order} />
                  <button className="btn-plus" onClick={this.tombTambah}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
