import bg1 from "../../assets/Images/hero-slide-1.dcd3db55.webp";
import Container from "../../common/Container";

export default function Hero() {
  return (
    <div
      className="w-full min-h-screen bg-center bg-cover bg-no-repeat  flex-auto items-center flex"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 2xl:px-0">
        <div>
          <h1 className="text-2xl lg:text-6xl font-semibold text-white max-w-[300px] md:max-w-[900px] w-full">
            Elevating Careers, Unlocking New Opportunities
          </h1>
          <p className="text-sm md:text-lg font-light max-w-[500px] w-full text-white mt-6 mb-8">
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
      </div>
    </div>
  );
}
