import { SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide";

import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const HomePage = (props: any) => {
  return (
    <>
      Home
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
        aria-label="My Favorite Images"
      >
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
      </Splide> */}
    </>
  );
};

export default HomePage;
