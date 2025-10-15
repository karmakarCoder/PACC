import { BsArrowRight } from "react-icons/bs";
import Container from "../../common/Container";
import overlay from "../../assets/Images/check-mask.c04acc23.svg";
import cardBg from "../../assets/Images/check-certificate-desktop.d64866bb.webp";
import cardBg2 from "../../assets/Images/check-labor-mobile.4c6443ac.webp";
import CertificateModal from "../../common/CertificateModal";
import ResultModal from "../../common/ResultModal";
import { useState } from "react";

export default function CheckCertificate() {
  const [openModal, setopenModal] = useState(false);
  const [openModal2, setopenModal2] = useState(false);

  // handle verify
  const handleVerify = (passport, serial) => {
    return {
      serial: "168998740",
      passport: "A04252094",
      validUntil: "13/08/2030",
      occupation: "Construction Worker",
      laborName: "MD SHAHABUL ALI",
    };
  };
  return (
    <div className="lg:py-20 py-5">
      <Container>
        <div>
          <div>
            <h4 className="text-[#4f7183] lg:leading-14 max-w-[500px] text-3xl lg:text-5xl font-bold font-montserrat w-full">
              Check certificate
              <span className="text-[#14415a]"> & Exam result</span>
            </h4>
            <div className="flex flex-col md:flex-row items-center gap-5 lg:mt-14 mt-10">
              <div className="relative  group w-full rounded-md min-h-[350px] lg:min-h-[500px] overflow-hidden">
                <img
                  src={overlay}
                  alt=""
                  className="w-full h-full absolute top-0 left-0 z-40"
                />
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover group-hover:scale-110 duration-500 bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${cardBg})`,
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-700/85 to-teal-800/80" />

                {/* Content */}
                <div className="relative z-[111] p-6 group-hover:p-8 lg:group-hover:p-20 duration-300 cursor-pointer transition-normal lg:p-14 flex flex-col">
                  {/* Header Section */}
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl max-w-[400px] font-medium text-white leading-tight">
                      Check certificate validity
                    </h1>

                    <p className="text-gray-200 font-medium text-base md:text-lg max-w-sm">
                      To ensure the authenticity of the certificate, please
                      verify its validity through our online certificate
                      verification system
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="mt-5">
                    <button
                      onClick={() => setopenModal(true)}
                      className="group inline-flex items-center gap-3 bg-white text-slate-700 cursor-pointer font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-all text-lg duration-200 transform  focus:outline-none"
                    >
                      <span>Check certificate</span>
                      <BsArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative  group w-full rounded-md min-h-[350px] lg:min-h-[500px] overflow-hidden">
                <img
                  src={overlay}
                  alt=""
                  className="w-full h-full absolute top-0 left-0 z-40"
                />
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover group-hover:scale-110 duration-500 bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${cardBg2})`,
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-700/85 to-teal-800/80" />

                {/* Content */}
                <div className="relative z-[111] p-6 group-hover:p-8 lg:group-hover:p-20 duration-300 cursor-pointer transition-normal lg:p-14 flex flex-col">
                  {/* Header Section */}
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl max-w-[400px] font-medium text-white leading-tight">
                      Check labor result
                    </h1>

                    <p className="text-gray-200 font-medium text-base md:text-lg max-w-sm">
                      To check your labor result, you can visit the official
                      labor department website and enter your credentials to
                      access your test scores
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="mt-5">
                    <button
                      onClick={() => setopenModal2(true)}
                      className="group inline-flex items-center gap-3 bg-white text-slate-700 cursor-pointer font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-all text-lg duration-200 transform  focus:outline-none"
                    >
                      <span>Check result</span>
                      <BsArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* certificate modal */}
      <CertificateModal
        isOpen={openModal}
        onClose={() => setopenModal(false)}
        onVerify={handleVerify}
      />

      {/* result modal */}
      <ResultModal isOpen={openModal2} onClose={() => setopenModal2(false)} />
    </div>
  );
}
