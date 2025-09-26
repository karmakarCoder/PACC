import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../common/Container";
import logo from "../assets/Images/logo.svg";
import logo2 from "../assets/Images/logo2.png";
import { CiGlobe } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineBars2 } from "react-icons/hi2";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuList = [
    { name: "Test centers", path: "/" },
    { name: "Check certificate", path: "" },
    { name: "Labor result", path: "" },
    { name: "Partnership", path: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-5 z-[555] transition-all duration-500 ${
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
              {menuList.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    `relative group transition-colors duration-300 ${
                      scrolled ? "text-black" : "text-white"
                    } ${
                      isActive
                        ? "text-primary"
                        : isPending
                        ? "text-gray-400"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {scrolled && (
              <div className="sm:flex hidden items-center gap-4 text-base">
                <button className="py-1.5 font-medium px-4 rounded-sm bg-primary text-[#dde2e2] duration-75 leading-normal  cursor-pointer hover:bg-[#126f74]">
                  Sign in
                </button>
                <button
                  className="py-1.5 leading-normal
               hover:bg-primary hover:text-[#e1edee] font-medium px-4 rounded-sm duration-75 cursor-pointer bg-[#cde6e7] text-primary"
                >
                  Sign Up
                </button>
              </div>
            )}

            <p
              className={`text-base font-normal flex items-center gap-1 ${
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
                onClick={() => setMobileMenu(!mobileMenu)}
                className="size-9 bg-primary text-white rounded-full flex items-center justify-center"
              >
                <HiOutlineBars2 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white shadow-md py-4 transition-all duration-300">
          <Container>
            <div className="flex flex-col gap-4 text-black">
              {menuList.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    `text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-blue-500 font-bold"
                        : isPending
                        ? "text-gray-400"
                        : "text-black"
                    } hover:text-blue-500`
                  }
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
