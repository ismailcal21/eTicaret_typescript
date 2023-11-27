import React from "react";
import { RootStateType } from "../../redux/store";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: RootStateType) => state.cart.items);
  //urun toplam fiyati
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  console.log("cart2", cartItems);
  console.log("TOTALpRICE", totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row" style={{ margin: "60px" }}>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">My Cart (02)</h3>
              </div>
              <div className="box-body2">
                <div className="table-responsive">
                  <div className="cart">
                    <table className="table table-bordered ">
                      <thead>
                        <tr>
                          <th>
                            <span>Item</span>
                          </th>
                          <th>
                            <span>Price</span>
                          </th>
                          <th>
                            <span>Quantity</span>
                          </th>
                          <th>
                            <span>Total</span>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      {cartItems ? (
                        <>
                          {cartItems.map((product, index) => (
                            <tbody key={index}>
                              <tr>
                                <td>
                                  <a href="#">
                                    <img src={product.images[0]} alt="" />
                                  </a>
                                  <span>
                                    <a href="#">{product.title}</a>
                                  </span>
                                </td>
                                <td>${product.price}</td>
                                <td>
                                  <div className="product-quantity">
                                    <div className="quantity">
                                      <input
                                        type="number"
                                        className="input-text qty text"
                                        step="1"
                                        min="1"
                                        max="6"
                                        name="quantity"
                                        value="1"
                                        title="Qty"
                                        pattern="[0-9]*"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td>${totalPrice.toFixed(2)}</td>
                                <th scope="row">
                                  <a className="btn-close">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        dispatch(removeFromCart(product.id));
                                      }}
                                      className="fa fa-times-circle-o"
                                    ></button>
                                  </a>
                                </th>
                              </tr>
                            </tbody>
                          ))}
                        </>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn-link">
              <i className="fa fa-angle-left"></i> back to shopping
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box mb30">
              <div className="box-head">
                <h3 className="head-title">Price Details</h3>
              </div>
              <div className="box-body2">
                <div className=" table-responsive">
                  <div className="pay-amount ">
                    <table className="table mb20">
                      <tbody>
                        <tr>
                          <th>
                            <span>Price ({cartItems.length} items)</span>
                          </th>
                          <td> ${totalPrice.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th>
                            <span>Delivery Charges</span>
                          </th>
                          <td>
                            <strong className="text-green">Free</strong>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th>
                            <span className="mb0" style={{ fontWeight: "700" }}>
                              Amount Payable
                            </span>
                          </th>
                          <td style={{ fontWeight: "700", color: "#1c1e1e" }}>
                            ${totalPrice.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="button">Proceed To Checkout</button>
                </div>
              </div>
            </div>
            <div className="box mb30"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
