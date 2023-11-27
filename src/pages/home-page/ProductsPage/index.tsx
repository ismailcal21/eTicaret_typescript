import React from "react";
import { useEffect, useState } from "react";
import { ProductType } from "../../../types";
import axios from "axios";
import { AxiosResponse } from "axios";
import ProductPageComponent from "./components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/reducers/productReducer";

const ProductsPage = () => {
  const [data, setData] = useState<ProductType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); //kategoriye gore siralama icin
  const [sortOption, setSortOption] = useState<string | null>(null); // fiyata göre siralama icin

  const dispatch = useDispatch();
  const productState: ProductType = useSelector((state: RootStateType) => {
    return state.products;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProductType>(
          "https://dummyjson.com/products"
        );
        setData(response.data);
        console.log("products", response.data);
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Kategoriye gore siralama baslangic

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? data?.products.filter((product) => product.category === selectedCategory)
    : data?.products;

  //kategoriye gore siralama son

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const sortedProducts = () => {
    if (sortOption === "Low Price") {
      return data?.products.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === "High Price") {
      return data?.products.slice().sort((a, b) => b.price - a.price);
    } else {
      return data?.products;
    }
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div id="cssmenu">
                <ul>
                  <li className="has-sub">
                    <a onClick={() => handleCategoryClick("")}>All Products</a>
                    <a onClick={() => handleCategoryClick("smartphones")}>
                      Smart Phones
                    </a>
                    <a onClick={() => handleCategoryClick("fragrances")}>
                      Fragrances
                    </a>
                    <a onClick={() => handleCategoryClick("laptops")}>Laptop</a>
                    <a onClick={() => handleCategoryClick("home-decoration")}>
                      Home-decoration
                    </a>
                    <a onClick={() => handleCategoryClick("groceries")}>
                      groceries
                    </a>
                    <a onClick={() => handleCategoryClick("skincare")}>
                      skincare
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                  <form>
                    <div className="select-option form-group">
                      <select
                        name="select"
                        className="form-control"
                        onChange={handleSortChange}
                      >
                        <option value="">Select</option>

                        <option value="">Low Price</option>
                        <option value="">High Price</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                {filteredProducts ? (
                  <>
                    {filteredProducts.map((product, index) => (
                      <Link
                        to={`/productDetail/${product.id}`}
                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30"
                        key={index}
                      >
                        <div className="product-block">
                          <div className="product-img">
                            <img
                              src={product.images[2]}
                              style={{ height: "100%", width: "100%" }}
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <h5>
                              <a href="#" className="product-title">
                                <strong>{product.brand}</strong>
                              </a>
                            </h5>
                            <div className="product-meta">
                              <a href="#" className="product-price">
                                {product.price}
                              </a>
                              <a href="#" className="discounted-price"></a>
                              <span className="offer-price">
                                {product.discountPercentage}off
                              </span>
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
                      </Link>
                    ))}
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="st-pagination">
                    <ul className="pagination">
                      <li>
                        <a href="#" aria-label="previous">
                          <span aria-hidden="true">Previous</span>
                        </a>{" "}
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>{" "}
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
};

export default ProductsPage;
