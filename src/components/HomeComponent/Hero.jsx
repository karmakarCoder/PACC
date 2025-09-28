import bg1 from "../../assets/Images/hero-slide-1.dcd3db55.webp";
import Container from "../../common/Container";

export default function Hero() {
  return (
    <div
      className="w-full lg:h-screen bg-center bg-cover bg-no-repeat pb-36 lg:pb-0 pt-36 lg:pt-70"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <Container>
        <div className="">
          <h1 className="text-2xl lg:text-6xl font-medium text-white max-w-[900px] w-full">
            Elevating Careers, Unlocking New Opportunities
          </h1>
          <p className="text-lg font-light max-w-[500px] w-full text-white mt-5 mb-7">
            Professional Accreditation Program helps workers stand out by
            verifying their skills, opening doors to new and better job
            opportunities.
          </p>
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://svp-international.pacc.sa/auth/login"
              className="py-1.5 font-medium px-4 rounded-sm bg-primary text-[#dde2e2] duration-75 leading-normal  cursor-pointer hover:bg-[#126f74]"
            >
              Sign in
            </a>
            <a
              href="https://svp-international.pacc.sa/auth/register"
              className="py-1.5 leading-normal
               hover:bg-primary hover:text-[#e1edee] font-medium px-4 rounded-sm duration-75 cursor-pointer bg-[#cde6e7] text-primary"
            >
              Sign Up
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
