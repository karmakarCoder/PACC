import Container from "../../common/Container";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import logo1 from "../../assets/Images/partner-logo-bmet.cbf0ede2.svg";

export default function Partner() {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        <h4 className="text-3xl lg:text-6xl font-bold lg:mb-5 text-[#8394a8]">
          Partners
        </h4>
      </Container>
      <div>
        <Splide
          className="!px-0 !py-0 h-[450px]"
          options={{
            perPage: 4,
            gap: "1rem",
            arrows: false,
            pagination: false,
            padding: "5rem",
            autoplay: true,
            breakpoints: {
              1280: {
                perPage: 4,
                gap: "1rem",
              },
              1024: {
                perPage: 3,
                gap: ".8rem",
              },
              768: {
                perPage: 2,
                gap: ".7rem",
              },
              480: {
                perPage: 1,
                gap: "1rem",
                padding: "3rem",
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {[...Array(10)].map((_, index) => (
            <SplideSlide
              key={index}
              className={"hover:scale-105 duration-200 py-10"}
            >
              <div className="w-full  bg-[#f9f0cf] rounded-2xl p-10 flex flex-col items-center justify-center gap-5">
                <h4
                  className="text-3xl font-semibold text-black
                 uppercase"
                >
                  BMET
                </h4>
                <img src={logo1} alt="" className="w-36 lg:w-40" />
                <button className="w-full cursor-pointer hover:bg-primary hover:text-white   duration-200 py-2 text-primary bg-white rounded-md text-lg font-medium">
                  Go to website
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
