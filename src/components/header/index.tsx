import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStateType } from "../../redux/store";

function Header() {
  const cartItems = useSelector((state: RootStateType) => state.cart.items);
  console.log("cart2", cartItems);
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
              <p className="top-text">Flexible Delivery, Fast Delivery.</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <ul>
                <li>+180-123-4567</li>
                <li>info@demo.com</li>
                <li>
                  <Link to="#">Help</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: "5%" }}
      >
        <div className="header-wrapper" style={{ width: "100%" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="/assets/images/6.webp"
                      style={{ width: "30%", height: "30%" }}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="search-bg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here"
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="account-section">
                  <ul>
                    <li>
                      <Link to="login" className="title hidden-xs">
                        Login
                      </Link>
                    </li>
                    <li className="hidden-xs">|</li>
                    <li>
                      <Link to="register" className="title hidden-xs">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="cart" className="title">
                        <i className="fa fa-shopping-cart"></i>
                        <sup className="cart-quantity">{cartItems.length}</sup>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div id="navigation" className="">
                    <div id="menu-button">Menu</div>
                    <ul style={{ display: "block" }}>
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        <Link to="#">Categories</Link>
                        <ul style={{ display: "block" }}>
                          <li>
                            <Link to="products">Products</Link>
                          </li>
                          <li>
                            <Link to="product-single.html">Mobile Single </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="about.html">About</Link>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        <Link to="#">Pages</Link>
                        <ul style={{ display: "block" }}>
                          <li>
                            <Link to="checkout.html">Checkout Form</Link>
                          </li>
                          <li>
                            <Link to="cart.html">Cart</Link>{" "}
                          </li>
                          <li>
                            <Link to="login">Login</Link>{" "}
                          </li>
                          <li>
                            <Link to="register">Register</Link>{" "}
                          </li>
                          <li>
                            <Link to="404-page.html">404-page</Link>{" "}
                          </li>
                          <li>
                            <Link to="styleguide.html">styleguide</Link>{" "}
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        <Link to="#">Blog</Link>
                        <ul style={{ display: "block" }}>
                          <li>
                            <Link to="blog-default.html">Blog Default</Link>
                          </li>
                          <li>
                            <Link to="blog-single.html">Blog Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="contact-us.html">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="template-feature.html">Template Feature</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
