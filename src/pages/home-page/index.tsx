import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue"; // veya başka bir tema
import "@splidejs/react-splide/css/sea-green"; // veya başka bir tema

import { useEffect } from "react";
import { ProductType } from "../../types";
import axios from "axios";
import { AxiosResponse } from "axios";
import { images } from "../../data";
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

      <Splide
        options={{
          autoHeight: true,
        }}
      >
        {images.map((img) => (
          <SplideSlide>
            <img src={img.image} />
          </SplideSlide>
        ))}
      </Splide>

      {/* </Splide> */}
    </div>
  );
};

export default HomePage;
