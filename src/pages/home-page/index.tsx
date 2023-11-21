import { SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide";

import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { useEffect } from "react";
import { ProductType } from "../../types";
import axios from "axios";
import { AxiosResponse } from "axios";

// export type optionType = {
//   perPage: number,
//   arrows: boolean,
//   pagination: boolean,
//   drag: string,
//   gap: string,
//   type: string,
//   height:string
// };

const HomePage = () => {
  useEffect(() => {
    axios
      .get<ProductType[]>("https://dummyjson.com/products")
      .then((response: AxiosResponse<ProductType[], any>) => {
        console.log("Products", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <Splide
        options={{
          perPage: 1,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "5rem",
          type: "loop",
          height: "600px",
        }}
        
      > */}
      <SplideSlide>
        <img
          src="https://ecommerce-template.udemig.dev/images/slider_3.jpg"
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://ecommerce-template.udemig.dev/images/slider_1.jpg"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://ecommerce-template.udemig.dev/images/slider_2.jpg"
          alt="Image 3"
        />
      </SplideSlide>
      {/* </Splide> */}
    </div>
  );
};

export default HomePage;
