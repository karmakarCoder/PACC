import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect = ({ label, placeholder, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef(null);

  //   filter
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //   select value
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="mb-6 font-montserrat">
      <label className="block text-lg font-normal text-black mb-2">
        {label}
      </label>
      <div className="relative" ref={selectRef}>
        <div
          className={`w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100 ${
            isOpen ? "" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-sm ${
                selectedOption ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <IoIosArrowDown
              size={20}
              className={`text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-sm shadow-lg z-50 transition-all duration-200 origin-top ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* Search input for large lists */}
          {options.length > 5 && (
            <div className="p-2 border-b border-gray-100">
              <input
                type="text"
                placeholder={`Search ${label.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Options */}
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-3 text-sm cursor-pointer transition-colors duration-150 hover:bg-blue-50 hover:text-primary ${
                    value === option.value
                      ? "bg-blue-50 text-primary font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                No options found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
