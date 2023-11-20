import { Link } from "react-router-dom";

function Header() {
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
                  <a href="#">Help</a>s
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: "158px" }}
      >
        <div className="header-wrapper" style={{ width: "1903px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="/assets/images/6.webp"
                      style={{ width: "100px", height: "80px" }}
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
                        <sup className="cart-quantity">1</sup>
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
                        <a href="index.html">Home</a>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        <a href="#">Mobiles</a>
                        <ul style={{ display: "block" }}>
                          <li>
                            <a href="product-list.html">Mobile List</a>
                          </li>
                          <li>
                            <a href="product-single.html">Mobile Single </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        <a href="#">Pages</a>
                        <ul style={{ display: "block" }}>
                          <li>
                            <a href="checkout.html">Checkout Form</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>{" "}
                          </li>
                          <li>
                            <Link to="login">Login</Link>{" "}
                          </li>
                          <li>
                            <Link to="register">Register</Link>{" "}
                          </li>
                          <li>
                            <a href="404-page.html">404-page</a>{" "}
                          </li>
                          <li>
                            <a href="styleguide.html">styleguide</a>{" "}
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        <a href="#">Blog</a>
                        <ul style={{ display: "block" }}>
                          <li>
                            <a href="blog-default.html">Blog Default</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="template-feature.html">Template Feature</a>
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
