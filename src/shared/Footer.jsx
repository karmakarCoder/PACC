import { Link } from "react-router-dom";
import Container from "../common/Container";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo1 from "../assets/Images/takamolLogo.9fa6c143.svg";
import logo2 from "../assets/Images/hrsdLogo.324f4bbf.svg";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Footer() {
  // footer list
  const footerList = [
    {
      name: "Privacy Policy",
      path: "https://svp-international.pacc.sa/visitor/privacy-policy",
    },
    {
      name: "Terms Of Use",
      path: "https://svp-international.pacc.sa/visitor/terms-of-use",
    },
    {
      name: "Knowledge center",
      path: "https://svp-international.pacc.sa/visitor/knowledge/",
    },
  ];

  // social links
  const socialLink = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/SaudiPACC?mibextid=LQQJ4d",
    },
    { icon: <FaXTwitter />, url: "https://x.com/SaudiPACC" },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/showcase/professional-accreditation/",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@professionalaccreditation3045/featured",
    },
  ];
  return (
    <div className="py-10 border-t-primary border-t-2">
      <Container>
        <div className="flex items-center flex-wrap justify-between gap-8">
          <div className="text-base max-w-[300px] w-full gap-x-4 gap-2 text-center justify-center flex flex-wrap items-center font-normal text-[#8394a8]">
            {footerList?.map((item, index) => (
              <a href={item?.path} key={index} className="hover:underline">
                {item?.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {socialLink?.map((item, index) => (
                <a
                  href={item?.url}
                  key={index}
                  className="size-7 rounded-sm duration-300 hover:bg-primary hover:text-[#eaf2f3] text-lg flex items-center justify-center text-primary bg-[#eaf2f3]"
                >
                  {item?.icon}
                </a>
              ))}
            </div>
            <p className="text-sm font-normal text-[#8394a8]">
              Copyright © {new Date().getFullYear()} PACC All rights reserved
            </p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <img src={logo1} alt="" className="w-20" />
            <img src={logo2} alt="" className="w-40" />
          </div>
        </div>
      </Container>

      {/* contact support */}
      <div className="py-2.5 px-6 rounded-full cursor-pointer duration-200 hover:bg-[#18949b] bg-primary flex items-center gap-1.5 text-white font-medium fixed bottom-10 right-10 z-50">
        <AiOutlineQuestionCircle className="text-xl" /> Support
      </div>
    </div>
  );
}
