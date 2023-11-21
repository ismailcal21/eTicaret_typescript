import React from "react";

const ProductPageComponent = () => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
        <div className="product-block">
          <div className="product-img">
            <img src="images/product_img_2.png" alt="" />
          </div>
          <div className="product-content">
            <h5>
              <a href="#" className="product-title">
                <strong>(64GB, Blue)</strong>
              </a>
            </h5>
            <div className="product-meta">
              <a href="#" className="product-price">
                $1200
              </a>
              <a href="#" className="discounted-price">
                $1700
              </a>
              <span className="offer-price">10%off</span>
            </div>
            <div className="shopping-btn">
              <a href="#" className="product-btn btn-like">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="product-btn btn-cart">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageComponent;
