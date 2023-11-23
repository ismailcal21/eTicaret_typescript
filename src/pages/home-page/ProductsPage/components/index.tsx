import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FullProductType, Product, ProductType } from "../../../../types";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../../redux/store";
import { useEffect } from "react";
import axios from "axios";

export type RouteParamsType = {
  product_id: string;
};

const ProductDetailsComponent = () => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const productState: ProductType = useSelector((state: RootStateType) => {
    return state.products;
  });
  const params = useParams<RouteParamsType>();
  console.log("params", params.product_id);
  console.log("productState", productState);
  const productId = params.product_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product>(
          `https://dummyjson.com/products/${productId}`
        );

        console.log("productsId", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box">
              <div className="box-body">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <ul id="demo1_thumbs" className="slideshow_thumbs">
                      <li>
                        <a
                          href="images/thumb_big_1.jpg"
                          data-desoslide-index="0"
                        >
                          {data.images.map((i, k) => (
                            <div className=" thumb-img">
                              <img src={i} alt="" />
                            </div>
                          ))}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div id="slideshow">
                      <div className="desoslide-wrapper">
                        <img
                          className="img-responsive animated fadeIn"
                          src={data.thumbnail}
                        />
                        <div
                          className="desoslide-overlay"
                          style={{
                            left: "0px",
                            top: "304px",
                            width: "336px",
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                            opacity: "0.7",
                          }}
                        >
                          <div className="desoslide-controls-wrapper">
                            <a
                              className="desoslide-controls prev"
                              href="#prev"
                            ></a>
                            <a
                              className="desoslide-controls pause"
                              href="#pause"
                              style={{ display: "none" }}
                            ></a>
                            <a
                              className="desoslide-controls play"
                              href="#play"
                            ></a>
                            <a
                              className="desoslide-controls next"
                              href="#next"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="product-single">
                      <h2> {data.title} </h2>
                      <div className="product-rating">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                        <span>
                          <i className="fa fa-star-o"></i>
                        </span>
                        <span className="text-secondary">
                          &nbsp;({data.rating} Review Stars)
                        </span>
                      </div>
                      <p className="product-price" style={{ fontSize: "38px" }}>
                        ${data.price}
                      </p>
                      <p>{data.description}</p>
                      <div className="product-quantity">
                        <h5>Quantity</h5>
                        <div className="quantity mb20">
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
                      <button type="submit" className="btn btn-default">
                        <i className="fa fa-shopping-cart"></i>&nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
