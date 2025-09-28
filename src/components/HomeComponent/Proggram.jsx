import Container from "../../common/Container";
import proggramImg from "../../assets/Images/advantages-bg-2x.5b15120c.webp";

import personIcon from "../../assets/Images/icon-person.6b3d6b6c.svg";
import icon2 from "../../assets/Images/icon-star.3d8fe108.svg";
import icon3 from "../../assets/Images/icon-crown.1d8030d5.svg";
import icon4 from "../../assets/Images/icon-bag.76f3be78.svg";

export default function Proggram() {
  const data = [
    {
      name: `Enhanced Workforce Competence
`,
      description: `The program ensures that professional workers have the qualifications and skills necessary to be competent in the Saudi labor market.
`,
      image: personIcon,
    },
    {
      name: `Quality Assurance in Job Performance

`,
      description: `This program contributes to improving job performance and the quality of labor market outcomes by verifying professional qualifications.

`,
      image: icon4,
    },
    {
      name: `Increased Productivity


`,
      description: `The completion of professional accreditation program requirements leads to increased productivity as employees are better equipped to perform their roles effectively.


`,
      image: icon2,
    },
    {
      name: `Competitive Edge for Saudi Arabia



`,
      description: `Professional Accreditation Program enhances the competitiveness of the Saudi workforce globally.



`,
      image: icon3,
    },
  ];
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
          {data.map((item, index) => (
            <div key={index}>
              <img src={item?.image} alt="" className="w-16 lg:w-20" />
              <h5 className="text-xl lg:text-3xl font-semibold w-full lg:max-w-[200px] text-[#14415a] py-3">
                {item?.name}
              </h5>
              <p className="text-base w-full lg:max-w-[350px] font-normal text-[#8394a8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
