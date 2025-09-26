import { useState } from "react";
import Container from "../../common/Container";
import CustomSelect from "../../common/CustomSelect";
import MapSvg from "../../assets/Svg/MapSvg";

export default function TestCenter({ onSearch }) {
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");

  // Sample data - replace with your actual data
  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "in", label: "India" },
    { value: "br", label: "Brazil" },
    { value: "mx", label: "Mexico" },
  ];

  const occupations = [
    { value: "engineer", label: "Engineer" },
    { value: "doctor", label: "Doctor" },
    { value: "teacher", label: "Teacher" },
    { value: "nurse", label: "Nurse" },
    { value: "accountant", label: "Accountant" },
    { value: "lawyer", label: "Lawyer" },
    { value: "architect", label: "Architect" },
    { value: "chef", label: "Chef" },
    { value: "pilot", label: "Pilot" },
    { value: "designer", label: "Designer" },
  ];

  const cities = [
    { value: "new-york", label: "New York" },
    { value: "london", label: "London" },
    { value: "toronto", label: "Toronto" },
    { value: "sydney", label: "Sydney" },
    { value: "berlin", label: "Berlin" },
    { value: "paris", label: "Paris" },
    { value: "tokyo", label: "Tokyo" },
    { value: "mumbai", label: "Mumbai" },
    { value: "sao-paulo", label: "São Paulo" },
    { value: "mexico-city", label: "Mexico City" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(country, occupation, city);
  };

  return (
    <div className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* left */}

          <div className="md:max-w-[40%] w-full mt-10 lg:mt-0">
            {/* Header */}
            <div className="text-3xl lg:text-5xl font-bold font-montserrat w-full break-words">
              <h4 className="text-[#4f7183] leading-none">
                Find test center <br />
                <span className="text-[#14415a]">in your country</span>
              </h4>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-7 lg:mt-10">
              <CustomSelect
                label="Country"
                placeholder="Select country"
                options={countries}
                value={country}
                onChange={setCountry}
              />

              <CustomSelect
                label="Occupation"
                placeholder="Select Occupation"
                options={occupations}
                value={occupation}
                onChange={setOccupation}
              />

              <CustomSelect
                label="City"
                placeholder="Select City"
                options={cities}
                value={city}
                onChange={setCity}
              />

              {/* Search Button */}
              <div className="mt-8">
                <button
                  disabled={!city || !occupation || !country}
                  type="submit"
                  className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed font-montserrat cursor-pointer hover:bg-[#178f96] bg-primary text-white font-normal py-3 px-6 rounded-sm transition-all duration-200"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* right */}
          <div>
            <MapSvg />
          </div>
        </div>
      </Container>
    </div>
  );
}
