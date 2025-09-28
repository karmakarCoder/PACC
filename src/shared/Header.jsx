import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../common/Container";
import logo from "../assets/Images/logo.svg";
import logo2 from "../assets/Images/logo2.png";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineBars2 } from "react-icons/hi2";
import CertificateModal from "../common/CertificateModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full py-5 z-[455] transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md translate-y-0"
            : "bg-transparent translate-y-1.5"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-6">
              <Link to="/">
                {scrolled ? (
                  <img src={logo} alt="logo" className="lg:w-40 w-36" />
                ) : (
                  <img src={logo2} alt="logo" className="lg:w-40 w-36" />
                )}
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-6 text-base font-normal">
                <Link
                  onClick={() => setopenModal(true)}
                  className={`relative group transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Test centers
                </Link>

                <Link
                  onClick={() => setopenModal(true)}
                  className={`relative group transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Check certificate
                </Link>

                <Link
                  onClick={() => setopenModal(true)}
                  className={`relative group transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Labor result
                </Link>

                <a
                  href="#partnership"
                  className={`relative group transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Partnership
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              {scrolled && (
                <div className="sm:flex hidden items-center gap-4 text-base">
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
              )}

              <p
                className={`text-base hidden font-normal lg:flex items-center gap-1 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <CiGlobe className="text-2xl" />
                English
              </p>

              {/* Mobile Menu Toggle */}
              <div
                className={`lg:hidden ${
                  scrolled ? "text-primary " : "text-white"
                }`}
              >
                <button
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                    setopenModal(false);
                  }}
                  className="size-9 bg-primary text-white rounded-full flex items-center justify-center"
                >
                  <HiOutlineBars2 className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="w-full h-full bg-black/20 backdrop-blur-2xl fixed top-0 left-0 z-[555]"
        ></div>
      )}

      <div
        className={`lg:hidden fixed top-0 right-0 px-6 pt-10 z-[555] md:w-[40%] w-[60%] h-full bg-white shadow-md py-4 transition-all duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="flex flex-col gap-4 text-black">
          <NavLink
            onClick={() => {
              setMobileMenu(false);
              setopenModal(true);
            }}
            className="relative group transition-colors duration-300 hover:underline text-primary"
          >
            Test centers
          </NavLink>

          <NavLink
            onClick={() => setMobileMenu(false)}
            className="relative group transition-colors duration-300 hover:underline text-primary"
          >
            Check certificate
          </NavLink>

          <NavLink
            onClick={() => setMobileMenu(false)}
            className="relative group transition-colors duration-300 hover:underline text-primary"
          >
            Labor result
          </NavLink>

          <NavLink
            onClick={() => setMobileMenu(false)}
            className="relative group transition-colors duration-300 hover:underline text-primary"
          >
            Partnership
          </NavLink>
        </div>

        <p
          className={`text-base font-normal flex items-center gap-1 text-black mt-5`}
        >
          <CiGlobe className="text-2xl" />
          English
        </p>

        <div className="flex items-center gap-4 text-base mt-6">
          <a
            href="https://svp-international.pacc.sa/auth/login"
            className="py-1.5 font-medium px-2 rounded-sm bg-primary text-[#dde2e2] duration-75 leading-normal  cursor-pointer hover:bg-[#126f74]"
          >
            Sign in
          </a>
          <a
            href="https://svp-international.pacc.sa/auth/register"
            className="py-1.5 leading-normal
               hover:bg-primary hover:text-[#e1edee] font-medium px-2 rounded-sm duration-75 cursor-pointer bg-[#cde6e7] text-primary"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* modal */}
      <CertificateModal
        isOpen={openModal}
        onClose={() => setopenModal(false)}
      />
    </>
  );
}
