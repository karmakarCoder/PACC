import Container from "../../common/Container";
import partnershipBg from "../../assets/Images/partnership-desktop.78044807.webp";
import { GoArrowRight } from "react-icons/go";

export default function Partnership() {
  return (
    <div
    id="partnership"
      className="w-full h-full py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${partnershipBg})` }}
    >
      <Container>
        <h4 className="text-3xl lg:text-6xl font-bold text-white mb-5 lg:mb-10 max-w-[700px] lg:leading-16">
          Partnership Skills Verification
        </h4>
        <p className="text-base font-normal text-white max-w-[550px]">
          Partnerships are vital because they foster innovation and drive growth
          through shared resources and expertise
        </p>

        <div className="flex items-center gap-4 text-sm lg:text-lg mt-10">
          <button className="py-3 md:py-1.5 font-medium px-4 md:px-6 rounded-sm bg-primary text-[#dde2e2] duration-75 leading-normal flex items-center gap-2 cursor-pointer hover:bg-[#126f74]">
            Sign up as Assessor{" "}
            <GoArrowRight className="text-xl hidden sm:block" />
          </button>
          <button
            className="py-3 md:py-1.5 leading-normal
               hover:bg-primary hover:text-[#e1edee] font-medium px-4 md:px-6 rounded-sm duration-75 cursor-pointer flex items-center gap-2 bg-white text-primary"
          >
            Sign in as Assessor{" "}
            <GoArrowRight className="text-xl hidden sm:block" />
          </button>
        </div>
      </Container>
    </div>
  );
}
