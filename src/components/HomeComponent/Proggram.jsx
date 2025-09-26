import Container from "../../common/Container";
import proggramImg from "../../assets/Images/advantages-bg-2x.5b15120c.webp";

import personIcon from "../../assets/Images/icon-person.6b3d6b6c.svg";

export default function Proggram() {
  return (
    <div className="py-20">
      <Container>
        <h4 className="text-[#4f7183] lg:leading-14 text-3xl sm:max-w-[620px] lg:text-5xl font-bold font-montserrat w-full">
          <span>Advantages of</span> <br />
          <span className="text-[#14415a]">
            Professional Accreditation Program
          </span>
        </h4>
      </Container>
      <div className="mt-10 lg:mt-20 flex items-center gap-10 justify-between">
        <div className="max-w-[500px] hidden lg:block w-full overflow-hidden rounded-r-md">
          <img
            src={proggramImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:grid-cols-2 grid gap-8 px-4 lg:px-0">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <img src={personIcon} alt="" className="w-16 lg:w-20" />
              <h5 className="text-xl lg:text-3xl font-semibold w-full lg:max-w-[200px] text-[#14415a] py-3">
                Enhanced Workforce Competence
              </h5>
              <p className="text-base w-full lg:max-w-[350px] font-normal text-[#8394a8]">
                The program ensures that professional workers have the
                qualifications and skills necessary to be competent in the Saudi
                labor market.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
